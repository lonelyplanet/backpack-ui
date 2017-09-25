import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import { grid } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  boxSizing: "border-box",
  maxWidth: grid.container,
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
