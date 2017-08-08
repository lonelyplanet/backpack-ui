import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";

const backgroundColors = {
  twitter: colors.socialTwitter,
  facebook: colors.socialFacebook,
  facebookMessenger: colors.socialFacebookMessenger,
  reddit: colors.socialReddit,
  email: colors.textPrimary,
};

const iconNames = {
  twitter: "Twitter",
  facebook: "Facebook",
  facebookMessenger: "FacebookMessenger",
  reddit: "Reddit",
  email: "Email",
};

const sizeMultiplier = 2.5;

function SocialIconButton({
  network,
  href,
  onClick,
  iconSize,
  id,
  className,
  style,
}) {
  const size = (iconSize * sizeMultiplier);

  const hoverStyles = {
    opacity: 0.7,
  };

  const styles = {
    backgroundColor: backgroundColors[network],
    borderRadius: "100%",
    color: colors.textOverlay,
    cursor: "pointer",
    display: "inline-block",
    fontSize: `${iconSize}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    textAlign: "center",
    textDecoration: "none",
    transition: `opacity ${timing.fast} ease-in-out`,
    width: `${size}px`,

    ":hover": hoverStyles,
    ":active": hoverStyles,
    ":focus": Object.assign({}, hoverStyles, outline()),
  };

  return (
    <a
      className={cn("SocialIconButton", className)}
      id={id}
      href={href}
      onClick={onClick}
      style={[styles, style]}
      data-network={network}
    >
      {iconFromString(iconNames[network])}
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
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

SocialIconButton.defaultProps = {
  network: "email",
  href: null,
  onClick: null,
  iconSize: 16,
};

export default radium(SocialIconButton);
