import { Helmet } from "react-helmet";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
  const axiosPrivate = useAxiosPrivate();
  const { menu, isLoading, refetch } = useMenu();
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  const handleDelete = (item) => {
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
        axiosPrivate.delete(`/menus/${item?._id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item?.name} has been deleted.`,
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
        <title>Manage Items | Bistro Boss</title>
      </Helmet>
      <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up!" />
      <Container>
        <div className="bg-white shadow-xl min-h-screen p-12 mt-6">
          <div className="uppercase">
            <h2 className="font-bold">Total Items: {menu?.length}</h2>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="table">
              <thead className="bg-yellow-600">
                <tr className="uppercase text-white">
                  <th>Sl</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th className="text-center">Update</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {menu?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={item?.image}
                        alt="item image"
                        className="w-12 h-12"
                      />
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <td className="text-center">
                      <button className="text-white text-xl bg-yellow-600 p-2 rounded">
                        <FaRegEdit />
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-white text-xl bg-yellow-600 p-2 rounded"
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

export default ManageItems;
