import About from "../../components/about/About";
import Category from "../../components/categories/Category";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/header/banner/Banner";
import PopularMenus from "../../components/menus/PopularMenus";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <About />
      <PopularMenus />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
