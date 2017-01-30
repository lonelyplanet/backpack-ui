import React, { PropTypes } from "react";
import assign from "object-assign";
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
  textTransform: "uppercase",
};

const CategoryLabel = ({ children, style }) => (
  <span className="CategoryLabel" style={assign({}, styles, style)}>
    {children}
  </span>
);

CategoryLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default CategoryLabel;
