import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import assign from "object-assign";
import cn from "classnames";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { lighten } from "../../utils/color";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    backgroundColor: lighten(colors.linkPrimary, 7),
    color: colors.bgPrimary,
  },

  white: {
    backgroundColor: colors.bgPrimary,
    color: lighten(colors.linkPrimary, 14),
  },

  red: {
    backgroundColor: lighten(colors.accentRed, 7),
    color: colors.bgPrimary,
  },

  gray: {
    backgroundColor: colors.bgPrimary,
    color: lighten(colors.textPrimary, 100),
  },

  transparent: {
    backgroundColor: "transparent",
    color: colors.textOverlay,
  },

};

const styles = {
  base: {
    appearance: "none",
    WebkitAppearance: "none",
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: 0,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    lineHeight: 1,
    overflow: "hidden",
    paddingLeft: `${30 / 13}em`,
    paddingRight: `${30 / 13}em`,
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
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
      backgroundColor: colors.linkPrimary,
      color: colors.textOverlay,
      boxShadow: "none",

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue,
    },

    gray: {
      backgroundColor: "transparent",
      color: colors.textPrimary,
      boxShadow: `0 0 0 1px ${colors.borderPrimary} inset`,

      ":hover": hoverStyles.gray,
      ":focus": hoverStyles.gray,
      ":active": hoverStyles.gray,
    },

    white: {
      backgroundColor: colors.bgPrimary,
      color: colors.linkPrimary,
      boxShadow: `0 0 0 1px ${colors.linkPrimary} inset`,

      ":hover": hoverStyles.white,
      ":focus": hoverStyles.white,
      ":active": hoverStyles.white,
    },

    red: {
      backgroundColor: colors.accentRed,
      color: colors.textOverlay,
      boxShadow: `0 0 0 1px ${colors.accentRed} inset`,

      ":hover": hoverStyles.red,
      ":focus": hoverStyles.red,
      ":active": hoverStyles.red,
    },

    transparent: {
      backgroundColor: "transparent",
      color: colors.textOverlay,
      boxShadow: `0 0 0 1px ${colors.bgPrimary} inset`,

      ":hover": hoverStyles.transparent,
      ":focus": hoverStyles.transparent,
      ":active": hoverStyles.transparent,
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
        paddingLeft: `${21 / 9}em`,
        paddingRight: `${21 / 9}em`,
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
  className,
  qaHook,
  ...rest
}) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : null;

  const style = [
    styles.base,
    color && styles.color[color],
    size && styles.size[size],
    rounded && styles.type.rounded.base,
    rounded && styles.type.rounded[size],
    full && styles.type.full,
    customStyles,
    disabled && styles.disabled,
    !border && {
      boxShadow: "none",
    },
  ];


  return (
    <Element
      className={cn("Button", className)}
      style={style}
      href={href}
      data-testid={qaHook ? createQAHook(children, cn("Button", className), "btn") : null}
      onClick={onClick}
      role={role}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Element>
  );
}

Button.propTypes = {
  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: PropTypes.string,

  /**
   * Content for the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Function to run when the button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Color of the button
   */
  color: PropTypes.oneOf([
    "blue",
    "white",
    "gray",
    "red",
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
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  /**
   * Use a rounded button
   */
  rounded: PropTypes.bool,

  /**
   * Allow button to span available width
   */
  full: PropTypes.bool,

  /**
   * Special styles passed in props
   */
  customStyles: propTypes.style,

  /**
   * Use a border
   */
  border: PropTypes.bool,

  /**
   * Disable button
   */
  disabled: PropTypes.bool,

  /**
   * Add classname to button
   */
  className: PropTypes.string,

  /**
   * Add qa-hook to button
   */
  qaHook: PropTypes.bool,
};

Button.defaultProps = {
  href: null,
  onClick: null,
  color: "blue",
  size: "medium",
  rounded: false,
  full: false,
  border: false,
  children: "Button",
  disabled: false,
  customStyles: null,
  className: null,
  qaHook: false,
};

Button.styles = styles;

export default radium(Button);
