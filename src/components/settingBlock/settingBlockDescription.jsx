import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { fontSizeHeading7, fontWeightLight } from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightLight,
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
