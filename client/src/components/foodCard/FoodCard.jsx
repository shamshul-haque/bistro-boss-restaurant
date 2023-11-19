import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const handleAddToCart = (food) => {
    console.log(food);
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
        onClick={() => handleAddToCart(item)}
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
