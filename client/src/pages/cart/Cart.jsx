import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const axiosPrivate = useAxiosPrivate();
  const { cart, isLoading, refetch } = useCart();
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  const totalPrice = cart?.reduce((total, item) => total + item?.price, 0);

  const handleDelete = (id) => {
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
        axiosPrivate.delete(`/users/cartItems/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
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
      <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart" />
      <Container>
        <div className="bg-white shadow-xl min-h-screen p-12 mt-6">
          <div className="flex items-center justify-between uppercase">
            <h2 className="font-bold">Total Orders: {cart?.length}</h2>
            <h2 className="font-bold">Total Price: ${totalPrice}</h2>
            <button className="bg-yellow-600 px-3 py-1 rounded text-white">
              Pay
            </button>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="table">
              <thead className="bg-yellow-600">
                <tr className="uppercase text-white">
                  <th>Sl</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
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
                    <td className="text-white text-xl flex justify-center">
                      <button
                        onClick={() => handleDelete(item?._id)}
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

export default Cart;
