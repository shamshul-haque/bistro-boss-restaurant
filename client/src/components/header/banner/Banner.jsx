import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.png";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.png";
import banner6 from "../../../assets/banner/banner6.png";

const Banner = () => {
  return (
    <Carousel
      className="w-full text-center mx-auto"
      autoPlay
      showStatus={false}
      interval="4000"
      transitionTime="2000"
      infiniteLoop
    >
      <div>
        <img src={banner1} alt="banner1" />
      </div>
      <div>
        <img src={banner2} alt="banner2" />
      </div>
      <div>
        <img src={banner3} alt="banner3" />
      </div>
      <div>
        <img src={banner4} alt="banner4" />
      </div>
      <div>
        <img src={banner5} alt="banner5" />
      </div>
      <div>
        <img src={banner6} alt="banner6" />
      </div>
    </Carousel>
  );
};

export default Banner;
