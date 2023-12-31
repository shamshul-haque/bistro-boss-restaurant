import { Parallax } from "react-parallax";
import featured_img from "../../assets/featured/featured.jpg";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const Featured = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={featured_img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <section className=" text-white text-center md:text-left">
        <div className="hero-overlay bg-black bg-opacity-50 py-5 md:py-10 lg:py-20">
          <Container>
            <SectionTitle
              heading={"Featured Item"}
              subHeading={"Check it out"}
            />
            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 tex">
              <div>
                <img src={featured_img} alt="featured_img" />
              </div>
              <div className="space-y-2">
                <p className="text-sm">Aug 20, 2023</p>
                <h1 className="uppercase font-bold">Where can I get some?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  accusamus provident? Voluptates nisi placeat harum aspernatur
                  minus perferendis quis, repudiandae iste aliquid voluptatibus
                  consequuntur eaque? Nesciunt expedita tempore illo repellat?
                </p>
                <button className="border-b-2 p-2 rounded-lg hover:text-yellow-600 hover:border-yellow-600 transition-all duration-500">
                  Read More
                </button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </Parallax>
  );
};

export default Featured;
