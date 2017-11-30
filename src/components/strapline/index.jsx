import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import {
  fontSizeBodySmall,
  fontSizeHeading4,
  fontSizeHeading7,
  lineHeightHeading4,
  lineHeightHeading7,
  lineHeightReset,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";

const styles = {
  base: {
    fontFamily: font("miller"),
    fontSize: `${fontSizeHeading4}px`,
    fontStyle: "italic",
    lineHeight: lineHeightHeading4,
  },

  size: {
    tiny: {
      fontSize: `${fontSizeBodySmall}px`,
      letterSpacing: ".4px",
      lineHeight: lineHeightReset,
    },
    small: {
      fontSize: `${fontSizeHeading7}px`,
      letterSpacing: ".4px",
      lineHeight: lineHeightHeading7,
    },
  },

  parent: {
    masthead: {
      letterSpacing: "1px",
    },
  },

  color: {
    white: {
      color: colors.textOverlay,
    },
    gray: {
      color: rgba(colors.bgOverlay, 0.4),
    },
  },
};

const Strapline = ({ children, size, parent, color, style }) => (
  <div
    className="Strapline"
    style={[
      styles.base,
      size && styles.size[size],
      color && styles.color[color],
      parent && styles.parent[parent],
      style,
    ]}
  >
    {children}
  </div>
);

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

  /**
   * Add custom styles
   */
  style: propTypes.style,
};

Strapline.defaultProps = {
  size: "",
  color: "",
  parent: "",
  style: null,
};

export default radium(Strapline);
