import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import { darken } from "../../utils/color";
import { Logo as Icon } from "../icon";

const colours = {
  blue: colors.linkPrimary,
  gray: darken(colors.bgPrimary, 20),
  grey: darken(colors.bgPrimary, 20),
  white: colors.bgPrimary,
};

const styles = {
  anchor: {
    display: "block",
    width: "72px",

    ":focus": {
      outline: "1px lightgray dotted",
      outlineOffset: "2px",
    },
  },

  icon: {
    display: "block",
    height: "100%",
    width: "100%",
  },
};

const Logo = ({ href, color, style }) => (
  <a
    className="Logo"
    style={[styles.anchor, { color: colours[color] }, style]}
    href={href}
  >
    <Icon style={styles.icon} />
  </a>
);

Logo.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf(["blue", "gray", "grey", "white"]),
  style: PropTypes.objectOf(PropTypes.object),
};

Logo.defaultProps = {
  href: "/",
  color: "blue",
};

export default radium(Logo);
