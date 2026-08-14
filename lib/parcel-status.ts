export interface StatusConfig {
  label: string;
}

export const STATUS_CONFIG: Record<string, StatusConfig> = {
  IN_AGENCY: { label: "En Agencia" },
  IN_PALLET: { label: "En Pallet" },
  IN_DISPATCH: { label: "En Despacho" },
  RECEIVED_IN_DISPATCH: { label: "Recibido" },
  IN_WAREHOUSE: { label: "En Almacén" },
  IN_CONTAINER: { label: "En Contenedor" },
  NOT_MANIFESTED: { label: "No Manifestado" },
  IN_TRANSIT: { label: "En Tránsito" },
  AT_PORT_OF_ENTRY: { label: "En Puerto" },
  CUSTOMS_INSPECTION: { label: "En Aduana" },
  CUSTOMS_HOLD: { label: "Canal Rojo" },
  RELEASED_FROM_CUSTOMS: { label: "Liberado" },
  OUT_FOR_DELIVERY: { label: "En Reparto" },
  FAILED_DELIVERY: { label: "Fallo Entrega" },
  DELIVERED: { label: "Entregado" },
  RETURNED_TO_SENDER: { label: "Devuelto" },
  CANCELLED: { label: "Cancelado" },
  PARTIALLY_IN_PALLET: { label: "Parcial en Pallet" },
  PARTIALLY_IN_DISPATCH: { label: "Parcial en Despacho" },
  PARTIALLY_IN_CONTAINER: { label: "Parcial en Contenedor" },
  PARTIALLY_IN_TRANSIT: { label: "Parcial en Tránsito" },
  PARTIALLY_AT_PORT: { label: "Parcial en Puerto" },
  PARTIALLY_IN_CUSTOMS: { label: "Parcial en Aduana" },
  PARTIALLY_RELEASED: { label: "Parcial Liberado" },
  PARTIALLY_OUT_FOR_DELIVERY: { label: "Parcial en Reparto" },
  PARTIALLY_DELIVERED: { label: "Parcial Entregado" },
};
