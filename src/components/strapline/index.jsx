import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import settings from "../../../settings.json";
import { rgb } from "../../utils/color";
import font from "../../utils/font";

const styles = {
  base: {
    fontFamily: font("miller"),
    fontSize: "30px",
    fontStyle: "italic",
  },

  size: {
    tiny: {
      fontSize: "14px",
      letterSpacing: ".4px",
      lineHeight: 1,
    },
    small: {
      fontSize: "16px",
      letterSpacing: ".4px",
      lineHeight: (21 / 16),
    },
  },

  parent: {
    masthead: {
      letterSpacing: "1px",
    },
  },

  color: {
    white: {
      color: settings.color.white,
    },
    gray: {
      color: `rgba(${rgb(settings.color.black)}, .4)`,
    },
  },
};

/**
 * Strapline component
 */
function Strapline({ children, size, parent, color }) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (parent) {
    style.push(styles.parent[parent]);
  }

  return (
    <div
      className="Strapline"
      style={style}
    >
      {children}
    </div>
  );
}

Strapline.propTypes = {
  /**
   * Text for the strapline
   */
  children: PropTypes.node.isRequired,

  /**
   * Declares the font size
   */
  size: PropTypes.oneOf([
    "",
    "tiny",
    "small",
  ]),

  /**
   * Adjusts the font color
   */
  color: PropTypes.oneOf([
    "",
    "white",
    "gray",
  ]),

  /**
   * Add a parent identifier
   */
  parent: PropTypes.oneOf([
    "",
    "masthead",
    "pageHeader",
  ]),
};

Strapline.defaultProps = {
  size: "",

  color: "",

  parent: "",
};

Strapline.styles = styles;

export default radium(Strapline);
