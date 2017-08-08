import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";

const isExternal = (url) => /^(http|https):\/\//.test(url);

const Link = (props) => (
  isExternal(props.to) ?
    <a
      href={props.to}
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
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
};

export default Link;
