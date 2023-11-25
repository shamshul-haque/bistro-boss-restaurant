import { useQuery } from "@tanstack/react-query";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaProductHunt, FaUsers, FaWallet } from "react-icons/fa";
import Container from "../../components/container/Container";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AdminHome = () => {
  const axiosPrivate = useAxiosPrivate();

  const { data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/users/admin-stats");
      return res?.data;
    },
  });

  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl">Hi, Welcome Back!</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10
        "
        >
          <div className="p-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex items-center justify-center gap-5 text-white">
            <FaWallet className="text-3xl" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">$ {stats?.revenue}</h2>
              <p>Revenues</p>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded flex items-center justify-center gap-5 text-white">
            <FaUsers className="text-3xl" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">{stats?.users}</h2>
              <p>Customers</p>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded flex items-center justify-center gap-5 text-white">
            <FaProductHunt className="text-3xl" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">{stats?.menus}</h2>
              <p>Products</p>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center gap-5 text-white">
            <CiDeliveryTruck className="text-3xl" />
            <div className="text-center">
              <h2 className="text-2xl font-bold">$ {stats?.orders}</h2>
              <p>Orders</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminHome;
