import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import { fontWeightLight, fontWeightRegular } from "../../styles/typography";
import propTypes from "../../utils/propTypes";
import { textUppercase } from "../../utils/typography";
import createQAHook from "../../utils/createQAHook";

const styles = {
  default: Object.assign({}, {
    color: colors.textPrimary,
    display: "inline-block",
    fontWeight: fontWeightRegular,
    letterSpacing: "0.06px",
    overflow: "hidden",
  }, textUppercase()),

  light: {
    color: colors.textSecondary,
    fontWeight: fontWeightLight,
  },
};

const CategoryLabel = ({ children, light, style, qaHook }) => (
  <span
    className="CategoryLabel"
    data-qa={qaHook ? createQAHook("category-label") : null}
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
  qaHook: PropTypes.bool,
};

CategoryLabel.defaultProps = {
  light: false,
  style: null,
  qaHook: false,
};

export default radium(CategoryLabel);
