import React from "react";
import styled from "styled-components";
import upperFirst from "lodash/upperFirst";
import { color, timing } from "../../../settings.json";
import Icon from "../icon";

const _ = { upperFirst };

const colors = {
  twitter: color.twitter,
  facebook: color.facebook,
  facebookMessenger: color.facebookMessenger,
  reddit: color.reddit,
  email: color.darkGray,
};

const sizeMultiplier = 2.5;

const Link = styled.a`
  background-color: ${(props) => colors[props.network]};
  border-radius: ${(props) => ((props.iconSize * sizeMultiplier) * 2)}px;
  color: ${color.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => props.iconSize}px;
  height: ${(props) => (props.iconSize * sizeMultiplier)}px;
  line-height: ${(props) => (props.iconSize * sizeMultiplier)}px;
  text-align: center;
  text-decoration: none;
  transition: opacity ${timing.fast} ease-in-out;
  width: ${(props) => (props.iconSize * sizeMultiplier)}px;

  &:hover,
  &:active,
  &:focus {
    opacity: .7;
  }

  &:focus {
    outline: 1px lightgray dotted;
    outline-offset: 2px;
  }
`;

const SocialIconButton = ({ ...props }) => (
  <Link
    {...props}
    data-network={props.network}
  >
    {React.createElement(Icon[_.upperFirst(props.network)])}
  </Link>
);

SocialIconButton.propTypes = {
  network: React.PropTypes.oneOf([
    "email",
    "facebook",
    "facebookMessenger",
    "reddit",
    "twitter",
  ]).isRequired,
  href: React.PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  iconSize: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
};

SocialIconButton.defaultProps = {
  className: "SocialIconButton",
  network: "email",
  href: null,
  onClick: null,
  iconSize: 16,
};

export default SocialIconButton;
