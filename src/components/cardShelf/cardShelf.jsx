import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";

import dimensions from "../../styles/dimensions";
import propTypes from "../../utils/propTypes";

const styles = {
  boxSizing: "border-box",
  maxWidth: `${dimensions.maxWidth}px`,
};

function CardShelf({ children, className, style }) {
  return (
    <section
      className={cn("CardShelf", className)}
      style={[styles, style]}
    >
      {children}
    </section>
  );
}

CardShelf.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: propTypes.style,
};

export default radium(CardShelf);
