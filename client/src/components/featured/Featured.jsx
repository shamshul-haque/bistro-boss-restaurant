import featured_img from "../../assets/featured/featured.jpg";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const Featured = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${featured_img})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="my-12 text-white text-center md:text-left bg-fixed"
    >
      <div className="hero-overlay bg-black bg-opacity-50 py-5 md:py-10 lg:py-20">
        <Container>
          <SectionTitle heading={"Featured Item"} subHeading={"Check it out"} />
          <div className="flex flex-col md:flex-row items-center gap-10 mt-6 tex">
            <div>
              <img src={featured_img} alt="featured_img" />
            </div>
            <div>
              <p>Aug 20, 2023</p>
              <h1>Where can I get some?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                accusamus provident? Voluptates nisi placeat harum aspernatur
                minus perferendis quis, repudiandae iste aliquid voluptatibus
                consequuntur eaque? Nesciunt expedita tempore illo repellat?
              </p>
              <button className="border-0 border-b-2 p-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Featured;
