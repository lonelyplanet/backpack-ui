import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import createQAHook from "../../utils/createQAHook";
import { validReactAttributes } from "../../utils/validReactAttributes";

const isExternal = (url) => /^(http|https):\/\//.test(url || "");

const Link = ({ to, onClick, children, qaHook, ...rest }) => {
  const sanitizedProps = validReactAttributes(rest);

  return (
    isExternal(to) || (!to && onClick) ?
      <a
        href={to}
        data-testid={qaHook ? createQAHook(`${qaHook}`, "external-link", "link") : null}
        onClick={onClick}
        {...sanitizedProps}
      >
        {children}
      </a>
      :
      <RouterLink
        to={to}
        onClick={onClick}
        {...sanitizedProps}
      >
        {children}
      </RouterLink>
  );
};

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
