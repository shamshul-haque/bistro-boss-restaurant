import { Helmet } from "react-helmet";
import About from "../../components/about/About";
import Category from "../../components/categories/Category";
import Contact from "../../components/contact/Contact";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/header/banner/Banner";
import PopularMenus from "../../components/menus/PopularMenus";
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
      <PopularMenus />
      <Contact />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
