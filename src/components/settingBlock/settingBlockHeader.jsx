import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import * as typography from "../../styles/typography";

const styles = {
  label: {
    display: "block",
    fontSize: `${typography.fontSizeHeading7}px`,
    fontWeight: typography.fontWeightMedium,
    lineHeight: typography.lineHeightReset,
    paddingTop: "16px",
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.fontSizeUppercase,
    fontWeight: typography.fontWeightLight,
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
