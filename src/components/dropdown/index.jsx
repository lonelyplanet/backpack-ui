import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import assign from "object-assign";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { outline } from "../../utils/mixins";
import createQAHook from "../../utils/createQAHook";

const icons = {
  chevron: {
    base: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${colors.textPrimary}"><path d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"></path></svg>`),
  },
};

const hoverStyles = {
  opacity: 0.7,
};

const styles = {
  container: {
    base: {
      backgroundColor: colors.bgPrimary,
      backgroundRepeat: "no-repeat",
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.chevron.base}")`,
      backgroundSize: `${7 / 13}em`,
      backgroundPosition: `calc(100% - ${1 / 13}em) 50%`,
      border: 0,
      color: colors.textPrimary,
      cursor: "pointer",
      fontSize: "13px",
      lineHeight: 1,
      padding: `${10 / 13}em ${10 / 13}em ${7 / 13}em ${1 / 13}em`,
      transition: `opacity ${timing.fast}`,
      WebkitAppearance: "none",

      ":hover": hoverStyles,
      ":active": hoverStyles,
      ":focus": assign({}, hoverStyles, outline()),
    },

    size: {
      small: {
        fontSize: "11px",
        fontWeight: 600,
      },
    },
  },
};

function Dropdown({ options, defaultValue, onChange, size, qaHook }) {
  return (
    <select
      style={[styles.container.base, size && styles.container.size[size]]}
      defaultValue={defaultValue}
      onChange={onChange}
      data-qa={createQAHook(qaHook, "select", "select")}
    >
      {options.map((option, i) => (
        <option value={option} key={i} data-qa={createQAHook(option, `${i}`, "option")}>
          {option}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  /**
   * An array of options for the select element
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * A value from the options array that will be selected initially
   */
  defaultValue: PropTypes.string,

  /**
   * A function to run when the value changes
   */
  onChange: PropTypes.func,

  /**
   * A keyword to adjust the font size and padding
   */
  size: PropTypes.oneOf([
    "",
    "small",
  ]),

  /**
   * A custom data attribute to adjust for automation testing
   */
  qaHook: PropTypes.string,
};

Dropdown.defaultProps = {
  options: [],
  defaultValue: "",
  onChange: null,
  size: "",
  qaHook: null,
};

Dropdown.styles = styles;

export default radium(Dropdown);
