import React from "react";
import PropTypes from "prop-types";

const Flex = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Flex.defaultProps = {
  className: "",
};

export default Flex;