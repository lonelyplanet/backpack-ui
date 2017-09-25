import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import * as typography from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    fontSize: `${typography.fontSizeHeading7}`,
    fontWeight: typography.fontWeightLight,
    // lineHeight: typography.lineHeightReset,
    marginTop: "8px",
  },
};

const SettingBlockDescription = ({ children, style }) => (
  <p
    className="SettingBlockDescription"
    style={[styles.container, style]}
  >
    {children}
  </p>
);

SettingBlockDescription.propTypes = {
  children: PropTypes.string,
  style: propTypes.style,
};

export default radium(SettingBlockDescription);
