import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    color: "initial",
    cursor: "pointer",
  },

  buttonResets: {
    backgroundColor: "transparent",
    textAlign: "left",
    width: "100%",
  },
};

const scopedStyles = {
  ".SettingBlockButtonWrapper:focus .Checkbox": outline(),
};

const SettingBlockButtonWrapper = (props) => (
  <button
    {...props}
    className="SettingBlockButtonWrapper"
    style={[styles.container, styles.buttonResets, props.style]}
  >
    <Style rules={scopedStyles} />

    {props.children}
  </button>
);

SettingBlockButtonWrapper.propTypes = {
  children: PropTypes.element,
  style: propTypes.style,
};

export default radium(SettingBlockButtonWrapper);
