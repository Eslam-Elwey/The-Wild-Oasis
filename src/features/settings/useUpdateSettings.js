import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi  } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUdateSettings()
{
    const queryClient = useQueryClient() ;
    const {mutate:updateSetting ,error ,isLoading:isUpdating} = useMutation({
        mutationFn : updateSettingApi ,
        onSuccess : ()=>{
            toast.success('settings successfully updated') ;
            queryClient.invalidateQueries({queryKey :['settings']}) ;
        } ,
        onError :()=>{
            toast.error(error.message) ;
        }
    })
    return {updateSetting,error,isUpdating} ;
}