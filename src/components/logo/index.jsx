import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import settings from "../../../settings.json";
import { darken } from "../../utils/color";
import { Logo as Icon } from "../icon";

const colors = {
  blue: settings.color.blue,
  gray: darken(settings.color.white, 20),
  grey: darken(settings.color.white, 20),
  white: settings.color.white,
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
    style={[styles.anchor, { color: colors[color] }, style]}
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
