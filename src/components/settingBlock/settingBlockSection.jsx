import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import CategoryLabel from "../categoryLabel";
import color from "../../styles/colors";
import { typography } from "../../../settings.json";
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

const SettingBlockSection = ({ children, heading }) => (
  <div
    className="SettingBlockSection"
    style={styles.base}
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
};

export default radium(SettingBlockSection);
