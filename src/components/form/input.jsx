import React from "react";
import radium from "radium";
import styles from "./styles";

function Input({
  type,
  id,
  label,
  name,
  defaultValue,
  min,
  max,
  placeholder,
  required,
  size,
  theme,
  fill,
}) {
  const style = [styles.base];

  style.push(styles.element.input.base);

  if (size) {
    style.push(styles.size[size]);
    style.push(styles.element.input.size[size]);
  }

  if (theme) {
    style.push(styles.theme[theme]);
    style.push(styles.element.input.theme[theme]);
  }

  if (fill) {
    style.push(styles.fill);
  }

  const props = {
    style,
    type,
    id,
    name: name || id,
  };

  props.defaultValue = defaultValue || null;
  props.placeholder = placeholder || null;
  props.required = required || null;

  if (type === "number") {
    props.min = min;
    props.max = max;
  }

  return (
    <input {...props} aria-label={label} title={label} />
  );
}

Input.propTypes = {
  type: React.PropTypes.oneOf([
    "date",
    "time",
    "email",
    "file",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "url",
    "radio",
    "checkbox",
  ]).isRequired,

  id: React.PropTypes.string.isRequired,

  label: React.PropTypes.string.isRequired,

  name: React.PropTypes.string,

  defaultValue: React.PropTypes.string,

  min: React.PropTypes.string,

  max: React.PropTypes.string,

  placeholder: React.PropTypes.string,

  required: React.PropTypes.bool,

  size: React.PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  theme: React.PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "inputGroup",
  ]),

  /**
   * Fills the width of the parent
   */
  fill: React.PropTypes.bool,
};

Input.defaultProps = {
  type: "text",

  id: "",

  label: "",

  name: "",

  defaultValue: "",

  min: "",

  max: "",

  placeholder: "",

  required: false,

  size: "medium",

  theme: "base",

  fill: false,
};

Input.styles = styles;

export default radium(Input);
