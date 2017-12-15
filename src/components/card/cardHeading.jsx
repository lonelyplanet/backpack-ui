import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "../heading";
import {
  fontSizeHeading5,
  fontSizeHeading7,
  lineHeightHeading5,
  lineHeightHeading7,
} from "../../styles/typography";
import media from "../../styles/mq";
import timing from "../../styles/timing";
import color from "../../styles/colors";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  default: {
    display: "-webkit-box",
    fontSize: fontSizeHeading5,
    lineHeight: lineHeightHeading5,
    maxHeight: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: `color ${timing.fast} ease-in-out`,
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,

    [mq]: {
      fontSize: fontSizeHeading7,
      lineHeight: lineHeightHeading7,
    },
  },
  dark: {
    color: color.textOverlay,
  },
  compact: {
    fontSize: fontSizeHeading7,
    lineHeight: lineHeightHeading7,
  },
};

const CardHeading = ({ children, theme, spacing, style }) => (
  <Heading
    level={3}
    weight={spacing === "compact" ? "normal" : "thin"}
    override={{
      ...styles.default,
      ...(theme === "dark" ? styles.dark : {}),
      ...(spacing === "compact" ? styles.compact : {}),
      ...style,
    }}
  >
    {children}
  </Heading>
);

CardHeading.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
  theme: PropTypes.oneOf([
    "light",
    "dark",
  ]),
  spacing: PropTypes.oneOf([
    "normal",
    "compact",
  ]),
};

CardHeading.defaultProps = {
  theme: "light",
  spacing: "normal",
};

export default radium(CardHeading);
