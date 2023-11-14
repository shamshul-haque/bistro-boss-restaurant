import category1 from "../../assets/category/category1.jpg";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <Container>
      <section className="my-12">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <div className="bg-gray-200 ">
            <img src={category1} alt="category1" className="w-full h-52" />
            <div className="text-center p-5">
              <h1 className="text-xl font-bold">Caeser Salad</h1>
              <p className="pt-1 pb-3">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="bg-gray-300 border-yellow-600 border-b-2 p-2  rounded-lg hover:bg-black transition-all duration-500 hover:border-b-0 text-yellow-600">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-200">
            <img src={category1} alt="category1" className="w-full h-52" />
            <div className="text-center p-5">
              <h1 className="text-xl font-bold">Caeser Salad</h1>
              <p className="pt-1 pb-3">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="bg-gray-300 border-yellow-600 border-b-2 p-2  rounded-lg hover:bg-black transition-all duration-500 hover:border-b-0 text-yellow-600">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-200 ">
            <img src={category1} alt="category1" className="w-full h-52" />
            <div className="text-center p-5">
              <h1 className="text-xl font-bold">Caeser Salad</h1>
              <p className="pt-1 pb-3">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="bg-gray-300 border-yellow-600 border-b-2 p-2  rounded-lg hover:bg-black transition-all duration-500 hover:border-b-0 text-yellow-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ChefRecommends;
