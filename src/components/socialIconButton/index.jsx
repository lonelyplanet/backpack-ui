import React, { PropTypes } from "react";
import radium from "radium";
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

function SocialIconButton({ network, href, onClick, iconSize, style }) {
  const styles = {
    backgroundColor: colors[network],
    borderRadius: `${((iconSize * sizeMultiplier) * 2)}px`,
    color: color.white,
    cursor: "pointer",
    display: "inline-block",
    fontSize: `${iconSize}px`,
    height: `${(iconSize * sizeMultiplier)}px`,
    lineHeight: `${(iconSize * sizeMultiplier)}px`,
    textAlign: "center",
    textDecoration: "none",
    transition: `opacity ${timing.fast} ease-in-out`,
    width: `${(iconSize * sizeMultiplier)}px`,

    ":hover": {
      opacity: 0.7,
    },

    ":active": {
      opacity: 0.7,
    },

    ":focus": {
      opacity: 0.7,
      outline: "1px lightgray dotted",
      outlineOffset: "2px",
    },
  };

  return (
    <a
      className="SocialIconButton"
      href={href}
      onClick={onClick}
      style={[styles, style]}
      data-network={network}
    >
      {React.createElement(Icon[_.upperFirst(network)])}
    </a>
  );
}

SocialIconButton.propTypes = {
  network: PropTypes.oneOf([
    "email",
    "facebook",
    "facebookMessenger",
    "reddit",
    "twitter",
  ]).isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.object),
};

SocialIconButton.defaultProps = {
  network: "email",
  href: null,
  onClick: null,
  iconSize: 16,
};

export default radium(SocialIconButton);
