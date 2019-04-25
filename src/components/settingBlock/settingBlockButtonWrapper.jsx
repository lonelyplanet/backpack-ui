import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import { validReactAttributes } from "../../utils/validReactAttributes";

const styles = {
  container: {
    color: "inherit",
    cursor: "pointer",
    ":focus": {
      outline: "none",
    },
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

const SettingBlockButtonWrapper = (props) => {
  const sanitizedProps = validReactAttributes(props);

  return (
    <button
      {...sanitizedProps}
      className="SettingBlockButtonWrapper"
      style={[styles.container, styles.buttonResets, props.style]}
    >
      <Style rules={scopedStyles} />

      {props.children}
    </button>
  );
};

SettingBlockButtonWrapper.propTypes = {
  children: PropTypes.element,
  style: propTypes.style,
};

export default radium(SettingBlockButtonWrapper);
