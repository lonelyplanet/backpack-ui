import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import {
  fontSizeHeading7,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightMedium,
  lineHeightReset,
} from "../../styles/typography";

const styles = {
  label: {
    display: "block",
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightReset,
    paddingTop: "16px",
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSizeUppercase,
    fontWeight: fontWeightLight,
    marginTop: "4px",
  },
};

const SettingBlockHeader = ({ children, htmlFor, subtitle }) => (
  <div className="SettingBlockHeader">
    <label htmlFor={htmlFor} style={styles.label}>
      {children}
    </label>

    {subtitle &&
      <p style={styles.subtitle}>
        {subtitle}
      </p>
    }
  </div>
);

SettingBlockHeader.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  subtitle: PropTypes.string,
};

export default radium(SettingBlockHeader);
