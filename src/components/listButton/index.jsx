import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { fontSizeHeading5 } from "../../styles/typography";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";

const styles = {
  alignItems: "center",
  backgroundColor: colors.bgPrimary,
  border: 0,
  borderRadius: "50%",
  boxShadow: `rgba(0, 0, 0, 0.2) 0 ${4 / fontSizeHeading5}em ${16 / fontSizeHeading5}em`,
  color: colors.textPrimary,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: `${fontSizeHeading5}px`,
  height: `${(54 / fontSizeHeading5)}em`,
  justifyContent: "center",
  lineHeight: 1,
  padding: 0,
  transition: `box-shadow ${timing.fast} ease-in-out`,
  width: `${(54 / fontSizeHeading5)}em`,

  ":active": {
    boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSizeHeading5) / 3}em ${(16 / fontSizeHeading5) / 2}em`,
  },

  ":focus": Object.assign({}, {
    boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSizeHeading5) / 3}em ${(16 / fontSizeHeading5) / 2}em`,
  }, outline()),
};

const iconProps = {
  style: {
    display: "block",
  },
};

const ListButton = ({
  onClick,
  icon,
  label,
  owns,
  style,
}) => (
  <button
    className="ListButton"
    style={[styles, style]}
    onClick={onClick}
    title={label}
    aria-label={label}
    aria-owns={owns}
  >
    {iconFromString(icon, iconProps)}
  </button>
);

ListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOf([
    "Bookmark",
    "BookmarkActive",
    "Ellipsis",
  ]).isRequired,
  label: PropTypes.string,
  owns: PropTypes.string,
  style: propTypes.style,
};

ListButton.defaultProps = {
  label: null,
  owns: null,
  style: null,
};

export default radium(ListButton);
