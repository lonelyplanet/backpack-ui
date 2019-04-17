import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import createQAHook from "../../utils/createQAHook";

const isExternal = (url) => /^(http|https):\/\//.test(url || "");

const Link = ({ to, onClick, children, qaHook, className }) => (
  isExternal(to) || (!to && onClick) ?
    <a
      href={to}
      data-qa={qaHook ? createQAHook(`${qaHook}`, "external-link", "link") : null}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
    :
    <RouterLink to={to} onClick={onClick} data-qa={qaHook}>
      {children}
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
  qaHook: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  qaHook: null,
  className: "",
};

export default Link;
