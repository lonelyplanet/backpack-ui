import React from "react";
import radium from "radium";
import settings from "../../../settings.json";
import {
  fontWeightLight,
  fontWeightBook,
  fontWeightMedium,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";

const styles = {
  base: {
    fontFamily: font("benton"),
    lineHeight: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },

  size: {
    tiny: {
      fontSize: "11px",
    },
    small: {
      fontSize: "11px",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "13px",
      },
    },
    medium: {
      fontSize: "26px",
      lineHeight: (40 / 26),
    },
    large: {
      fontSize: "40px",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "45px",
      },
    },
    huge: {
      fontSize: "30px",
      letterSpacing: "-1px",
      lineHeight: (36 / 30),

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "64px",
        lineHeight: (70 / 64),
      },
    },
  },

  weight: {
    extraThin: {
      fontWeight: fontWeightLight,
    },
    thin: {
      fontWeight: fontWeightLight,
    },
    normal: {
      fontWeight: fontWeightBook,
    },
    thick: {
      fontWeight: fontWeightMedium,
    },
  },

  importance: {
    low: {
      color: rgba(settings.color.text, 0.4),
    },
    normal: {
      color: settings.color.titleGray,
    },
    high: {
      color: settings.color.darkGray,
    },
    alert: {
      color: settings.color.red,
    },
  },

  variant: {
    caps: {
      textTransform: "uppercase",
    },

    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },

  tracking: {
    tight: {
      letterSpacing: "-1px",
    },
    loose: {
      letterSpacing: "1px",
    },
  },
};

/**
 * Heading component
 */
function Heading({
  children,
  level,
  size,
  weight,
  importance,
  tracking,
  truncate,
  caps,
  override,
}) {
  const Component = `h${level}`;
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (weight) {
    style.push(styles.weight[weight]);
  }

  if (importance) {
    style.push(styles.importance[importance]);
  }

  if (tracking) {
    style.push(styles.tracking[tracking]);
  }

  if (truncate) {
    style.push(styles.variant.truncate);
  }

  if (caps) {
    style.push(styles.variant.caps);
  }

  if (override) {
    style.push(override);
  }

  return (
    <Component
      className="Heading"
      style={style}
    >
      {children}
    </Component>
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: React.PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
  ]).isRequired,

  /**
   * Declares the font size of the heading
   */
  size: React.PropTypes.oneOf([
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
  ]).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: React.PropTypes.oneOf([
    "thick",
    "normal",
    "thin",
    "extraThin",
  ]),

  /**
   * The heading color changes based on importance
   */
  importance: React.PropTypes.oneOf([
    "alert",
    "high",
    "normal",
    "low",
  ]),

  /**
   * Controls the letter spacing
   */
  tracking: React.PropTypes.oneOf([
    "tight",
    "normal",
    "loose",
  ]),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   */
  truncate: React.PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: React.PropTypes.bool,

  /**
   * Override styles
   */
  override: propTypes.style,
};

Heading.defaultProps = {
  level: 2,
  size: "medium",
  weight: "normal",
  importance: "normal",
  tracking: "normal",
  truncate: false,
  caps: false,
  override: {},
};

Heading.styles = styles;

export default radium(Heading);
