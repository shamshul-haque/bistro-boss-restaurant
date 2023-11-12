import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import category1 from "../../assets/category/category1.jpg";
import category2 from "../../assets/category/category2.jpg";
import category3 from "../../assets/category/category3.jpg";
import category4 from "../../assets/category/category4.jpg";
import category5 from "../../assets/category/category5.jpg";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const Category = () => {
  return (
    <Container>
      <section className="my-12">
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-6"
        >
          <SwiperSlide>
            <img src={category1} alt="category1" className="w-full relative" />
            <h3 className="text-xs md:text-lg  text-white uppercase absolute  bottom-1 md:bottom-5 left-1/2 transform -translate-x-1/2">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={category2} alt="category2" className="w-full relative" />
            <h3 className="text-xs md:text-lg  text-white uppercase absolute  bottom-1 md:bottom-5 left-1/2 transform -translate-x-1/2">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={category3} alt="category3" className="w-full relative" />
            <h3 className="text-xs md:text-lg  text-white uppercase absolute  bottom-1 md:bottom-5 left-1/2 transform -translate-x-1/2">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={category4} alt="category4" className="w-full relative" />
            <h3 className="text-xs md:text-lg  text-white uppercase absolute  bottom-1 md:bottom-5 left-1/2 transform -translate-x-1/2">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={category5} alt="category5" className="w-full relative" />
            <h3 className="text-xs md:text-lg  text-white uppercase absolute  bottom-1 md:bottom-5 left-1/2 transform -translate-x-1/2">
              Drinks
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </Container>
  );
};

export default Category;
