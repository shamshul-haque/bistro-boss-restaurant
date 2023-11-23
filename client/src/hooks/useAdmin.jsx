import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useAdmin = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const { data: isAdmin, isPending } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPrivate.get(`users/admin?email=${user?.email}`);
      return res?.data?.admin;
    },
  });
  return { isAdmin, isPending };
};

export default useAdmin;
