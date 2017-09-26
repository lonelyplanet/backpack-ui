import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    base: {
      backgroundColor: colors.bgPrimary,
      borderRadius: "4px",
      display: "inline-block",
      lineHeight: 1,
      padding: `${10 / 13}em ${16 / 13}em ${8 / 13}em`,
      position: "relative",
      zIndex: zIndex.popup,
    },

    shadow: {
      small: {
        boxShadow: `0 ${2 / 13}em ${13 / 13}em ${rgba(colors.shadowPrimary, 0.2)}`,
      },

      large: {
        boxShadow: `0 ${36 / 13}em ${57 / 13}em ${rgba(colors.shadowPrimary, 0.3)}`,
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
      color: colors.bgPrimary,
      position: "absolute",
    },

    direction: {
      up: {
        height: `${6 / 13}em`,
        top: `${-5 / 13}em`,
        width: "100%",
      },

      down: {
        bottom: `${-5 / 13}em`,
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
          textShadow: `0 ${-1 / 13}em ${1 / 13}em ${rgba(colors.shadowPrimary, 0.05)}`,
          transform: "scaleX(2)",
        },

        down: {
          left: "50%",
          marginLeft: `${-4.5 / 13}em`,
          textShadow: `0 ${1 / 13}em ${1 / 13}em ${rgba(colors.shadowPrimary, 0.05)}`,
          top: `${-1 / 13}em`,
          transform: "scaleX(2)",
        },

        left: {
          left: `${-1 / 13}em`,
          marginTop: `${-4 / 13}em`,
          top: "50%",
          textShadow: `${-1 / 13}em 0 ${1 / 13}em ${rgba(colors.shadowPrimary, 0.05)}`,
          transform: "scaleY(2)",
        },

        right: {
          marginTop: `${-4 / 13}em`,
          right: `${-1 / 13}em`,
          top: "50%",
          textShadow: `${1 / 13}em 0 ${1 / 13}em ${rgba(colors.shadowPrimary, 0.05)}`,
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

    position: {
      right: {
        left: "auto",
        marginLeft: 0,
        marginRight: 0,
        right: "16px",
        width: "auto",
      },

      left: {
        left: "16px",
        marginLeft: 0,
        marginRight: 0,
        right: "auto",
        width: "auto",
      },
    },
  },

  type: {
    dropdown: {
      container: {
        boxShadow: `0 ${30 / 18}em ${90 / 18}em ${rgba(colors.shadowPrimary, 0.36)}`,
        fontSize: "18px",
        padding: `${20 / 18}em ${40 / 18}em`,
      },

      arrow: {
      },
    },

    mapPopup: {
      container: {
        borderRadius: 0,
        boxShadow: `0 ${17 / 11}em ${27 / 11}em ${rgba(colors.textPrimary, 0.36)}`,
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
  arrowPosition,
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
          (arrow === "up" || arrow === "down") && arrowPosition === "left" && styles.arrow.position.left,
          (arrow === "up" || arrow === "down") && arrowPosition === "right" && styles.arrow.position.right,
          displayType && styles.type[displayType].arrow,
          style.backgroundColor && { color: style.backgroundColor },
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
  children: PropTypes.node.isRequired,

  /**
   * Size of the flyout
   */
  size: PropTypes.oneOf([
    "small",
    "medium",
  ]),

  /**
   * Position of the flyout arrow
   */
  arrow: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Used with up and down arrows; allows for the arrow to be offset to
   * the left or right
   */
  arrowPosition: PropTypes.oneOf([
    "",
    "left",
    "right",
  ]),

  /**
   * Whether or not the flyout should fill its parent's width
   */
  fill: PropTypes.bool,

  /**
   * Size of the shadow
   */
  shadow: PropTypes.oneOf([
    "small",
    "large",
  ]),

  /**
   * Determine display type
   */
  displayType: PropTypes.oneOf([
    "",
    "dropdown",
    "mapPopup",
  ]),

  /**
   * Remove padding from container and let content touch the edges
   */
  removePadding: PropTypes.bool,

  /**
   * Styles for positioning, etc.
   */
  style: propTypes.style,
};

Flyout.defaultProps = {
  size: "small",
  arrow: "down",
  arrowPosition: "",
  fill: false,
  displayType: "",
  shadow: "small",
  removePadding: false,
  style: null,
};

Flyout.styles = styles;

export default radium(Flyout);
