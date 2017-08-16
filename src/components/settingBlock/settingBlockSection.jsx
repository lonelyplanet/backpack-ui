import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import CategoryLabel from "../categoryLabel";
import color from "../../styles/colors";
import { typography } from "../../../settings.json";
import propTypes from "../../utils/propTypes";
import { rgba } from "../../utils/color";


const styles = {
  base: {
    marginBottom: "40px",
  },
  sectionHeading: {
    paddingBottom: "16px",
    fontWeight: typography.fontWeightBold,
    color: color.textSecondary,
    verticalAlign: "bottom",
  },
  inputPlaceholderRules: {
    "::-webkit-input-placeholder": {
      color: rgba(color.textPrimary, 0.3),
    },
    "::-moz-placeholder": {
      color: rgba(color.textPrimary, 0.3),
    },
    ":-ms-input-placeholder": {
      color: rgba(color.textPrimary, 0.3),
    },
  },
};

const SettingBlockSection = ({ children, heading, style }) => (
  <div
    className="SettingBlockSection"
    style={[styles.base, style]}
  >
    <Style
      scopeSelector=".SettingBlockSection"
      rules={styles.inputPlaceholderRules}
    />
    <CategoryLabel light style={styles.sectionHeading}>{heading}</CategoryLabel>
    {children}
  </div>
);

SettingBlockSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  heading: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(SettingBlockSection);
