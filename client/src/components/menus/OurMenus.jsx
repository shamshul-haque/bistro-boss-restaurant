import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const OurMenus = () => {
  const { menu } = useMenu();
  const popular = menu.filter((item) => item?.category === "popular");

  return (
    <Container>
      <section className="my-12">
        <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {popular.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/our-menus"
            className="border-b-2 p-2 rounded-lg hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500 uppercase"
          >
            View All Menu
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default OurMenus;
