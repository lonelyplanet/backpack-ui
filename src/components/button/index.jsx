import React from "react";
import radium from "radium";
import assign from "object-assign";
import { color as bpColor, timing } from "../../../settings.json";
import { lighten } from "../../utils/color";
import { outline } from "../../utils/mixins";

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    backgroundColor: lighten(bpColor.blue, 7),
    color: bpColor.white,
  },

  white: {
    backgroundColor: bpColor.white,
    color: lighten(bpColor.blue, 14),
  },

};

const styles = {
  base: {
    appearance: "none",
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: 0,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    lineHeight: 1,
    paddingLeft: `${30 / 13}em`,
    paddingRight: `${30 / 13}em`,
    textAlign: "center",
    textDecoration: "none",
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    transition: `color ${timing.default} ease-in-out,
      background-color ${timing.default} ease-in-out,
      opacity ${timing.default} ease-in-out`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": assign({}, hoverStyles.base, outline()),
  },

  color: {
    blue: {
      backgroundColor: bpColor.blue,
      color: bpColor.white,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue,
    },

    white: {
      backgroundColor: bpColor.white,
      color: bpColor.blue,

      ":hover": hoverStyles.white,
      ":focus": hoverStyles.white,
      ":active": hoverStyles.white,
    },

    transparent: {
      backgroundColor: "transparent",
      color: bpColor.white,
      border: `1px solid ${bpColor.white}`,

      ":hover": hoverStyles.white,
      ":focus": hoverStyles.white,
      ":active": hoverStyles.white,
    },
  },

  size: {
    tiny: {
      fontSize: "9px",
      paddingBottom: `${9 / 9}em`,
      paddingLeft: `${19 / 9}em`,
      paddingRight: `${19 / 9}em`,
      paddingTop: `${12 / 9}em`,
    },
    small: {
      fontSize: "11px",
      paddingBottom: `${15 / 11}em`,
      paddingTop: `${18 / 11}em`,
    },
    medium: {
      fontSize: "13px",
      paddingBottom: `${21 / 13}em`,
      paddingTop: `${26 / 13}em`,
    },
    large: {
      fontSize: "15px",
      paddingBottom: `${23 / 15}em`,
      paddingTop: `${28 / 15}em`,
    },
    huge: {
      fontSize: "17px",
      paddingBottom: `${25 / 17}em`,
      paddingTop: `${30 / 17}em`,
    },
  },

  type: {
    rounded: {
      base: {
        borderRadius: "100px", // a value large enough to scale
        paddingLeft: `${19 / 9}em`,
        paddingRight: `${19 / 9}em`,
        paddingTop: `${12 / 9}em`,
      },

      tiny: {
        paddingBottom: `${9 / 9}em`,
      },

      small: {
        paddingBottom: `${10 / 9}em`,
      },

      medium: {
        paddingBottom: `${9 / 9}em`,
      },

      large: {
        paddingBottom: `${10 / 9}em`,
      },

      huge: {
        paddingBottom: `${9 / 9}em`,
      },
    },
    full: {
      display: "block",
      width: "100%",
    },
  },

  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

/**
 * Button component
 *
 * @usage
 * <Button href="/foo">Bar</Button>
 */
function Button({
  href,
  children,
  onClick,
  color,
  size,
  rounded,
  full,
  border,
  disabled,
  customStyles,
}) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";

  const style = [
    styles.base,
    color && styles.color[color],
    size && styles.size[size],
    rounded && styles.type.rounded.base,
    rounded && styles.type.rounded[size],
    full && styles.type.full,
    customStyles,
    disabled && styles.disabled,
    border && {
      boxShadow: `0 0 0 1px ${(color === "white") ? bpColor.blue : bpColor.white} inset`,
    },
  ];

  return (
    <Element
      className="Button"
      style={style}
      href={href}
      onClick={onClick}
      role={role}
      disabled={disabled}
    >
      {children}
    </Element>
  );
}

Button.propTypes = {
  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: React.PropTypes.string,

  /**
   * Content for the button
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Function to run when the button is clicked
   */
  onClick: React.PropTypes.func,

  /**
   * Color of the button
   */
  color: React.PropTypes.oneOf([
    "blue",
    "white",
    "transparent",
  ]),

  /**
   * Size of the button
   * tiny: 30 px tall
   * small: 44 px tall
   * medium: 60 px tall
   * large: 66 px tall
   * huge: 72 px tall
   */
  size: React.PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  /**
   * Use a rounded button
   */
  rounded: React.PropTypes.bool,

  /**
   * Allow button to span available width
   */
  full: React.PropTypes.bool,

  /**
   * Special styles passed in props
   */
  customStyles: React.PropTypes.objectOf(
    React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
    ]),
  ),

  /**
   * Use a border
   */
  border: React.PropTypes.bool,

  /**
   * Disable button
   */
  disabled: React.PropTypes.bool,
};

Button.defaultProps = {
  href: "",

  onClick: null,

  color: "blue",

  size: "medium",

  rounded: false,

  full: false,

  border: false,

  children: "Button",

  disabled: false,

  customStyles: null,
};

Button.styles = styles;

export default radium(Button);
