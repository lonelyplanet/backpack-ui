import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";

const isExternal = (url) => /^(http|https):\/\//.test(url || "");

const Link = (props) => (
  isExternal(props.to) || (!props.to && props.onClick) ?
    <a
      href={props.to}
      data-qa={props.qaHook ? "external-link" : null}
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
  qaHook: PropTypes.bool,
};

Link.defaultProps = {
  qaHook: false,
};

export default Link;
