import PropTypes from "prop-types";

const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt={name}
        className="w-20"
      />
      <div>
        <h1 className="uppercase">{name}----------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

MenuItems.propTypes = {
  item: PropTypes.object,
};

export default MenuItems;
