import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="px-5 md:px-10 lg:px-20">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
