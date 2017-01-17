import React, { PropTypes } from "react";
import styled from "styled-components";
import settings from "../../../settings.json";
import { darken } from "../../utils/color";
import { Logo as Icon } from "../icon";

const colors = {
  blue: settings.color.blue,
  gray: darken(settings.color.white, 20),
  grey: darken(settings.color.white, 20),
  white: settings.color.white,
};

const iconStyle = {
  display: "block",
  height: "100%",
  width: "100%",
};

const Link = styled.a`
  color: ${(props) => colors[props.fillColor]};
  display: block;
  width: 72px;

  &:focus {
    outline: 1px lightgray dotted;
    outline-offset: 2px;
  }
`;

const Logo = ({ color, ...props }) => (
  <Link {...props} fillColor={color}>
    <Icon style={iconStyle} />
  </Link>
);

Logo.propTypes = {
  color: PropTypes.oneOf(["blue", "gray", "grey", "white"]),
};

Logo.defaultProps = {
  className: "Logo",
  href: "/",
  color: "blue",
};

export default Logo;
