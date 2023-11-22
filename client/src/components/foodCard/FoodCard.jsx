import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const { refetch } = useCart();

  const handleAddToCart = async () => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      const res = await axiosPrivate.post("/users/cartItems", cartItem);
      if (res?.data?.insertedId) {
        toast?.success("Item Added!", {
          position: "top-right",
          theme: "colored",
        });
      }
      refetch();
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add item to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location?.pathname } });
        }
      });
    }
  };

  return (
    <div className="bg-gray-200 flex flex-col justify-between items-center mt-6">
      <div className="relative w-full">
        <img src={image} alt="category1" className="w-full object-cover" />
        <p className="bg-black text-white px-2 absolute right-3 top-3">
          ${price}
        </p>
      </div>
      <div className="text-center p-5">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="pt-1 pb-3 flex-grow">{recipe}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-gray-300 border-yellow-600 border-b-2 p-2  rounded-lg hover:bg-black transition-all duration-500 hover:border-b-0 text-yellow-600 mb-5"
      >
        Add To Cart
      </button>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
