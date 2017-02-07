import React, { PropTypes } from "react";
import radium from "radium";

const styles = {
  color: "inherit",
  display: "block",
  paddingBottom: "34px",
  paddingRight: "60px",
  paddingTop: "32px",
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
      styles,
      layout !== "tile" && { paddingLeft: "21px" },
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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ])
  ),
};

CardAnchor.propTypes = {
  layout: "card",
};

export default radium(CardAnchor);
