import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";

const isExternal = (url) => /^(http|https):\/\//.test(url || "");

const Link = (props) => (
  isExternal(props.to) || (!props.to && props.onClick) ?
    <a
      href={props.to}
      data-qa="external-link"
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </a>
    :
    <RouterLink {...props}>
      {props.children}
    </RouterLink>
);

Link.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
};

export default Link;
