import Category from "../../components/categories/Category";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/header/banner/Banner";
import PopularMenus from "../../components/menus/PopularMenus";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenus />
      <Featured />
    </div>
  );
};

export default Home;
