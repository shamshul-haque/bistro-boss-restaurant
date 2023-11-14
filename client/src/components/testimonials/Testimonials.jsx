import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../sectionTitle/SectionTitle";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Container from "../container/Container";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-12">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />
      <Container>
        <Swiper navigation={true} modules={[Navigation]}>
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mt-6 md:px-20 space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-3xl" />
                <div className="text-center  space-y-1">
                  <p className="text-xs md:text-base">{review?.details}</p>
                  <h1 className="uppercase font-bold text-yellow-600">
                    {review?.name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
