import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchUrl } from "../../hooks/useSearchUrl";
import { PAGE_SIZE } from "../../utils/constants";

export const useBookings = () => {
  const { getParam } = useSearchUrl();
  const queryClient = useQueryClient() ;

  // 1-filter
  const filteredVal = getParam("status");

  //test if passing many values of filteration
  //   const filter =
  //     !filteredVal || filteredVal === "all"
  //       ? null
  //       : [
  //           {
  //             field: "status",
  //             value: filteredVal,
  //             method: "eq",
  //           },
  //           {
  //             field: "totalPrice",
  //             value: 5000,
  //             method: "lte",
  //           },
  //         ];

  const filter =
    !filteredVal || filteredVal === "all"
      ? null
      : [
          {
            field: "status",
            value: filteredVal,
            method: "eq",
          },
        ];

  // 2-sort by
  const sort = getParam("sortBy") ?? "startDate-desc";
  const [field, direction] = sort.split("-");
  const sortBy = { field, direction };

    // 3-pagination 
  const page= Number(getParam('page')??1) ;

  const {
    isLoading: isFetching,
    data: { data: bookings, count } ={},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy,page],
    queryFn: () => getBookings({ filter, sortBy ,page}),
  });

  //prefetching for better ux
  const pageCount = Math.ceil(count/PAGE_SIZE) ;

  if(page<pageCount){
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy,page+1],
    queryFn: () => getBookings({ filter, sortBy ,page:page+1}),
  })
  }

  if(page>1){
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy,page-1],
    queryFn: () => getBookings({ filter, sortBy ,page:page-1}),
  })
  }



  return { isFetching, bookings, error, count };
};
