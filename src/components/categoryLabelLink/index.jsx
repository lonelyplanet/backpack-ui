import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import CategoryLabel from "../categoryLabel";
import { validReactAttributes } from "../../utils/validReactAttributes";

const styles = {
  color: colors.linkPrimary,
  display: "block",
  textDecoration: "none",
};

const CategoryLabelLink = (props) => {
  const sanitizedProps = validReactAttributes(props);

  return (
    <CategoryLabel style={props.style}>
      <a
        style={styles}
        href={props.href}
        {...sanitizedProps}
      >
        {props.children}
      </a>
    </CategoryLabel>
  );
};

CategoryLabelLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(CategoryLabelLink);
