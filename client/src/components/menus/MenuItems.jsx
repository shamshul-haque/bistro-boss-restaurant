import PropTypes from "prop-types";

const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:space-x-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt={name}
        className="w-20"
      />
      <div className="space-y-1 my-2 md:my-0">
        <h1 className="uppercase">
          {name} <span className="hidden lg:inline-block">----------</span>
        </h1>
        <p className="text-sm">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

MenuItems.propTypes = {
  item: PropTypes.object,
};

export default MenuItems;
