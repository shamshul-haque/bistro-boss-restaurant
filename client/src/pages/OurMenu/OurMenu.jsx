import { Helmet } from "react-helmet";
import dessert_bg from "../../assets/menu/dessert_bg.jpeg";
import drinks_bg from "../../assets/menu/drinks_bg.jpg";
import menu_bg from "../../assets/menu/menu_bg.jpg";
import pizza_bg from "../../assets/menu/pizza_bg.jpg";
import salad_bg from "../../assets/menu/salad_bg.jpg";
import soup_bg from "../../assets/menu/soup_bg.jpg";
import Cover from "../../components/cover/Cover";
import MenuCategory from "../../components/menus/MenuCategory";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const { menu } = useMenu();
  const offered = menu.filter((item) => item?.category === "offered");
  const dessert = menu.filter((item) => item?.category === "dessert");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const salad = menu.filter((item) => item?.category === "salad");
  const soup = menu.filter((item) => item?.category === "soup");
  const drinks = menu.filter((item) => item?.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      {/* main cover image */}
      <Cover
        img={menu_bg}
        title="OUR MENU"
        desc="Would you like to try a dish?"
      />

      {/* offered menus */}
      <div className="my-12">
        <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
        <MenuCategory menus={offered} />
      </div>

      {/* dessert menus */}
      <div className="my-12">
        <MenuCategory
          menus={dessert}
          title="Desserts"
          img={dessert_bg}
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* pizza menus */}
      <div className="my-12">
        <MenuCategory
          menus={pizza}
          title="Pizza"
          img={pizza_bg}
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* salad menus */}
      <div className="my-12">
        <MenuCategory
          menus={salad}
          title="Salad"
          img={salad_bg}
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* soup menus */}
      <div className="my-12">
        <MenuCategory
          menus={soup}
          title="Soup"
          img={soup_bg}
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* drinks menus */}
      <div className="my-12">
        <MenuCategory
          menus={drinks}
          title="Drinks"
          img={drinks_bg}
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    </div>
  );
};

export default OurMenu;
