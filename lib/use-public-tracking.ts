import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { publicTrackingKeys } from "@/lib/query-keys";
import {
  fetchPublicTracking,
  isValidPublicTrackingId,
  type TrackingResult,
} from "@/lib/public-tracking-api";

const TRACKING_STALE_TIME_MS = 1000 * 60 * 2;

export function usePublicTracking(
  orderId: string
): UseQueryResult<TrackingResult | null> {
  const trimmed = orderId.trim();
  const enabled =
    isValidPublicTrackingId(trimmed) &&
    Boolean(process.env.NEXT_PUBLIC_API_URL);

  return useQuery({
    queryKey: publicTrackingKeys.lookup(trimmed),
    queryFn: () => fetchPublicTracking(trimmed),
    enabled,
    staleTime: TRACKING_STALE_TIME_MS,
    retry: false,
  });
}
