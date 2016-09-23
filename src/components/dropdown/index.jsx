import React from "react";
import radium from "radium";
import assign from "object-assign";
import { color, timing } from "rizzo-next/sass/settings.json";
import outline from "../../utils/mixins";

const icons = {
  chevron: {
    base: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.darkGray}"><path d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"></path></svg>`),
  },
};

const hoverStyles = {
  opacity: 0.7,
};

const styles = {
  container: {
    base: {
      backgroundColor: color.white,
      backgroundRepeat: "no-repeat",
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.chevron.base}")`,
      backgroundSize: `${7 / 13}em`,
      backgroundPosition: `calc(100% - ${1 / 13}em) 50%`,
      border: 0,
      color: color.darkGray,
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

function Dropdown({ options, defaultValue, onChange, size }) {
  return (
    <select
      style={[styles.container.base, size && styles.container.size[size]]}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options.map((option, i) => (
        <option value={option} key={i}>
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
  options: React.PropTypes.array.isRequired,

  /**
   * A value from the options array that will be selected initially
   */
  defaultValue: React.PropTypes.string,

  /**
   * A function to run when the value changes
   */
  onChange: React.PropTypes.func,

  /**
   * A keyword to adjust the font size and padding
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
  ]),
};

Dropdown.defaultProps = {
  options: [],

  defaultValue: "",

  onChange: null,

  size: "",
};

Dropdown.styles = styles;

export default radium(Dropdown);
