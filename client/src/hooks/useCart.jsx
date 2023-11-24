import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCart = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPrivate.get(
        `/users/cartItems?email=${user?.email}`
      );
      return res?.data;
    },
  });
  return { cart, isLoading, refetch };
};

export default useCart;
