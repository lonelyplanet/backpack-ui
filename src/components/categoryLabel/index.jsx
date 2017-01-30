import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  color: color.titleGray,
  display: "inline-block",
  fontFamily: font("benton"),
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.06px",
  lineHeight: 1,
  overflow: "hidden",
  textTransform: "uppercase",
};

const CategoryLabel = ({ children, style }) => (
  <span className="CategoryLabel" style={[styles, style]}>
    {children}
  </span>
);

CategoryLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(CategoryLabel);
