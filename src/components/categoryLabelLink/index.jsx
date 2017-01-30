import React, { PropTypes } from "react";
import styled from "styled-components";
import CategoryLabel from "../categoryLabel";
import DefaultLink from "../defaultLink";

const Link = styled(DefaultLink)`
  display: block;
`;

const CategoryLabelLink = ({ children, ...props }) => (
  <CategoryLabel>
    <Link {...props}>
      {children}
    </Link>
  </CategoryLabel>
);

CategoryLabelLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryLabelLink;
