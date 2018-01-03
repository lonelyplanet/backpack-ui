import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import Link from "../link";

const mediaQuery = `@media (max-width: ${mq.max[768]})`;

const styles = {
  default: {
    color: "inherit",
    display: "block",
    paddingBottom: "34px",
    paddingRight: "60px",
    paddingTop: "32px",

    [mediaQuery]: {
      paddingBottom: "11px",
      paddingRight: "40px",
      paddingTop: "19px",
    },
  },

  card: {
    paddingLeft: "22px",

    [mediaQuery]: {
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
  <Link
    to={href}
    className="Card-anchor"
    tabIndex={tabIndex}
  >
    <span
      style={[
        styles.default,
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
  style: propTypes.style,
};

CardAnchor.defaultProps = {
  layout: "card",
};

export default radium(CardAnchor);
