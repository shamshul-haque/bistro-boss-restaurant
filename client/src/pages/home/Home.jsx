import Category from "../../components/categories/Category";
import Banner from "../../components/header/banner/Banner";
import PopularMenus from "../../components/menus/PopularMenus";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenus />
    </div>
  );
};

export default Home;
