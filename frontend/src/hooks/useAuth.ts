import { getUser } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const AUTH = "auth";

const useAuth = (opts = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: Infinity,
    ...opts,
  });
  return {
    user,
    ...rest,
  };
};

export default useAuth;
