import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  default: {
    color: color.titleGray,
    display: "inline-block",
    fontFamily: font("benton"),
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.06px",
    lineHeight: 1,
    overflow: "hidden",
    textTransform: "uppercase",
  },

  light: {
    color: color.lightText,
    fontWeight: 400,
  },
};

const CategoryLabel = ({ children, light, style }) => (
  <span
    className="CategoryLabel"
    style={[
      styles.default,
      light && styles.light,
      style,
    ]}
  >
    {children}
  </span>
);

CategoryLabel.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.object),
};

CategoryLabel.defaultProps = {
  light: false,
};

export default radium(CategoryLabel);
