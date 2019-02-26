import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import styles from "./styles";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

function Input(props) {
  const { name, id, type, error, size, theme, fill, customStyles } = props;

  // remove custom props that throw console errors
  const sanitizedProps = Object.entries(props).reduce((iter, [key, value]) => {
    if (key !== "fill" && key !== "customStyles") {
      iter[key] = value;
    }
    return iter;
  }, {});

  return (
    <input
      name={name || id}
      data-qa={createQAHook(name, id, "input")}
      type={type}
      {...sanitizedProps}
      style={[
        styles.base,
        styles.element.input.base,
        size && styles.size[size],
        size && styles.element.input.size[size],
        theme && styles.theme[theme],
        theme && styles.element.input.theme[theme],
        theme && error && styles.theme[theme].error,
        fill && styles.fill,
        customStyles,
      ]}
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
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),
  theme: PropTypes.oneOf(["base", "light", "dark", "float", "inputGroup"]),
  /**
   * Fills the width of the parent
   */
  fill: PropTypes.bool,
  customStyles: propTypes.style,
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
