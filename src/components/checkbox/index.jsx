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
    height: "16px",
  },

  text: {
    display: "block", // display: "inline-block",
    // fontSize: "13px", // fontSize: "1em",
    lineHeight: 1,
    paddingLeft: "28px",
    paddingTop: "2px",
    paddingBottom: "1px",
  },

  checkmark: {
    default: {
      borderColor: color.gray,
      borderStyle: "solid",
      borderWidth: "1px",
      color: color.white,
      display: "block",
      fontSize: "8px",
      height: "16px",
      left: 0,
      padding: "2px",
      position: "absolute",
      textAlign: "center",
      top: 0,
      transition: `background-color ${timing.fast},
        border-color ${timing.fast}`,
      userSelect: "none",
      width: "16px",
      zIndex: zIndex.default,
    },

    checked: {
      backgroundColor: color.blue,
      borderColor: color.blue,
    },
  },

  input: {
    backgroundColor: color.white,
    border: 0,
    height: "16px",
    left: 0,
    margin: 0,
    outlineColor: darken(color.gray, 7),
    position: "absolute",
    top: 0,
    WebkitAppearance: "none",
    width: "16px",
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

  onClick(event, value, name) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick({
        value,
        name,
        checked: !this.state.checked,
      });
    }
  }

  render() {
    const {
      id,
      value,
      size,
      name,
      label,
      style,
    } = this.props;

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
          style={[styles.label, label ? { width: "auto" } : { width: "16px" }]}
        >
          <span
            style={[
              styles.checkmark.default,
              this.state.checked && styles.checkmark.checked,
            ]}
          >
            <Icon.Checkmark
              style={this.state.checked ? { opacity: 1 } : { opacity: 0 }}
            />
          </span>

          {label && <span style={styles.text}>{label}</span>}

          <input
            id={`${_.kebabCase(id)}-input`}
            type="checkbox"
            style={styles.input}
            value={value}
            name={_.kebabCase(name)}
            onClick={(event) => this.onClick(event, value, _.kebabCase(name))}
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
  size: PropTypes.oneOf([
    "",
    "full",
    "half",
    "third",
  ]),
  style: PropTypes.objectOf(PropTypes.object),
};

Checkbox.defaultProps = {
  checked: false,
  onClick: null,
};

export default radium(Checkbox);
