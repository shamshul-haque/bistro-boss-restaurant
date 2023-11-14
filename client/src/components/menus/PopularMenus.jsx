import { useEffect, useState } from "react";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const PopularMenus = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item?.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <Container>
      <section className="my-12">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {menu.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border-0 border-b-2 p-2 rounded-lg">
            Read More
          </button>
        </div>
      </section>
    </Container>
  );
};

export default PopularMenus;
