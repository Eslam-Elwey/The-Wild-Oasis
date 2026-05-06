import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "./../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading: isSignningup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created!Please verify the new account from user's email address",
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUp, isSignningup };
}
