import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import kebabCase from "lodash/kebabCase";
import { timing, zIndex } from "../../../settings.json";
import color from "../../styles/colors";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";
import Icon from "../icon";

const _ = { kebabCase };

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
    verticalAlign: "top",
  },

  label: {
    color: color.textPrimary,
    cursor: "pointer",
    display: "block",
    fontSize: "13px",
    lineHeight: 1,
    position: "relative",
  },

  text: {
    display: "block",
    lineHeight: 1,
  },

  checkmark: {
    borderColor: color.textSecondary,
    borderStyle: "solid",
    borderWidth: "1px",
    color: color.bgPrimary,
    display: "block",
    left: 0,
    position: "absolute",
    textAlign: "center",
    top: 0,
    transition: `background-color ${timing.fast},
      border-color ${timing.fast}`,
    userSelect: "none",
    zIndex: zIndex.default,
  },

  checkmarkChecked: {
    backgroundColor: color.linkPrimary,
    borderColor: color.linkPrimary,
  },

  input: {
    backgroundColor: color.bgPrimary,
    border: 0,
    left: 0,
    margin: 0,
    opacity: 0,
    position: "absolute",
    top: 0,
    WebkitAppearance: "none",
  },
};


class CheckboxComponent extends Component {
  render() {
    const {
      checked,
      onClick,
      id,
      value,
      size,
      name,
      label,
      rounded,
      style,
    } = this.props;

    const textPadding = {
      16: {
        paddingBottom: "1px",
        paddingLeft: "28px",
        paddingTop: "2px",
      },
      24: {
        paddingBottom: "5px",
        paddingLeft: "36px",
        paddingTop: "6px",
      },
      32: {
        paddingBottom: "9px",
        paddingLeft: "44px",
        paddingTop: "10px",
      },
    };

    const checkmarkPadding = {
      16: { padding: "2px" },
      24: { padding: "4px" },
      32: { padding: "6px" },
    };

    return (
      <span
        className="Checkbox"
        id={_.kebabCase(id)}
        ref={_.kebabCase(id)}
        style={[
          styles.container,
          style,
        ]}
      >
        <label
          htmlFor={`${_.kebabCase(id)}-input`}
          style={[
            styles.label,
            { height: `${size}px` },
            label ? { width: "auto" } : { width: `${size}px` },
          ]}
        >
          <span
            style={[
              styles.checkmark,
              {
                fontSize: `${(size / 2)}px`,
                height: `${size}px`,
                width: `${size}px`,
              },
              checkmarkPadding[size],
              rounded && { borderRadius: "100%" },
              checked && styles.checkmarkChecked,
            ]}
          >
            <Icon.Checkmark
              style={checked ? { opacity: 1 } : { opacity: 0 }}
            />
          </span>

          {label && <span style={[styles.text, textPadding[size]]}>{label}</span>}

          <input
            id={`${_.kebabCase(id)}-input`}
            type="checkbox"
            style={[
              styles.input,
              {
                height: `${size}px`,
                width: `${size}px`,
              },
            ]}
            value={value}
            name={_.kebabCase(name)}
            onClick={onClick}
          />
        </label>
      </span>
    );
  }
}

CheckboxComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([16, 24, 32]),
  rounded: PropTypes.bool,
  style: propTypes.style,
};

CheckboxComponent.defaultProps = {
  checked: false,
  onClick: null,
  size: 16,
  rounded: false,
};

export default radium(CheckboxComponent);
