import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate() ;
    const queryClient = useQueryClient() ;
  const { isLoading: isLoggingout, mutate: logout } = useMutation({
    mutationFn: logoutApi, 
    onSuccess : ()=>{
        navigate('/login',{replace : true}) ;
        queryClient.removeQueries(['user'])
        toast.success('logged out successfully')
    }
  });

  return { logout , isLoggingout };
}
