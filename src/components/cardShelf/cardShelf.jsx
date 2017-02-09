import React, { PropTypes } from "react";
import radium from "radium";
import cn from "classnames";
import { grid } from "../../../settings.json";

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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardShelf);
