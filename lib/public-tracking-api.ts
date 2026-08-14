import { STATUS_CONFIG } from "@/lib/parcel-status";

interface PublicTrackingEventApi {
  id?: string | number;
  timestamp?: string;
  statusCode?: string;
  statusName?: string;
  statusDescription?: string | null;
  location?: string | null;
  locationId?: string | null;
  updateMethod?: string;
  userName?: string | null;
  source?: string;
  status?: string;
  title?: string;
  description?: string;
  agency?: string;
  facility?: string;
  created_at?: string;
  occurred_at?: string;
}

interface PublicTrackingParcelApi {
  id?: number;
  hbl?: string;
  tracking_number?: string;
  weight?: number;
  description?: string;
  status?: string;
  events?: PublicTrackingEventApi[];
  history?: PublicTrackingEventApi[];
  tracking_events?: PublicTrackingEventApi[];
}

interface PublicTrackingApiResponse {
  order_id: number;
  city?: string;
  province?: string;
  weight?: number;
  description?: string;
  agency?: string;
  service_type?: "MARITIME" | "AIR";
  parcels: PublicTrackingParcelApi[];
}

export interface TrackingEvent {
  id: string;
  title: string;
  description?: string;
  location?: string;
  occurred_at: string;
}

export interface TrackingParcel {
  id: string;
  tracking_number: string;
  label: string;
  weight: number;
  status?: string;
  events: TrackingEvent[];
}

export interface TrackingResult {
  order_id: number;
  agency: string;
  city?: string;
  province?: string;
  weight: number;
  description?: string;
  service_type?: "MARITIME" | "AIR";
  parcels: TrackingParcel[];
}

const PUBLIC_TRACKING_LABELS: Record<string, string> = {
  IN_AGENCY: "En agencia",
  IN_DISPATCH: "En despacho",
  IN_WAREHOUSE: "En almacén",
  IN_CONTAINER: "En contenedor",
  IN_TRANSIT: "En tránsito",
  AT_PORT_OF_ENTRY: "En puerto de entrada",
  RELEASED_FROM_CUSTOMS: "Liberado de aduanas",
  OUT_FOR_DELIVERY: "Despachado a mensajero",
  RECEIVED_AT_WAREHOUSE: "Entrada en almacén",
  WAREHOUSE_TRANSFER: "Transferencia entre almacenes",
  DELIVERED: "Entregado",
};

function getStatusLabel(status: string | undefined): string {
  if (!status) return "";
  return STATUS_CONFIG[status]?.label ?? status;
}

