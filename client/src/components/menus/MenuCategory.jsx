import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import Cover from "../cover/Cover";
import MenuItems from "./MenuItems";

const MenuCategory = ({ menus, title, img, desc }) => {
  return (
    <div className="text-center">
      <Container>
        {title && <Cover img={img} title={title} desc={desc} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {menus.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/our-menu"
            className="border-b-2 p-2 rounded-lg hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500 uppercase"
          >
            ORDER YOUR FAVORITE FOOD
          </Link>
        </div>
      </Container>
    </div>
  );
};

MenuCategory.propTypes = {
  menus: PropTypes.array,
  title: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.string,
};

export default MenuCategory;
