export const publicTrackingKeys = {
  all: ["public-tracking"] as const,
  lookup: (orderId: string) =>
    [...publicTrackingKeys.all, "lookup", orderId] as const,
};
