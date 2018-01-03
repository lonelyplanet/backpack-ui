import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeBodySmall } from "../../styles/typography";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  backgroundColor: "transparent",
  color: "currentColor",
  display: "block",
  fontSize: `${fontSizeBodySmall}px`,
  lineHeight: (26 / fontSizeBodySmall),
  padding: 0,
  textAlign: "left",
  transition: `color ${timing.fast} ease-in-out`,
  whiteSpace: "nowrap",
  width: "100%",

  ":hover": {
    color: colors.linkPrimary,
  },

  ":active": {
    color: colors.linkPrimary,
  },

  ":focus": Object.assign({}, {
    color: colors.linkPrimary,
  }, outline()),
};

const BookmarkListMenuOption = ({ children, onClick, style }) => (
  <button style={[styles, style]} onClick={onClick}>
    {children}
  </button>
);

BookmarkListMenuOption.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: propTypes.style,
};

BookmarkListMenuOption.defaultProps = {
  style: null,
};

export default radium(BookmarkListMenuOption);
