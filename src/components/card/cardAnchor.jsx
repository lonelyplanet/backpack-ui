import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import Link from "../link";
import media from "../../styles/mq";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  default: {
    color: "inherit",
    display: "block",
  },

  normal: {
    paddingBottom: "34px",
    paddingTop: "32px",

    [mq]: {
      paddingBottom: "11px",
      paddingTop: "19px",
    },
  },

  compact: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },

  card: {
    paddingLeft: "22px",
    paddingRight: "22px",

    [mq]: {
      paddingLeft: "11px",
      paddingRight: "11px",
    },
  },
};

const CardAnchor = ({
  children,
  href,
  tabIndex,
  layout,
  spacing,
  style,
}) => (
  <Link
    to={href}
    className="Card-anchor"
    tabIndex={tabIndex}
  >
    <span
      style={[
        styles.default,
        (spacing === "normal" && styles.normal) || styles.compact,
        layout !== "tile" && styles.card,
        style,
      ]}
    >
      {children}
    </span>
  </Link>
);

CardAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  layout: PropTypes.oneOf(["tile", "card"]),
  spacing: PropTypes.oneOf(["normal", "compact"]),
  style: propTypes.style,
};

CardAnchor.defaultProps = {
  layout: "card",
  spacing: "normal",
};

export default radium(CardAnchor);
