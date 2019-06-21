import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const size = 32;
const offset = 20;

const buttonShadow = (color, focus = false) => `
  0 0 0 1px ${color},
  0 3px 1px ${rgba(colors.bgOverlay, 0.05)},
  0 2px 2px ${rgba(colors.bgOverlay, 0.1)},
  0 3px 3px ${rgba(colors.bgOverlay, 0.05)}${focus ? `,
  0 3px 12px ${rgba(colors.bgOverlay, 0.2)} !important` : ""}`;

const styles = {
  container: {
    backgroundColor: colors.bgPrimary,
    borderRadius: `${size}px`,
    boxShadow: `0 0 0 1px ${colors.borderPrimary} inset`,
    display: "block",
    height: `${size}px`,
    position: "relative",
    transition: `
      background-color ${timing.fast},
      box-shadow ${timing.fast}`,
    width: `${(size + offset)}px`,
  },

  containerChecked: {
    backgroundColor: colors.uiGreen,
    boxShadow: "none",
  },

  input: {
    border: 0,
    cursor: "pointer",
    display: "block",
    height: "100%",
    left: 0,
    opacity: 0,
    outline: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: (zIndex.default + 2),
    MozAppearance: "none",
    WebkitAppearance: "none",
  },

  button: {
    backgroundColor: colors.bgPrimary,
    borderRadius: "100%",
    boxShadow: buttonShadow(colors.borderPrimary),
    display: "block",
    height: `${(size - 4)}px`,
    left: "2px",
    position: "absolute",
    top: "2px",
    transition: `
      box-shadow ${timing.fast},
      transform ${timing.fast}`,
    transform: "translateX(0)",
    width: `${(size - 4)}px`,
    zIndex: (zIndex.default + 1),
  },

  buttonChecked: {
    boxShadow: buttonShadow(rgba(colors.bgOverlay, 0.1)),
    transform: `translateX(${offset}px)`,
  },

  scoped: {
    ".Switch-input:focus ~ .Switch-button": {
      boxShadow: buttonShadow(colors.borderPrimary, true),
    },

    ".Switch-input:checked:focus ~ .Switch-button": {
      boxShadow: buttonShadow(rgba(colors.bgOverlay, 0.1), true),
    },
  },
};

const Switch = ({ id, name, value, onClick, checked, className, style, qaHook }) => (
  <div
    data-testid={qaHook ? "switch-div" : null}
    className={cn("Switch", className)}
    style={[
      styles.container,
      checked && styles.containerChecked,
      style,
    ]}
  >
    <Style
      scopeSelector=".Switch"
      rules={styles.scoped}
    />

    <input
      id={id}
      name={name}
      className="Switch-input"
      type="checkbox"
      value={value}
      checked={checked}
      style={styles.input}
      onClick={onClick}
    />

    <span
      className="Switch-button"
      style={[styles.button, checked && styles.buttonChecked]}
      aria-hidden="true"
    />
  </div>
);

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

Switch.defaultProps = {
  onClick: null,
  checked: false,
  className: null,
  style: null,
  qaHook: false,
};

export default radium(Switch);
