import React, { PropTypes } from "react";
import { color } from "../../../settings.json";
import CategoryLabel from "../categoryLabel";

const CategoryLabelLink = ({ href, children }) => (
  <CategoryLabel>
    <a
      style={{
        color: color.blue,
        display: "inline-block",
        textDecoration: "none",
      }}
      href={href}
    >
      {children}
    </a>
  </CategoryLabel>
);

CategoryLabelLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CategoryLabelLink;
