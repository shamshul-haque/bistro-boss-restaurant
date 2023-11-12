import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import category1 from "../../assets/category/category1.jpg";
import category2 from "../../assets/category/category2.jpg";
import category3 from "../../assets/category/category3.jpg";
import category4 from "../../assets/category/category4.jpg";
import category5 from "../../assets/category/category5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="my-20"
    >
      <SwiperSlide>
        <img src={category1} alt="category1" />
        <h3 className="text-xs md:text-lg  text-black shadow-xl uppercase text-center">
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={category2} alt="category2" />
        <h3 className="text-xs md:text-lg  text-black shadow-xl uppercase text-center">
          Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={category3} alt="category3" />
        <h3 className="text-xs md:text-lg  text-black shadow-xl uppercase text-center">
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={category4} alt="category4" />
        <h3 className="text-xs md:text-lg  text-black shadow-xl uppercase text-center">
          Desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={category5} alt="category5" />
        <h3 className="text-xs md:text-lg  text-black shadow-xl uppercase text-center">
          Drinks
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
