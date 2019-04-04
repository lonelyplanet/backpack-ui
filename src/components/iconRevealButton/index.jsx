import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontSizeHeading7,
  fontSizeUppercase,
  lineHeightReset,
} from "../../styles/typography";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    color: colors.textPrimary,
    display: "flex",
    flexDirection: "column",
    fontSize: `${fontSizeHeading7}px`,
    justifyContent: "center",
    lineHeight: lineHeightReset,
    textAlign: "center",

    ":focus": outline(4),
  },

  icon: {
    transition: `color ${timing.fast} ease-in-out,
      transform ${timing.fast} ease-in-out`,
  },

  label: {
    fontSize: `${fontSizeUppercase}px`,
    opacity: 0,
    transition: `opacity ${timing.fast} ease-in-out,
      visibility ${timing.fast} ease-in-out`,
    visibility: "hidden",
  },
};

const IconRevealButton = ({
  onClick,
  icon,
  label,
  id,
  className,
  style,
  qaHook,
}) => (
  <button
    id={id}
    className={cn("IconRevealButton", className)}
    onClick={onClick}
    data-qa={qaHook ? createQAHook(label, cn("IconRevealButton", className), "btn") : null}
    style={[styles.container, style]}
  >
    <Style
      rules={{
        ".IconRevealButton:hover > svg": {
          transform: "translateY(-4px) !important",
          color: `${colors.accentGray} !important`,
        },
        ".IconRevealButton:active > svg": {
          transform: "translateY(-4px) !important",
          color: `${colors.accentGray} !important`,
        },
        ".IconRevealButton:focus > svg": {
          transform: "translateY(-4px) !important",
          color: `${colors.accentGray} !important`,
        },

        ".IconRevealButton:hover > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
        ".IconRevealButton:active > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
        ".IconRevealButton:focus > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
      }}
    />

    {React.cloneElement(icon, {
      style: {
        ...styles.icon,
        ...icon.style,
      },
    })}

    {label &&
      <span style={styles.label}>
        {label}
      </span>
    }
  </button>
);

IconRevealButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

IconRevealButton.defaultProps = {
  id: null,
  className: null,
  style: null,
  qaHook: false,
};

export default radium(IconRevealButton);
