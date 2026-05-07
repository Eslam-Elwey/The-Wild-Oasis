import { subDays } from "date-fns";
import { useSearchUrl } from "../../hooks/useSearchUrl";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const { getParam } = useSearchUrl();

  const numDays = !getParam("last") ? 7 : Number(getParam("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { isLoading, bookings };
}