function getEventTitle(raw: PublicTrackingEventApi): string {
  const statusCode = raw.statusCode ?? raw.status ?? "";
  const statusName = raw.statusName?.trim() ?? "";

  if (raw.source === "HM" && statusName) return statusName;
  if (statusName && /#\d+/.test(statusName)) return statusName;

  if (PUBLIC_TRACKING_LABELS[statusCode]) return PUBLIC_TRACKING_LABELS[statusCode];

  const configLabel = getStatusLabel(statusCode);
  if (configLabel) return configLabel;

  return statusName || "Actualización";
}

function getEventTimestamp(raw: PublicTrackingEventApi): number {
  const iso = raw.timestamp ?? raw.occurred_at ?? raw.created_at;
  if (!iso) return 0;
  return new Date(iso).getTime();
}

function normalizeEvent(raw: PublicTrackingEventApi, index: number): TrackingEvent {
  const statusCode = raw.statusCode ?? raw.status ?? "";
  const occurredAt =
    raw.timestamp ?? raw.occurred_at ?? raw.created_at ?? new Date().toISOString();

  return {
    id: String(raw.id ?? `${statusCode}-${occurredAt}-${index}`),
    title: getEventTitle(raw),
    description: raw.statusDescription?.trim() || undefined,
    location: raw.location?.trim() || undefined,
    occurred_at: occurredAt,
  };
}

function normalizeParcel(raw: PublicTrackingParcelApi, index: number): TrackingParcel {
  const rawEvents = raw.events ?? raw.history ?? raw.tracking_events ?? [];
  const sortedEvents = [...rawEvents].sort(
    (a, b) => getEventTimestamp(a) - getEventTimestamp(b)
  );
  let events = sortedEvents.map(normalizeEvent);

  const latestApiEvent = sortedEvents[sortedEvents.length - 1];
  const status = latestApiEvent?.statusCode ?? latestApiEvent?.status ?? raw.status;
  const hbl = raw.hbl ?? raw.tracking_number ?? `Paquete ${index + 1}`;

  if (events.length === 0 && status) {
    events = [
      {
        id: "0",
        title: getStatusLabel(status),
        description: raw.description || undefined,
        occurred_at: new Date().toISOString(),
      },
    ];
  }

  return {
    id: hbl,
    tracking_number: hbl,
    label: raw.description ?? "",
    weight: raw.weight ?? 0,
    status,
    events,
  };
}

function normalizeTrackingResponse(data: PublicTrackingApiResponse): TrackingResult {
  const parcels = (data.parcels ?? []).map((parcel, index) =>
    normalizeParcel(parcel, index)
  );
  const parcelWeight = parcels.reduce((sum, parcel) => sum + parcel.weight, 0);

  return {
    order_id: data.order_id,
    agency: data.agency ?? "CTEnvios",
    city: data.city,
    province: data.province,
    weight: data.weight ?? parcelWeight,
    description: data.description,
    service_type: data.service_type,
    parcels,
  };
}

export async function fetchPublicTracking(
  orderId: string
): Promise<TrackingResult | null> {
  const trimmed = orderId.trim();
  if (!trimmed) return null;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  const response = await fetch(
    `${baseUrl}/tracking/lookup/${encodeURIComponent(trimmed)}`,
    {
      headers: { Accept: "application/json" },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Tracking lookup failed (${response.status})`);
  }

  return normalizeTrackingResponse(
    (await response.json()) as PublicTrackingApiResponse
  );
}

export function resolveTrackingId(
  pathOrderId?: string,
  searchParams?: URLSearchParams
): string {
  const fromPath = pathOrderId?.trim() ?? "";
  if (fromPath) return decodeURIComponent(fromPath);
  return (searchParams?.get("order") ?? searchParams?.get("q") ?? "").trim();
}

const PUBLIC_TRACKING_ID_MAX_LENGTH = 20;
const PUBLIC_TRACKING_ORDER_ID_PATTERN = /^\d+$/;
const PUBLIC_TRACKING_HBL_PATTERN = /^CTE[A-Z0-9]+$/;

export const PUBLIC_TRACKING_MAX_LENGTH = PUBLIC_TRACKING_ID_MAX_LENGTH;

export type PublicTrackingIdKind = "order" | "hbl";

export interface PublicTrackingIdValidation {
  valid: boolean;
  kind: PublicTrackingIdKind | null;
  normalized: string;
  error?: string;
}

/** Strips invalid characters while the user types. */
export function sanitizePublicTrackingInput(value: string): string {
  const upper = value.toUpperCase();

  let sanitized: string;
  if (/^[A-Z]/.test(upper) && !/^\d/.test(value)) {
    sanitized = upper.replace(/[^A-Z0-9]/g, "");
  } else {
    sanitized = value.replace(/\D/g, "");
  }

  return sanitized.slice(0, PUBLIC_TRACKING_ID_MAX_LENGTH);
}

export function validatePublicTrackingId(raw: string): PublicTrackingIdValidation {
  const trimmed = raw.trim();

  if (!trimmed) {
    return {
      valid: false,
      kind: null,
      normalized: "",
      error: "Introduce un número de orden o un HBL.",
    };
  }

  if (trimmed.length > PUBLIC_TRACKING_ID_MAX_LENGTH) {
    return {
      valid: false,
      kind: null,
      normalized: sanitizePublicTrackingInput(trimmed),
      error: `Máximo ${PUBLIC_TRACKING_ID_MAX_LENGTH} caracteres.`,
    };
  }

  const normalized = sanitizePublicTrackingInput(trimmed);

  if (!normalized) {
    return {
      valid: false,
      kind: null,
      normalized: "",
      error: "Introduce un número de orden o un HBL.",
    };
  }

  if (PUBLIC_TRACKING_ORDER_ID_PATTERN.test(normalized)) {
    return { valid: true, kind: "order", normalized };
  }

  if (PUBLIC_TRACKING_HBL_PATTERN.test(normalized)) {
    return { valid: true, kind: "hbl", normalized };
  }

  if (/^CTE/i.test(normalized)) {
    return {
      valid: false,
      kind: null,
      normalized,
      error:
        "El HBL debe tener el formato CTE seguido solo de letras y números (ej. CTE12123213322).",
    };
  }

  return {
    valid: false,
    kind: null,
    normalized,
    error:
      "Usa solo números para la orden (ej. 102334) o un HBL que empiece con CTE.",
  };
}

export function isValidPublicTrackingId(raw: string): boolean {
  return validatePublicTrackingId(raw).valid;
}
