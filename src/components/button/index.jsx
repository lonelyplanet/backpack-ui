/* @flow */
import React from "react";
import radium from "radium";
import assign from "object-assign";
import settings from "rizzo-next/sass/settings.json";
import { lighten } from "../../utils/color";
import outline from "../../utils/mixins";
import type { ButtonProps } from "../../../types";

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    backgroundColor: lighten(settings.color.blue, 7),
    color: settings.color.white,
  },

  white: {
    backgroundColor: settings.color.white,
    color: lighten(settings.color.blue, 14),
  },
};

const styles = {
  base: {
    appearance: "none",
    backfaceVisibility: "hidden",
    borderColor: "transparent",
    borderRadius: 0,
    borderWidth: 1,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    lineHeight: 1,
    paddingLeft: `${30 / 12}em`,
    paddingRight: `${30 / 12}em`,
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: `color ${settings.timing.default},
      border ${settings.timing.default},
      background-color ${settings.timing.default},
      opacity ${settings.timing.default}`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": assign({}, hoverStyles.base, outline()),
  },

  color: {
    blue: {
      backgroundColor: settings.color.blue,
      color: settings.color.white,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue,
    },

    white: {
      backgroundColor: settings.color.white,
      color: settings.color.blue,

      ":hover": hoverStyles.white,
      ":focus": hoverStyles.white,
      ":active": hoverStyles.white,
    },
  },

  size: {
    tiny: {
      fontSize: "8px",
    },
    small: {
      fontSize: "10px",
    },
    medium: {
      fontSize: "12px",
    },
    large: {
      fontSize: "16px",
    },
    huge: {
      fontSize: "20px",
    },
  },

  height: {
    short: {
      paddingBottom: `${10 / 12}em`,
      paddingTop: `${12 / 12}em`,
    },
    normal: {
      paddingBottom: `${14 / 12}em`,
      paddingTop: `${18 / 12}em`,
    },
    tall: {
      paddingBottom: `${20 / 12}em`,
      paddingTop: `${23 / 12}em`,
    },
  },

  type: {
    rounded: {
      borderRadius: `${22 / 12}em`,
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
  height,
  rounded,
  full,
  useBorder,
  disabled,
}: ButtonProps) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";

  const style = [
    styles.base,
    color && styles.color[color],
    size && styles.size[size],
    height && styles.height[height],
    rounded && styles.type.rounded,
    full && styles.type.full,
    disabled && styles.disabled,
    useBorder && {
      borderColor: (color === "white") ? styles.color.blue : styles.color.white,
      borderStyle: "solid",
      borderWidth: "1px",
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
  ]),

  /**
   * Size of the button
   */
  size: React.PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  /**
   * Height of the button
   */
  height: React.PropTypes.oneOf([
    "short",
    "normal",
    "tall",
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
   * Use a border
   */
  useBorder: React.PropTypes.bool,

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

  height: "normal",

  rounded: true,

  full: false,

  useBorder: false,

  children: "Button",

  disabled: false,
};

Button.styles = styles;

export default radium(Button);
