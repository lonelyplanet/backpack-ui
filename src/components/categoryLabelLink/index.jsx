import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import CategoryLabel from "../categoryLabel";
import { validReactAttributes } from "../../utils/validReactAttributes";
import createQAHook from "../../utils/createQAHook";

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
        data-qa={props.qaHook ? createQAHook("category-label", "category-label", "link") : null}
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
  qaHook: PropTypes.bool,
};

CategoryLabelLink.defaultProps = {
  qaHook: false,
};

export default radium(CategoryLabelLink);
