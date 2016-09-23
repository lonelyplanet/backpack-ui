import React from "react";
import radium from "radium";
import { color, zIndex } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    base: {
      backgroundColor: color.white,
      borderRadius: "4px",
      display: "inline-block",
      lineHeight: 1,
      padding: `${10 / 13}em ${16 / 13}em ${8 / 13}em`,
      position: "relative",
      zIndex: zIndex.globalHeader,
    },

    shadow: {
      small: {
        boxShadow: `0 ${2 / 13}em ${13 / 13}em rgba(${rgb(color.black)}, .2)`,
      },

      large: {
        boxShadow: `0 ${36 / 13}em ${57 / 13}em rgba(${rgb(color.black)}, .3)`,
      },
    },

    removePadding: {
      padding: 0,
    },

    size: {
      small: {
        fontSize: "13px",
      },

      medium: {
        fontSize: "18px",
      },
    },

    fill: {
      display: "block",
      width: "100%",
    },
  },

  arrow: {
    base: {
      color: color.white,
      position: "absolute",
    },

    direction: {
      up: {
        height: `${6 / 13}em`,
        top: `${-5.5 / 13}em`,
        width: "100%",
      },

      down: {
        bottom: `${-5.5 / 13}em`,
        height: `${6 / 13}em`,
        width: "100%",
      },

      left: {
        height: "100%",
        left: `${-6 / 13}em`,
        width: `${6 / 13}em`,
      },

      right: {
        height: "100%",
        right: `${-6 / 13}em`,
        width: `${6 / 13}em`,
      },
    },

    text: {
      base: {
        display: "block",
        fontSize: `${9 / 13}em`,
        lineHeight: 1,
        position: "absolute",
      },

      direction: {
        up: {
          bottom: `${-2 / 13}em`,
          left: "50%",
          marginLeft: `${-4.5 / 13}em`,
          textShadow: `0 ${-1 / 13}em ${1 / 13}em rgba(${rgb(color.black)}, .05)`,
          transform: "scaleX(2)",
        },

        down: {
          left: "50%",
          marginLeft: `${-4.5 / 13}em`,
          textShadow: `0 ${1 / 13}em ${1 / 13}em rgba(${rgb(color.black)}, .05)`,
          top: `${-1 / 13}em`,
          transform: "scaleX(2)",
        },

        left: {
          left: `${-1 / 13}em`,
          marginTop: `${-4 / 13}em`,
          top: "50%",
          textShadow: `${-1 / 13}em 0 ${1 / 13}em rgba(${rgb(color.black)}, .05)`,
          transform: "scaleY(2)",
        },

        right: {
          marginTop: `${-4 / 13}em`,
          right: `${-1 / 13}em`,
          top: "50%",
          textShadow: `${1 / 13}em 0 ${1 / 13}em rgba(${rgb(color.black)}, .05)`,
          transform: "scaleY(2)",
        },
      },
    },

    center: {
      horizontal: {
        left: 0,
        marginLeft: "auto",
        marginRight: "auto",
        right: 0,
      },

      vertical: {
        bottom: 0,
        marginBottom: "auto",
        marginTop: "auto",
        top: 0,
      },
    },
  },

  type: {
    dropdown: {
      container: {
        boxShadow: `0 ${30 / 18}em ${90 / 18}em rgba(${rgb(color.black)}, .36)`,
        fontSize: "18px",
        padding: `${20 / 18}em ${40 / 18}em`,
      },

      arrow: {
      },
    },

    mapPopup: {
      container: {
        borderRadius: 0,
        boxShadow: `0 ${17 / 11}em ${27 / 11}em rgba(${rgb(color.titleGray)}, .36)`,
        display: "inline-block",
        fontSize: "11px",
        fontWeight: 600,
        lineHeight: (14 / 11),
        padding: `${7 / 11}em ${10 / 11}em ${7 / 11}em`,
        position: "relative",
      },

      arrow: {
        boxShadow: "none",
        marginTop: `${-15 / 11}em`,
        padding: 0,
      },
    },
  },
};

function Flyout({
  size,
  arrow,
  fill,
  children,
  displayType,
  shadow,
  removePadding,
  style,
}) {
  const arrows = {
    up: "&#9650;",
    down: "&#9660;",
    left: "&#9668;",
    right: "&#9658;",
  };

  function markup() {
    return {
      __html: arrows[arrow],
    };
  }

  return (
    <div
      className="Flyout"
      style={[
        styles.container.base,
        size && styles.container.size[size],
        fill && styles.container.fill,
        shadow && styles.container.shadow[shadow],
        removePadding && styles.container.removePadding,
        displayType && styles.type[displayType].container,
        style,
      ]}
    >
      <div className="Flyout-content">
        {children}
      </div>

      <div
        className="Flyout-arrow"
        style={[
          styles.arrow.base,
          arrow && styles.arrow.direction[arrow],
          (arrow === "up" || arrow === "down") && styles.arrow.center.horizontal,
          (arrow === "left" || arrow === "right") && styles.arrow.center.vertical,
          displayType && styles.type[displayType].arrow,
        ]}
      >
        <span
          style={[
            styles.arrow.text.base,
            arrow && styles.arrow.text.direction[arrow],
          ]}
          dangerouslySetInnerHTML={markup()}
        />
      </div>
    </div>
  );
}

Flyout.propTypes = {
  /**
   * Content for the flyout
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Size of the flyout
   */
  size: React.PropTypes.oneOf([
    "small",
    "medium",
  ]),

  /**
   * Position of the flyout arrow
   */
  arrow: React.PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Whether or not the flyout should fill its parent's width
   */
  fill: React.PropTypes.bool,

  /**
   * Size of the shadow
   */
  shadow: React.PropTypes.oneOf([
    "small",
    "large",
  ]),

  /**
   * Determine display type
   */
  displayType: React.PropTypes.oneOf([
    "",
    "dropdown",
    "mapPopup",
  ]),

  /**
   * Remove padding from container and let content touch the edges
   */
  removePadding: React.PropTypes.bool,

  /**
   * Styles for positioning, etc.
   */
  style: React.PropTypes.object,
};

Flyout.defaultProps = {
  children: null,

  size: "small",

  arrow: "down",

  fill: false,

  displayType: "",

  shadow: "small",

  removePadding: false,

  style: {},
};

Flyout.styles = styles;

export default radium(Flyout);
