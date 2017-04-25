import React from "react";
import radium from "radium";
import styles from "./styles";

function Input(props) {
  const {
    label,
    name,
    id,
    type,
    error,
    size,
    theme,
    fill,
    customStyles,
  } = props;
  const style = [styles.base];

  style.push(styles.element.input.base);

  if (size) {
    style.push(styles.size[size]);
    style.push(styles.element.input.size[size]);
  }

  if (theme) {
    style.push(styles.theme[theme]);
    style.push(styles.element.input.theme[theme]);

    if (error) {
      style.push(styles.theme[theme].error);
    }
  }

  if (fill) {
    style.push(styles.fill);
  }

  if (customStyles) {
    style.push(customStyles);
  }


  return (
    <input
      name={name || id}
      aria-label={label}
      title={label}
      type={type}
      {...props}
      style={style}
    />
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


  error: React.PropTypes.bool,

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
    "float",
    "inputGroup",
  ]),

  /**
   * Fills the width of the parent
   */
  fill: React.PropTypes.bool,

  customStyles: React.PropTypes.objectOf(
    React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
    ]),
  ),

};

Input.defaultProps = {
  type: "text",

  id: "",

  label: "",

  name: "",

  size: "medium",

  theme: "base",

  fill: false,

  customStyles: null,

};

Input.styles = styles;

export default radium(Input);
