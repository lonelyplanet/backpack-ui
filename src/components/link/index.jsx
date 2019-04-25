import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router";
import createQAHook from "../../utils/createQAHook";
import { validReactAttributes } from "../../utils/validReactAttributes";

const isExternal = (url) => /^(http|https):\/\//.test(url || "");

const Link = (props) => {
  const sanitizedProps = validReactAttributes(props);

  return (
    isExternal(props.to) || (!props.to && props.onClick) ?
      <a
        href={props.to}
        data-qa={props.qahook ? createQAHook(`${props.qahook}`, "external-link", "link") : null}
        onClick={props.onClick}
        {...sanitizedProps}
      >
        {props.children}
      </a>
      :
      <RouterLink to={props.to} onClick={props.onClick}>
        {props.children}
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
  qahook: PropTypes.string,
};

Link.defaultProps = {
  qahook: null,
};

export default Link;
