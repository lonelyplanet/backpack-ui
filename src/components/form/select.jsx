import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import styles from "./styles";
import createQAHook from "../../utils/createQAHook";

function Select({
  id,
  className,
  options,
  label,
  name,
  defaultValue,
  required,
  size,
  theme,
  noBorder,
  style,
  onChange,
  qahook,
}) {
  return (
    <select
      style={[
        styles.base,
        styles.element.select.base,
        size && styles.size[size],
        size && styles.element.select.size[size],
        theme && styles.theme[theme],
        theme && styles.element.select.theme[theme],
        noBorder && styles.noBorder,
        style,
      ]}
      data-qa={qahook ? createQAHook(name, id, "select") : null}
      className={cn("Select", className)}
      id={id}
      name={name || id}
      defaultValue={defaultValue}
      required={required}
      aria-label={label}
      title={label}
      onChange={onChange}
    >
      {options.map((option, index) => {
        if (typeof option === "object") {
          const isMissingLabel = Object.keys(option).indexOf("label") === -1;
          const isMissingValue = Object.keys(option).indexOf("value") === -1;

          if (isMissingLabel || isMissingValue) {
            return false;
          }

          return (
            <option
              value={option.value}
              key={option.value}
              data-qa={qahook ? createQAHook(option.value, `${index}`, "option") : null}
            >
              {option.label}
            </option>
          );
        }

        return (
          <option
            value={option}
            key={option}
            data-qa={qahook ? createQAHook(option.value, `${index}`, "option") : null}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,

  className: PropTypes.string,

  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ]).isRequired,
  ),

  label: PropTypes.string.isRequired,

  name: PropTypes.string,

  defaultValue: PropTypes.string,

  required: PropTypes.bool,

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
    "inputGroup",
  ]),

  /**
   * Remove border
   */
  noBorder: PropTypes.bool,

  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),

  /**
   * onChange function for the select element
   */
  onChange: PropTypes.func,

  /**
   * Boolean value to handle qa hooks being on
   */
  qahook: PropTypes.bool,
};

Select.defaultProps = {
  id: "",

  options: [],

  label: "",

  name: "",

  defaultValue: "",

  required: false,

  size: "medium",

  theme: "base",

  noBorder: false,

  style: {},

  qahook: false,
};

Select.styles = styles;

export default radium(Select);
