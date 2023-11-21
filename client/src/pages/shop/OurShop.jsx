import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shop_bg from "../../assets/shop/shop_bg.jpg";
import Container from "../../components/container/Container";
import Cover from "../../components/cover/Cover";
import FoodCard from "../../components/foodCard/FoodCard";
import useMenu from "../../hooks/useMenu";

const OurShop = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menu } = useMenu();

  const salad = menu?.filter((item) => item?.category === "salad");
  const soup = menu?.filter((item) => item?.category === "soup");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const dessert = menu?.filter((item) => item?.category === "dessert");
  const drinks = menu?.filter((item) => item?.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Our Shop | Bistro Boss</title>
      </Helmet>
      <Cover
        img={shop_bg}
        title="Our Shop"
        desc="Would you like to try a dish?"
      />
      <Container>
        <div className="my-12">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Soup</Tab>
              <Tab>Pizza</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {salad?.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {soup?.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {pizza?.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {dessert?.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {drinks?.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default OurShop;
