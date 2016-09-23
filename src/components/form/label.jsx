import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  base: {
    lineHeight: 1,
  },

  orientation: {
    horizontal: {
      marginRight: ".8rem",
    },
    vertical: {
      marginBottom: ".8rem",
    },
  },

  size: {
    small: {
      fontSize: "1.1rem",
    },
  },

  type: {
    full: {
      display: "block",
      width: "100%",
    },
  },

  uppercase: {
    color: `rgba(${rgb(settings.color.darkGray)}, .4)`,
    textTransform: "uppercase",
  },
};

/**
 * Form label component
 */
function Label({ owns, orientation, size, type, uppercase, children }) {
  const style = [styles.base];

  if (orientation) {
    style.push(styles.orientation[orientation]);
  }

  if (size) {
    style.push(styles.size[size]);
  }

  if (type) {
    style.push(styles.type[type]);
  }

  if (uppercase) {
    style.push(styles.uppercase);
  }

  return (
    <label
      style={style}
      htmlFor={owns}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  /**
   * Content for label
   */
  children: React.PropTypes.node.isRequired,

  /**
   * ID of the input that the label owns/controls
   */
  owns: React.PropTypes.string.isRequired,

  /**
   * Whether or not the label is floated to the left (horizontal)
   * or stacked (vertical)
   */
  orientation: React.PropTypes.oneOf([
    "horizontal",
    "vertical",
  ]),

  /**
   * Controls the font size of the label
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
  ]),

  /**
   * Defines a type of label to apply specific styles
   */
  type: React.PropTypes.oneOf([
    "",
    "full",
  ]),

  uppercase: React.PropTypes.bool,
};

Label.defaultProps = {
  owns: "",

  orientation: "vertical",

  size: "",

  type: "",

  uppercase: false,
};

Label.styles = styles;

export default radium(Label);
