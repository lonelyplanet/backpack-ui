import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import CategoryLabel from "../categoryLabel";
import colors from "../../styles/colors";
import * as typography from "../../styles/typography";
import propTypes from "../../utils/propTypes";
import { rgba } from "../../utils/color";


const styles = {
  container: {
    marginBottom: "40px",
  },

  sectionHeading: {
    color: colors.textSecondary,
    fontWeight: typography.fontWeightBold,
    paddingBottom: "16px",
    verticalAlign: "bottom",
  },

  inputPlaceholderRules: {
    "::-webkit-input-placeholder": {
      color: rgba(colors.textPrimary, 0.3),
    },

    "::-moz-placeholder": {
      color: rgba(colors.textPrimary, 0.3),
    },

    ":-ms-input-placeholder": {
      color: rgba(colors.textPrimary, 0.3),
    },
  },
};

const SettingBlockSection = ({ children, heading, style }) => (
  <div
    className="SettingBlockSection"
    style={[styles.container, style]}
  >
    <Style
      scopeSelector=".SettingBlockSection"
      rules={styles.inputPlaceholderRules}
    />

    <CategoryLabel style={styles.sectionHeading} light>
      {heading}
    </CategoryLabel>

    {children}
  </div>
);

SettingBlockSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  heading: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(SettingBlockSection);
