import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import styles from "./styles";

function Input(props) {
  const {
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
      type={type}
      {...props}
      style={style}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf([
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),
  theme: PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "float",
    "inputGroup",
  ]),
  /**
   * Fills the width of the parent
   */
  fill: PropTypes.bool,
  customStyles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Input.defaultProps = {
  type: "text",
  id: "",
  name: "",
  size: "medium",
  theme: "base",
  fill: false,
  customStyles: null,
};

Input.styles = styles;

export default radium(Input);
