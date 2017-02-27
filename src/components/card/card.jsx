import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import cn from "classnames";
import { rgba } from "../../utils/color";
import { color, media } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (min-width: ${media.min["768"]})`;

const hoverStyles = {
  ".Heading": {
    color: `${color.blue} !important`,
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
  className,
  style,
}) => (
  <div
    className={cn("Card", className)}
    style={[
      styles.container,
      layout !== "tile" && styles.card,
      style,
    ]}
  >
    <Style
      scopeSelector=".Card:hover"
      rules={hoverStyles}
    />

    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["tile", "card"]),
  className: PropTypes.string,
  style: propTypes.style,
};

Card.defaultProps = {
  layout: "card",
};

export default radium(Card);
