import { subDays } from "date-fns";
import { useSearchUrl } from "../../hooks/useSearchUrl";
import { useQuery } from "@tanstack/react-query";
import {  getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const { getParam } = useSearchUrl();

  const numDays = !getParam("last") ? 7 : Number(getParam("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter((stay)=>stay.status==='checked-in' || stay.status==='checked-out')

  return { isLoading, stays , confirmedStays,numDays };
}
