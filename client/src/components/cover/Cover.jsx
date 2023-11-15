import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, desc }) => {
  return (
    <Parallax blur={{ min: -50, max: 50 }} bgImage={img} strength={-200}>
      <div className="h-[80vh] p-5 md:p-10 lg:p-20">
        <div className="flex flex-col items-center justify-center text-white space-y-3 hero-overlay bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold uppercase">{title}</h1>
          <p className="px-5 md:px-10 lg:px-20">{desc}</p>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Cover;
