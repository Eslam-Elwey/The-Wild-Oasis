import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings()
{
    const{isLoading:isFetching ,error , data:settings}= useQuery({
    queryKey : ['settings'] ,
    queryFn : getSettings
  })

  return {isFetching ,error ,settings} ;
}