import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  base: {
    lineHeight: 1,
  },

  size: {
    tiny: {
      fontSize: "1.1rem",
    },
    small: {
      fontSize: "1.6rem",
    },
    medium: {
      fontSize: "2.6rem",
      lineHeight: (40 / 26),
    },
    large: {
      fontSize: "4rem",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "4.5rem",
      },
    },
    huge: {
      fontSize: "3rem",
      letterSpacing: "-.1rem",
      lineHeight: (36 / 30),

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "6.4rem",
        lineHeight: (70 / 64),
      },
    },
  },

  weight: {
    thin: {
      fontWeight: 300,
    },
    normal: {
      fontWeight: 400,
    },
    thick: {
      fontWeight: 600,
    },
  },

  importance: {
    low: {
      color: `rgba(${rgb(settings.color.text)}, .4)`,
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
    "",
    "tight",
    "loose",
  ]),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   * @type {[type]}
   */
  truncate: React.PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: React.PropTypes.bool,

  /**
   * Override styles
   */
  override: React.PropTypes.object,
};

Heading.defaultProps = {
  level: 2,

  size: "medium",

  weight: "normal",

  importance: "normal",

  tracking: "",

  truncate: false,

  caps: false,

  override: {},
};

Heading.styles = styles;

export default radium(Heading);
