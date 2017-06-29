import React from "react";
import radium from "radium";
import PropTypes from "prop-types";
import propTypes from "../../utils/propTypes";

const styles = {
  base: {
    marginBottom: "8px",
  },
};

const SettingBlockListItemWrapper = ({ children, style }) => (
  <div
    className="SettingBlockListItemWrapper"
    style={[styles.base, style]}
  >
    {children}
  </div>
);

SettingBlockListItemWrapper.propTypes = {
  children: PropTypes.element,
  style: propTypes.style,
};

export default radium(SettingBlockListItemWrapper);
