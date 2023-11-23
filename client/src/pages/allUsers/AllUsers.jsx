import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AllUsers = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPrivate.get("/users");
      return res?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  const handleRole = async (user) => {
    const res = await axiosPrivate.patch(`/users/admin/${user?._id}`);
    if (res?.data?.modifiedCount > 0) {
      refetch();
      toast?.success(`${user?.name} is an admin now.`, {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        useAxiosPrivate.delete(`/users/${user?._id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user?.name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>My Cart | Bistro Boss</title>
      </Helmet>
      <SectionTitle heading="MANAGE ALL USERS" subHeading="How many??" />
      <Container>
        <div className="bg-white shadow-xl min-h-screen p-12 mt-6">
          <div className="uppercase">
            <h2 className="font-bold">Total Users: {users?.length}</h2>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="table">
              <thead className="bg-yellow-600">
                <tr className="uppercase text-white">
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="text-center">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleRole(user)}
                          className="text-white text-xl bg-yellow-600 p-2 rounded"
                        >
                          <FaUser />
                        </button>
                      )}
                    </td>
                    <td className="text-white text-xl flex justify-center">
                      <button
                        onClick={() => handleDelete(user)}
                        className="bg-red-500 p-2 rounded"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllUsers;
