import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { spin } from "../../utils/keyframes";

const styles = {
  base: {
    display: "inline-block",
    fill: "currentColor",
    height: "1em",
    verticalAlign: "middle",
    width: "1em",
  },

  position: {
    inline: {
      base: {
        lineHeight: 1,
        position: "relative",
        verticalAlign: "initial",
      },
      before: {
        marginRight: ".5em",
      },
      after: {
        marginLeft: ".5em",
      },
    },
  },

  size: {
    fit: {
      height: "100%",
      width: "100%",
    },
    medium: {
      height: "16px",
      width: "16px",
    },
    small: {
      height: "10px",
      width: "10px",
    },
    tiny: {
      height: "6px",
      width: "6px",
    },
    half: {
      height: ".5em",
      width: ".5em",
    },
  },

  color: {
    blue: {
      fill: settings.color.blue,
    },
    gray: {
      fill: settings.color.footerCopyright,
    },
  },

  animation: {
    spin: {
      animationDuration: "500ms",
      animationIterationCount: "infinite",
      animationName: spin,
      animationTimingFunction: "linear",
    },
  },
};

/**
 * Icon component
 *
 * The icon component renders an inline SVG element.
 *
 * @usage
 * <Icon name="heart" size="small" />
 */
function Icon({ name, size, inline, color, label, dimensions, animation, style }) {
  const ariaProps = {};

  if (label) {
    ariaProps["aria-label"] = label;
  } else {
    ariaProps["aria-hidden"] = "true";
  }

  return (
    <svg
      className="Icon"
      style={[
        styles.base,
        size && styles.size[size],
        inline && styles.position.inline.base,
        inline && styles.position.inline[inline],
        color && styles.color[color],
        animation && styles.animation[animation],
        dimensions && dimensions.width && { width: dimensions.width },
        dimensions && dimensions.height && { height: dimensions.height },
        style,
      ]}
      {...ariaProps}
    >
      <use xlinkHref={`#lp-icon-${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  /**
   * The icon name is the part after `#lp-icon-` found on the ID of each of the
   * symbols within the SVG sprite.
   */
  name: React.PropTypes.string.isRequired,

  /**
   * The style definition for each size can be found in icons.scss.
   */
  size: React.PropTypes.oneOf([
    "",
    "fit",
    "medium",
    "small",
    "tiny",
    "half",
  ]),

  /**
   * Describes how to align the icon
   */
  inline: React.PropTypes.oneOf([
    "",
    "before",
    "after",
  ]),

  /**
   * A text label to describe the icon
   */
  label: React.PropTypes.string,

  /**
   * Override the icon color
   */
  color: React.PropTypes.string,

  /**
   * Override width and height
   */
  dimensions: React.PropTypes.object,

  /**
   * Name of CSS animation to apply
   */
  animation: React.PropTypes.string,

  /**
   * Object to apply additional CSS styles
   */
  style: React.PropTypes.object,
};

Icon.defaultProps = {
  name: "",

  size: "",

  inline: "",

  label: "",

  color: "",

  dimensions: {},

  animation: "",

  style: {},
};

Icon.styles = styles;

export default radium(Icon);
