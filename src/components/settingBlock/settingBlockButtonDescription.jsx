import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import zIndex from "../../styles/zIndex";

const styles = {
  container: {
    flexBasis: "60%",
    paddingBottom: "16px",
    zIndex: zIndex.below,
  },
};

const SettingBlockButtonDescription = ({ children, style }) => (
  <div
    className="SettingBlockButtonDescription"
    style={[styles.container, style]}
  >
    {children}
  </div>
);

SettingBlockButtonDescription.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ])),
  style: propTypes.style,
};

export default radium(SettingBlockButtonDescription);
