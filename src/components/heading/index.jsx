import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import {
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

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
      fontSize: `${fontSizeUppercase}px`,
    },
    small: {
      fontSize: `${fontSizeUppercase}px`,

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${(fontSizeUppercase + 2)}px`,
      },
    },
    medium: {
      fontSize: `${(fontSizeHeading5 + 2)}px`,
      lineHeight: (40 / 26),
    },
    large: {
      fontSize: `${(fontSizeHeading2 - 8)}px`,

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${(fontSizeHeading2 - 3)}px`,
      },
    },
    huge: {
      fontSize: `${(fontSizeHeading4 + 2)}px`,
      letterSpacing: "-1px",
      lineHeight: (36 / 30),

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${fontSizeHeading1}px`,
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
      fontWeight: fontWeightRegular,
    },
    thick: {
      fontWeight: fontWeightMedium,
    },
  },

  importance: {
    low: {
      color: rgba(colors.textPrimary, 0.35),
    },
    normal: {
      color: colors.textPrimary,
    },
    high: {
      color: colors.textPrimary,
    },
    alert: {
      color: colors.accentRed,
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
  qaHook,
}) {
  const Component = `h${level}`;

  return (
    <Component
      className="Heading"
      data-qa={qaHook ? createQAHook(children, "heading", `${Component}`) : null}
      style={[
        styles.base,
        size && styles.size[size],
        weight && styles.weight[weight],
        importance && styles.importance[importance],
        tracking && styles.tracking[tracking],
        truncate && styles.variant.truncate,
        caps && styles.variant.caps,
        override,
      ]}
    >
      {children}
    </Component>
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: PropTypes.oneOf([
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
  size: PropTypes.oneOf([
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
  ]).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: PropTypes.oneOf([
    "thick",
    "normal",
    "thin",
    "extraThin",
  ]),

  /**
   * The heading color changes based on importance
   */
  importance: PropTypes.oneOf([
    "alert",
    "high",
    "normal",
    "low",
  ]),

  /**
   * Controls the letter spacing
   */
  tracking: PropTypes.oneOf([
    "tight",
    "normal",
    "loose",
  ]),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   */
  truncate: PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: PropTypes.bool,

  /**
   * Override styles
   */
  override: propTypes.style,

  /**
   * Boolean value for qa hook
   */
  qaHook: PropTypes.bool,
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
  qaHook: false,
};

Heading.styles = styles;

export default radium(Heading);
