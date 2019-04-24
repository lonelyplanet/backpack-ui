import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeHeading5 } from "../../styles/typography";
import { rgba } from "../../utils/color";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

const styles = {
  alignItems: "center",
  backgroundColor: colors.bgPrimary,
  border: 0,
  borderRadius: "50%",
  boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${4 / fontSizeHeading5}em ${16 / fontSizeHeading5}em`,
  color: colors.textPrimary,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: `${fontSizeHeading5}px`,
  height: `${(54 / fontSizeHeading5)}em`,
  justifyContent: "center",
  lineHeight: 1,
  padding: 0,
  transition: `box-shadow ${timing.fast} ease-in-out,
    transform ${timing.fast} ease-in-out`,
  width: `${(54 / fontSizeHeading5)}em`,
  WebkitTapHighlightColor: rgba(colors.bgOverlay, 0.04),

  ":active": {
    boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSizeHeading5) / 3}em ${(16 / fontSizeHeading5) / 2}em`,
    transform: "translateY(1px)",
  },

  ":focus": outline(4),
};

const iconProps = {
  style: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const ListButton = ({
  onClick,
  icon,
  label,
  owns,
  id,
  className,
  style,
  qahook,
}) => (
  <button
    id={id}
    className={cn("ListButton", className)}
    style={[styles, style]}
    onClick={onClick}
    title={label}
    aria-label={label}
    aria-owns={owns}
    data-qa={qahook ? createQAHook(label, cn("ListButton", className), "btn") : null}
  >
    {iconFromString(icon, iconProps)}
  </button>
);

ListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOf([
    "Bookmark",
    "BookmarkActive",
    "BookmarkAlt",
    "BookmarkAltActive",
    "Ellipsis",
    "Map",
  ]).isRequired,
  label: PropTypes.string,
  owns: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: propTypes.style,
  qahook: PropTypes.bool,
};

ListButton.defaultProps = {
  label: null,
  owns: null,
  id: null,
  className: null,
  style: null,
  qahook: false,
};

export default radium(ListButton);
