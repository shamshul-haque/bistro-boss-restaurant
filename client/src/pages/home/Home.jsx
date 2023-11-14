import About from "../../components/about/About";
import Category from "../../components/categories/Category";
import ChefRecommends from "../../components/chefRecommends/ChefRecommends";
import Contact from "../../components/contact/Contact";
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
      <Contact />
      <Featured />
      <ChefRecommends />
      <Testimonials />
    </div>
  );
};

export default Home;
