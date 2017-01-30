import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import CategoryLabel from "../categoryLabel";

const styles = {
  color: color.blue,
  display: "block",
  textDecoration: "none",
};

const CategoryLabelLink = ({ href, children, style }) => (
  <CategoryLabel style={style}>
    <a
      style={styles}
      href={href}
    >
      {children}
    </a>
  </CategoryLabel>
);

CategoryLabelLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(CategoryLabelLink);
