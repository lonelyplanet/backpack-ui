import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeHeading7 } from "../../styles/typography";
import { rgba } from "../../utils/color";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import { textHeading7 } from "../../utils/typography";
import createQAHook from "../../utils/createQAHook";
import { validReactAttributes } from "../../utils/validReactAttributes";

const hoverStyles = {
  backgroundColor: rgba(colors.borderPrimary, 0.15),
};

const styles = {
  button: Object.assign({}, {
    backgroundColor: colors.bgPrimary,
    border: `1px solid ${colors.borderPrimary}`,
    borderRadius: "44px",
    color: colors.textPrimary,
    cursor: "pointer",
    display: "block",
    height: "44px",
    maxWidth: "296px",
    overflow: "hidden",
    paddingLeft: "27px",
    paddingRight: "27px",
    paddingTop: "2px",
    textAlign: "left",
    transition: `background-color ${timing.fast} ease-in-out`,
    whiteSpace: "nowrap",
    width: "100%",

    ":hover": hoverStyles,
    ":active": hoverStyles,
    ":focus": Object.assign({}, hoverStyles, outline()),
  }, textHeading7(), {
    lineHeight: 1,
  }),

  icon: {
    fontSize: `${fontSizeHeading7}px`,
    marginRight: "20px",
    marginTop: "-1px",
    verticalAlign: "top",
  },
};

const SocialLoginButton = (props) => {
  const {
    onClick,
    iconName,
    iconProps,
    children,
    style,
    qaHook,
  } = props;

  const iconSettings = {
    style: styles.icon,
  };

  const iconParameters = Object.assign({},
    iconSettings,
    iconProps,
  );
  const sanitizedProps = validReactAttributes(props);

  return (
    <button
      {...sanitizedProps}
      style={[
        styles.button,
        style,
      ]}
      onClick={onClick}
      data-testid={qaHook ? createQAHook(iconName, "social-login", "btn") : null}
    >
      {iconFromString(iconName, iconParameters)}
      {children}
    </button>
  );
};

SocialLoginButton.propTypes = {
  children: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf([
    "FacebookBlockColor",
    "GoogleColor",
    "TwitterColor",
  ]).isRequired,
  onClick: PropTypes.func,
  iconProps: PropTypes.objectOf(PropTypes.object),
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

SocialLoginButton.defaultProps = {
  qaHook: false,
};

export default radium(SocialLoginButton);
