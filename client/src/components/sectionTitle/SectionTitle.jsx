import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-9/12 md:w-6/12 lg:w-3/12 mx-auto text-center space-y-3">
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h2 className="border-y-2 p-2 text-3xl">{heading}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
