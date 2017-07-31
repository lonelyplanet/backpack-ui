import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { outline } from "../../utils/mixins";

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

const scopedStyles = {
  ".SettingBlockButtonWrapper:focus .Checkbox": outline(),
};

const SettingBlockButtonWrapper = (props) => (
  <button
    className="SettingBlockButtonWrapper"
    style={[styles.base, styles.buttonResets]}
    {...props}
  >
    <Style rules={scopedStyles} />

    {props.children}
  </button>
);

SettingBlockButtonWrapper.propTypes = {
  children: PropTypes.element,
};

export default radium(SettingBlockButtonWrapper);
