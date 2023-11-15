import { Helmet } from "react-helmet";
import menu_bg from "../../assets/menu/menu_bg.jpg";
import Cover from "../cover/Cover";
import PopularMenus from "./PopularMenus";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      <Cover
        img={menu_bg}
        title="OUR MENU"
        desc="Would you like to try a dish?"
      />
      <PopularMenus />
    </div>
  );
};

export default Menu;
