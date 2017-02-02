import React, { Component, PropTypes } from "react";
import radium from "radium";
import kebabCase from "lodash/kebabCase";
import { color, timing, zIndex } from "../../../settings.json";
import { darken } from "../../utils/color";
import font from "../../utils/font";
import Icon from "../icon";

const _ = { kebabCase };

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
    verticalAlign: "top",
  },

  label: {
    color: color.darkGray,
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
    borderColor: color.gray,
    borderStyle: "solid",
    borderWidth: "1px",
    color: color.white,
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
    backgroundColor: color.blue,
    borderColor: color.blue,
  },

  input: {
    backgroundColor: color.white,
    border: 0,
    left: 0,
    margin: 0,
    outlineColor: darken(color.gray, 7),
    position: "absolute",
    top: 0,
    WebkitAppearance: "none",
  },
};

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked,
    });
  }

  onClick(event) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick({
        value: event.currentTarget.value,
        name: event.currentTarget.name,
        checked: !this.state.checked,
      });
    }

    event.preventDefault();
  }

  render() {
    const {
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
              this.state.checked && styles.checkmarkChecked,
            ]}
          >
            <Icon.Checkmark
              style={this.state.checked ? { opacity: 1 } : { opacity: 0 }}
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
            onClick={this.onClick}
          />
        </label>
      </span>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([16, 24, 32]),
  rounded: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.object),
};

Checkbox.defaultProps = {
  checked: false,
  onClick: null,
  size: 16,
  rounded: false,
};

export default radium(Checkbox);
