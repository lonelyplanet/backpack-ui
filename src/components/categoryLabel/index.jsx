import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { fontWeightLight, fontWeightRegular } from "../../styles/typography";
import { color } from "../../../settings.json";
import propTypes from "../../utils/propTypes";
import { textUppercase } from "../../utils/typography";

const styles = {
  default: Object.assign({}, {
    color: color.titleGray,
    display: "inline-block",
    fontWeight: fontWeightRegular,
    letterSpacing: "0.06px",
    overflow: "hidden",
  }, textUppercase()),

  light: {
    color: color.lightText,
    fontWeight: fontWeightLight,
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
  style: propTypes.style,
};

CategoryLabel.defaultProps = {
  light: false,
  style: null,
};

export default radium(CategoryLabel);
