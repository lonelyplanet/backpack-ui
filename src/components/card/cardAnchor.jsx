import React, { PropTypes } from "react";
import radium from "radium";
import { media } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  default: {
    color: "inherit",
    display: "block",
    paddingBottom: "34px",
    paddingRight: "60px",
    paddingTop: "32px",

    [mq]: {
      paddingBottom: "11px",
      paddingRight: "40px",
      paddingTop: "19px",
    },
  },

  card: {
    paddingLeft: "22px",

    [mq]: {
      paddingLeft: "11px",
    },
  },
};

const CardAnchor = ({
  children,
  href,
  tabIndex,
  layout,
  style,
}) => (
  <a
    className="Card-anchor"
    href={href}
    tabIndex={tabIndex}
    style={[
      styles.default,
      layout !== "tile" && styles.card,
      style,
    ]}
  >
    {children}
  </a>
);

CardAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  layout: PropTypes.oneOf(["tile", "card"]),
  style: propTypes.style,
};

CardAnchor.propTypes = {
  layout: "card",
};

export default radium(CardAnchor);
