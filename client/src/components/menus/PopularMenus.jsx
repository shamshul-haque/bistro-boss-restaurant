import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const PopularMenus = () => {
  const { menu, isLoading } = useMenu();
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }
  const popular = menu?.filter((item) => item?.category === "popular");

  return (
    <Container>
      <section className="my-12">
        <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {popular?.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/our-menu"
            className="border-b-2 p-2 rounded-lg hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500 uppercase"
          >
            View All Menu
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default PopularMenus;
