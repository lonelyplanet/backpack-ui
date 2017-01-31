import React from "react";
import radium from "radium";
import assign from "object-assign";
import upperFirst from "lodash/upperFirst";
import settings from "../../../settings.json";
import { rgb } from "../../utils/color";
import { outline } from "../../utils/mixins";
import iconFromString from "../../utils/icon";

const _ = { upperFirst };

const hoverStyles = {
  base: {
    color: settings.color.blue,
  },
  blue: {
    color: settings.color.blue,
  },
};

const styles = {
  base: {
    appearance: "none",
    backgroundColor: settings.color.white,
    border: 0,
    borderRadius: "50%",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "9px",
    lineHeight: 1,
    transition: `color ${settings.timing.default},
      box-shadow ${settings.timing.default}`,

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": assign({}, hoverStyles.base, outline()),
  },

  size: {
    small: {
      height: `${30 / 9}em`,
      width: `${30 / 9}em`,
    },
    medium: {
      height: `${40 / 9}em`,
      width: `${40 / 9}em`,
    },
  },

  shadow: {
    loose: {
      boxShadow: `0 ${2 / 9}em ${8 / 9}em rgba(${rgb(settings.color.black)}, .1)`,
    },
    tight: {
      boxShadow: `0 0 ${4 / 9}em rgba(${rgb(settings.color.black)}, .16)`,
    },
  },

  color: {
    blue: {
      color: settings.color.blue,

      ":hover": hoverStyles.blue,
      ":active": hoverStyles.blue,
      ":focus": assign({}, hoverStyles.blue, outline()),
    },
  },

  align: {
    base: {
      position: "absolute",
    },
    vertical: {
      bottom: 0,
      marginBottom: "auto",
      marginTop: "auto",
      top: 0,
    },
    horizontal: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      right: 0,
    },
  },

  direction: {
    up: {
      base: {
        top: 0,
      },

      offset: {
        small: {
          top: `${-15 / 9}em`,
        },
        medium: {
          top: `${-20 / 9}em`,
        },
      },
    },
    down: {
      base: {
        bottom: 0,
      },

      offset: {
        small: {
          bottom: `${-15 / 9}em`,
        },
        medium: {
          bottom: `${-20 / 9}em`,
        },
      },
    },
    left: {
      base: {
        left: 0,
      },

      offset: {
        small: {
          left: `${-15 / 9}em`,
        },
        medium: {
          left: `${-20 / 9}em`,
        },
      },
    },
    right: {
      base: {
        right: 0,
      },

      offset: {
        small: {
          right: `${-15 / 9}em`,
        },
        medium: {
          right: `${-20 / 9}em`,
        },
      },
    },
  },
};

function PaginatorButton({
  direction,
  size,
  shadow,
  arrow,
  color,
  align,
  offset,
  onClick,
  iconLabel,
  owns,
}) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (shadow) {
    style.push(styles.shadow[shadow]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (align) {
    style.push(
      styles.align.base,
      styles.align[align],
      offset ?
        styles.direction[direction].offset[size] :
        styles.direction[direction].base
    );
  }

  const iconName = `${_.upperFirst(arrow)}${_.upperFirst(direction)}`;

  let label;

  if (iconLabel) {
    label = iconLabel;
  } else {
    label = (direction === "up" || direction === "left") ?
      "Previous" :
      "Next";
  }

  return (
    <button
      className="PaginatorButton"
      style={style}
      title={label}
      onClick={onClick}
      aria-label={label}
      aria-owns={owns}
    >
      {iconFromString(iconName, { label })}
    </button>
  );
}

PaginatorButton.propTypes = {
  /**
   * Change the direction the arrow points
   */
  direction: React.PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]).isRequired,

  /**
   * Set the size of the button
   */
  size: React.PropTypes.oneOf([
    "small",
    "medium",
  ]),

  /**
   * Change the shadow
   */
  shadow: React.PropTypes.oneOf([
    "loose",
    "tight",
  ]),

  /**
   * Change the arrow icon type
   */
  arrow: React.PropTypes.oneOf([
    "chevron",
    "triangle",
  ]),

  /**
   * Change the color of the icon
   */
  color: React.PropTypes.oneOf([
    "",
    "blue",
  ]),

  /**
   * Position the button absolutely and align it
   */
  align: React.PropTypes.oneOf([
    "",
    "horizontal",
    "vertical",
  ]),

  /**
   * Offset the button when positioned absolutely; must be used with align
   */
  offset: React.PropTypes.bool,

  /**
   * Function to run when the button is clicked
   */
  onClick: React.PropTypes.func,

  /**
   * Override the icon label
   */
  iconLabel: React.PropTypes.string,

  /**
   * The ID of the sibling element that the button owns, e.g., if the button has
   * a menu with an ID of "share-menu", then `owns="share-menu"`.
   */
  owns: React.PropTypes.string,
};

PaginatorButton.defaultProps = {
  direction: "up",

  size: "medium",

  shadow: "loose",

  arrow: "chevron",

  color: "",

  align: "",

  offset: false,

  onClick: null,

  iconLabel: "",

  owns: "",
};

PaginatorButton.styles = styles;

export default radium(PaginatorButton);
