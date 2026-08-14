"use client";

import {
  useEffect,
  useState,
  type ReactElement,
  type SubmitEvent,
} from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { differenceInCalendarDays, format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Check,
  ChevronRight,
  FileText,
  FileWarning,
  Plane,
  Search,
  Ship,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { usePublicTracking } from "@/lib/use-public-tracking";
import {
  PUBLIC_TRACKING_MAX_LENGTH,
  resolveTrackingId,
  sanitizePublicTrackingInput,
  validatePublicTrackingId,
  type TrackingEvent,
  type TrackingParcel,
  type TrackingResult,
} from "@/lib/public-tracking-api";
import { cn } from "@/lib/utils";

function formatEventDate(iso: string): string {
  return format(new Date(iso), "d MMM yyyy, HH:mm", { locale: es });
}

const DELIVERED_EVENT_PATTERN =
  /entrega exitosa|entregado|entrega confirmada|delivery|delivered/i;

function isDeliveredEvent(event: TrackingEvent): boolean {
  return DELIVERED_EVENT_PATTERN.test(event.title);
}

function isParcelDelivered(parcel: TrackingParcel): boolean {
  if (parcel.status === "DELIVERED" || parcel.status === "PARTIALLY_DELIVERED") {
    return true;
  }
  const latest = parcel.events.at(-1);
  return latest ? isDeliveredEvent(latest) : false;
}

function getDeliveryDurationDays(parcel: TrackingParcel): number | null {
  if (!isParcelDelivered(parcel) || parcel.events.length === 0) return null;

  const firstEvent = parcel.events[0];
  const deliveryEvent =
    [...parcel.events].reverse().find(isDeliveredEvent) ?? parcel.events.at(-1);
  if (!deliveryEvent) return null;

  return differenceInCalendarDays(
    new Date(deliveryEvent.occurred_at),
    new Date(firstEvent.occurred_at)
  );
}

function formatDeliveryDuration(days: number): string {
  if (days === 0) return "Entregado el mismo día";
  return `Entregado en ${days} ${days === 1 ? "día" : "días"}`;
}

function TrackingTimeline({
  events,
}: {
  events: TrackingEvent[];
}): ReactElement {
  if (events.length === 0) {
    return (
      <p className="px-4 pb-4 text-sm text-brand-navy/55">
        Sin eventos de seguimiento registrados.
      </p>
    );
  }

  const newestFirst = [...events].reverse();

  return (
    <div className="flex flex-col gap-0 px-4 pb-4">
      {newestFirst.map((event, index) => {
        const isOldest = index === newestFirst.length - 1;
        const isLatestDelivery = index === 0 && isDeliveredEvent(event);
        return (
          <div key={event.id} className="relative flex gap-4 pb-6 last:pb-0">
            {!isOldest ? (
              <span
                className={cn(
                  "absolute top-6 left-[11px] h-[calc(100%-12px)] w-px",
                  index === 1 && isLatestDelivery
                    ? "bg-brand/40"
                    : "bg-brand-navy/15"
                )}
                aria-hidden
              />
            ) : null}
            <div
              className={cn(
                "relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border bg-white",
                isLatestDelivery
                  ? "border-brand/50 bg-brand/10"
                  : "border-brand-navy/15"
              )}
            >
              <Check
                className={cn(
                  "size-3.5",
                  isLatestDelivery ? "text-brand" : "text-brand-navy"
                )}
                aria-hidden
              />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p
                className={cn(
                  "text-sm font-medium",
                  isLatestDelivery ? "text-brand" : "text-brand-navy"
                )}
              >
                {event.title}
              </p>
              {event.description ? (
                <p className="mt-0.5 text-sm text-brand-navy/55">
                  {event.description}
                </p>
              ) : null}
              <p className="mt-1.5 text-xs text-brand-navy/45">
                {event.location ? (
                  <>
                    <span>{event.location}</span>
                    <span className="mx-1.5 text-brand-navy/30">·</span>
                  </>
                ) : null}
                {formatEventDate(event.occurred_at)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceBadge({
  serviceType,
}: {
  serviceType: NonNullable<TrackingResult["service_type"]>;
}): ReactElement {
  const isAir = serviceType === "AIR";
  return (
    <Badge
      variant="secondary"
      className="gap-1.5 rounded-full bg-brand-yellow/40 px-3 py-1 font-normal text-brand-navy"
    >
      {isAir ? (
        <Plane className="size-3.5" aria-hidden />
      ) : (
        <Ship className="size-3.5" aria-hidden />
      )}
      {isAir ? "Aéreo" : "Marítimo"}
    </Badge>
  );
}

function formatLocation(province?: string, city?: string): string | null {
  if (province && city) return `${province} - ${city}`;
  return province ?? city ?? null;
}

function ParcelDetailsPanel({
  parcel,
  order,
}: {
  parcel: TrackingParcel;
  order: TrackingResult;
}): ReactElement {
  const location = formatLocation(order.province, order.city);
  const description = parcel.label || order.description;
  const deliveryDays = getDeliveryDurationDays(parcel);

  return (
    <div className="w-full space-y-2">
      <div className="flex items-start justify-between gap-3">
        {order.agency ? (
          <p className="text-sm leading-snug font-semibold text-brand-navy">
            {order.agency}
          </p>
        ) : (
          <span />
        )}
        <Badge
          variant="outline"
          className="shrink-0 gap-1.5 rounded-md border-brand-navy/15 px-2 py-0.5 font-normal tabular-nums text-brand-navy"
        >
          <FileText className="size-3.5 text-brand-navy/45" aria-hidden />
          {order.order_id}
        </Badge>
      </div>

      {location ? (
        <p className="text-xs text-brand-navy/55">{location}</p>
      ) : null}

      <div className="flex items-baseline gap-2 pt-1">
        <p className="font-mono text-xl leading-none font-bold tracking-tight text-brand-navy sm:text-2xl">
          {parcel.tracking_number}
        </p>
        <span className="text-xs font-medium text-brand-navy/45 uppercase">
          HBL
        </span>
      </div>

      {description ? (
        <p className="pt-0.5 text-sm text-brand-navy/55">{description}</p>
      ) : null}

      {order.service_type ? (
        <div className="pt-1">
          <ServiceBadge serviceType={order.service_type} />
        </div>
      ) : null}

      {deliveryDays !== null ? (
        <p className="pt-1 text-sm font-medium text-brand-navy">
          {formatDeliveryDuration(deliveryDays)}
        </p>
      ) : null}
    </div>
  );
}

function ParcelTrackingCard({
  parcel,
  order,
}: {
  parcel: TrackingParcel;
  order: TrackingResult;
}): ReactElement {
  return (
    <Card className="overflow-hidden border-brand-navy/10 bg-white shadow-sm">
      <CardContent className="grid gap-6 p-4 md:grid-cols-[minmax(0,280px)_1fr] md:items-stretch md:gap-8 md:p-5">
        <div className="flex w-full items-center border-brand-navy/10 md:border-r md:pr-8">
          <ParcelDetailsPanel parcel={parcel} order={order} />
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-1.5 text-sm font-medium text-brand-navy">
            Historial de seguimiento
            <ChevronRight className="size-4 text-brand-navy/40" aria-hidden />
          </div>
          <TrackingTimeline events={parcel.events} />
        </div>
      </CardContent>
    </Card>
  );
}

function TrackingResultCard({
  result,
}: {
  result: TrackingResult;
}): ReactElement {
  return (
    <div className="flex w-full flex-col gap-4">
      {result.parcels.map((parcel) => (
        <ParcelTrackingCard key={parcel.id} parcel={parcel} order={result} />
      ))}
    </div>
  );
}

function TrackingLanding({ compact }: { compact: boolean }): ReactElement {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
        Tracking
      </span>
      <h1
        className={cn(
          "font-bold tracking-tight text-balance text-brand-navy",
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
        )}
      >
        Rastrea tu envío
      </h1>
      <p
        className={cn(
          "max-w-md leading-relaxed text-brand-navy/65",
          compact ? "text-sm" : "text-sm md:text-base"
        )}
      >
        Introduce tu número de orden o HBL para ver el estado de tu paquete
        marítimo en tiempo real.
      </p>
    </div>
  );
}

export function TrackingClient(): ReactElement {
  const router = useRouter();
  const params = useParams<{ orderId?: string }>();
  const searchParams = useSearchParams();
  const pathOrderId = Array.isArray(params.orderId)
    ? params.orderId[0]
    : params.orderId;
  const trackingIdFromUrl = resolveTrackingId(
    pathOrderId,
    new URLSearchParams(searchParams.toString())
  );
  const apiConfigured = Boolean(process.env.NEXT_PUBLIC_API_URL);

  const [query, setQuery] = useState(trackingIdFromUrl);
  const [validationError, setValidationError] = useState<string | null>(null);
  const { data: result, isLoading, isFetched, isError } =
    usePublicTracking(trackingIdFromUrl);

  useEffect(() => {
    setQuery(trackingIdFromUrl);
    setValidationError(null);
  }, [trackingIdFromUrl]);

  const urlValidation = validatePublicTrackingId(trackingIdFromUrl);
  const hasSearch = trackingIdFromUrl.length > 0;
  const isInvalidId = hasSearch && !urlValidation.valid;
  const isCompact = hasSearch;
  const isMissingApi = hasSearch && urlValidation.valid && !apiConfigured;
  const isNotFound =
    hasSearch &&
    urlValidation.valid &&
    apiConfigured &&
    isFetched &&
    !isLoading &&
    !isError &&
    result === null;
  const isLookupError =
    hasSearch && urlValidation.valid && apiConfigured && isError && !isLoading;
  const isSuccess =
    hasSearch &&
    urlValidation.valid &&
    apiConfigured &&
    isFetched &&
    !isLoading &&
    result !== null &&
    result !== undefined;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validation = validatePublicTrackingId(query);
    if (!validation.valid) {
      setValidationError(validation.error ?? "Identificador no válido.");
      return;
    }

    setValidationError(null);
    router.replace(`/tracking/${encodeURIComponent(validation.normalized)}`);
  };

  const handleQueryChange = (value: string): void => {
    const sanitized = sanitizePublicTrackingInput(value);
    setQuery(sanitized);
    if (validationError) setValidationError(null);

    if (!sanitized.trim()) {
      router.replace("/tracking");
    }
  };

  return (
    <main
      id="contenido"
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col items-center px-4",
        isCompact
          ? "justify-start gap-6 py-10 sm:py-14"
          : "justify-center gap-8 py-16 sm:py-20"
      )}
    >
        <div
          className={cn(
            "flex w-full max-w-lg flex-col items-center",
            isCompact ? "gap-4" : "gap-6"
          )}
        >
          <TrackingLanding compact={isCompact} />

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
                <InputGroup
                  className={cn(
                    "h-11 flex-1 rounded-full border-brand-navy/10 bg-muted/60",
                    validationError && "ring-1 ring-destructive/50"
                  )}
                >
                  <InputGroupAddon align="inline-start">
                    <Search className="size-4 text-brand-navy/45" aria-hidden />
                  </InputGroupAddon>
                  <InputGroupInput
                    type="text"
                    name="tracking"
                    inputMode="text"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    maxLength={PUBLIC_TRACKING_MAX_LENGTH}
                    value={query}
                    onChange={(e) => handleQueryChange(e.target.value)}
                    placeholder="Orden o HBL…"
                    className="h-11 bg-transparent uppercase text-brand-navy"
                    aria-label="Número de orden o HBL"
                    aria-invalid={validationError ? true : undefined}
                  />
                </InputGroup>
                <Button
                  type="submit"
                  className="h-11 shrink-0 rounded-full bg-brand-yellow px-6 text-brand-navy hover:bg-brand-yellow/90"
                  disabled={isLoading || !query.trim()}
                >
                  {isLoading ? (
                    <Spinner className="size-4" />
                  ) : (
                    <Search className="size-4" aria-hidden />
                  )}
                  Rastrear
                </Button>
              </div>
              {validationError ? (
                <p className="px-2 text-sm text-destructive">{validationError}</p>
              ) : null}
            </div>
          </form>
        </div>

        <div
          className={cn("w-full", isCompact ? "block" : "hidden")}
          aria-live="polite"
        >
          {isInvalidId ? (
            <Empty className="w-full border border-brand-navy/10 bg-white">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileWarning aria-hidden />
                </EmptyMedia>
                <EmptyTitle className="text-brand-navy">
                  Formato no válido
                </EmptyTitle>
                <EmptyDescription>
                  {urlValidation.error ??
                    "Usa solo números para la orden (ej. 102334) o un HBL con formato CTE12123213322."}
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : null}

          {isMissingApi ? (
            <Empty className="w-full border border-brand-navy/10 bg-white">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileWarning aria-hidden />
                </EmptyMedia>
                <EmptyTitle className="text-brand-navy">
                  Tracking no configurado
                </EmptyTitle>
                <EmptyDescription>
                  Falta `NEXT_PUBLIC_API_URL` en el entorno. Agrégalo en
                  `.env.local` (por ejemplo `https://api.ctenvios.com/api/v1`)
                  y reinicia `yarn dev`.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : null}

          {isLoading ? (
            <Empty className="w-full border border-brand-navy/10 bg-white">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Spinner className="size-4" />
                </EmptyMedia>
                <EmptyTitle className="text-brand-navy">
                  Buscando orden…
                </EmptyTitle>
                <EmptyDescription>
                  Por favor, espera mientras buscamos tu orden.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : null}

          {isLookupError ? (
            <Empty className="w-full border border-brand-navy/10 bg-white">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileWarning aria-hidden />
                </EmptyMedia>
                <EmptyTitle className="text-brand-navy">
                  Error al consultar
                </EmptyTitle>
                <EmptyDescription>
                  No pudimos conectar con el servicio de tracking. Inténtalo de
                  nuevo en unos minutos.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : null}

          {isNotFound ? (
            <Empty className="w-full border border-brand-navy/10 bg-white">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileWarning aria-hidden />
                </EmptyMedia>
                <EmptyTitle className="text-brand-navy">
                  Orden o HBL no encontrado
                </EmptyTitle>
                <EmptyDescription>
                  Verifica el número de orden o HBL e inténtalo de nuevo.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : null}

          {isSuccess && result ? <TrackingResultCard result={result} /> : null}
        </div>
    </main>
  );
}
