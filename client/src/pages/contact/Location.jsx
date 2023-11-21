import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Location = () => {
  return (
    <div className="flex flex-col justify-center">
      <Container>
        <SectionTitle heading="OUR LOCATION" subHeading="Visit Us" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <div className="border text-center">
            <div className="bg-yellow-600 p-3 flex justify-center">
              <FaPhoneVolume className="text-white" />
            </div>
            <div className="bg-gray-200 mx-5 mb-5 space-y-2 py-10">
              <h1 className="uppercase font-bold">Phone</h1>
              <Link
                to="tel:+880 1406680846"
                className="text-sm md:text-xs lg:text-sm"
              >
                +880 1406680846
              </Link>
            </div>
          </div>
          <div className="border text-center">
            <div className="bg-yellow-600 p-3 flex justify-center">
              <FaLocationDot className="text-white" />
            </div>
            <div className="bg-gray-200 mx-5 mb-5 space-y-2 py-10">
              <h1 className="uppercase font-bold">Address</h1>
              <p className="text-sm md:text-xs lg:text-sm">
                Mirpur-10, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="border text-center flex-grow">
            <div className="bg-yellow-600 p-3 flex justify-center">
              <FaClock className="text-white" />
            </div>
            <div className="bg-gray-200 mx-5 mb-5 space-y-2 py-10">
              <h1 className="uppercase font-bold">Working Hour</h1>
              <div>
                <p className="text-sm md:text-xs lg:text-sm">
                  Mon - Fri: 08:00 - 22:00
                </p>
                <p className="text-sm md:text-xs lg:text-sm">
                  Sat - Sun: Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Location;
