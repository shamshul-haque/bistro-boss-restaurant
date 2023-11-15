import { Helmet } from "react-helmet";
import About from "../../components/about/About";
import Category from "../../components/categories/Category";
import ChefRecommends from "../../components/chefRecommends/ChefRecommends";
import Contact from "../../components/contact/Contact";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/header/banner/Banner";
import OurMenus from "../../components/menus/OurMenus";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>
      <Banner />
      <Category />
      <About />
      <OurMenus />
      <Contact />
      <Featured />
      <ChefRecommends />
      <Testimonials />
    </div>
  );
};

export default Home;
