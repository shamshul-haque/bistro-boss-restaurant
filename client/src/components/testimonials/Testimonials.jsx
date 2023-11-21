import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews, isLoading } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <section className="my-12">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />
      <Container>
        <Swiper modules={[Navigation, Autoplay]} navigation autoplay>
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
