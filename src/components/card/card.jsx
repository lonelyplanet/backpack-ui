import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import { rgba } from "../../utils/color";
import { color, media } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (min-width: ${media.min["768"]})`;

const hoverStyles = {
  default: {
    ".CoverPhoto": {
      transform: "scale(1.03) !important",
    },
  },

  light: {
    ".Heading": {
      color: `${color.blue} !important`,
    },
  },
};

const styles = {
  container: {
    height: "auto",
    maxWidth: "410px",
    minWidth: "216px",
    position: "relative",
  },

  card: {
    boxShadow: `0 0 20px ${rgba(color.black, 0.12)}`,

    [mq]: {
      boxShadow: `0 12px 34px ${rgba(color.black, 0.12)}`,
    },
  },
};

const Card = ({
  children,
  layout,
  theme,
  className,
  style,
}) => (
  <div
    className={`${cn("Card", className)} Card--${theme}`}
    style={[
      styles.container,
      layout !== "tile" && styles.card,
      style,
    ]}
  >
    <Style
      scopeSelector=".Card:hover"
      rules={hoverStyles.default}
    />

    <Style
      scopeSelector=".Card--light:hover"
      rules={hoverStyles.light}
    />

    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["tile", "card"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  className: PropTypes.string,
  style: propTypes.style,
};

Card.defaultProps = {
  layout: "card",
  theme: "light",
};

export default radium(Card);
