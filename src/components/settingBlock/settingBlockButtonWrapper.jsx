import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

const styles = {
  base: {
    cursor: "pointer",
    color: "initial",
  },
  buttonResets: {
    textAlign: "left",
    width: "100%",
    backgroundColor: "transparent",
  },
};

const SettingBlockButtonWrapper = (props) => (
  <button
    className="SettingBlockButtonWrapper"
    style={[styles.base, styles.buttonResets]}
    {...props}
  >
    {props.children}
  </button>
);

SettingBlockButtonWrapper.propTypes = {
  children: PropTypes.element,
};

export default radium(SettingBlockButtonWrapper);
