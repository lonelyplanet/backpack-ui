import React from "react";
import radium from "radium";
import styles from "./styles";

function DatePicker({ id, name, required, size, theme }) {
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

  return (
    <input
      style={style}
      type="text"
      id={id}
      name={name || id}
      required={required}
    />
  );
}

DatePicker.propTypes = {
  id: React.PropTypes.string.isRequired,

  name: React.PropTypes.string,

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
  ]),
};

DatePicker.defaultProps = {
  id: "",

  name: "",

  required: false,

  size: "medium",

  theme: "base",
};

export default radium(DatePicker);
