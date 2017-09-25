import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import { BookmarkAltActive, BookmarkAlt } from "../icon";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeUppercase, lineHeightReset } from "../../styles/typography";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: lineHeightReset,
    textAlign: "center",

    ":focus": outline(4),
  },

  icon: {
    transition: `transform ${timing.fast} ease-in-out`,
  },

  iconInactive: {
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

const BookmarkButtonAlt = ({ onClick, marked, id, className, style }) => (
  <button
    id={id}
    className={cn("BookmarkButtonAlt", className)}
    onClick={onClick}
    style={[styles.container, style]}
  >
    <Style
      rules={{
        ".BookmarkButtonAlt:hover > svg": {
          transform: "translateY(-4px) !important",
        },
        ".BookmarkButtonAlt:active > svg": {
          transform: "translateY(-4px) !important",
        },
        ".BookmarkButtonAlt:focus > svg": {
          transform: "translateY(-4px) !important",
        },

        ".BookmarkButtonAlt:hover > svg.inactive": {
          color: `${colors.accentGray} !important`,
        },
        ".BookmarkButtonAlt:active > svg.inactive": {
          color: `${colors.accentGray} !important`,
        },
        ".BookmarkButtonAlt:focus > svg.inactive": {
          color: `${colors.accentGray} !important`,
        },

        ".BookmarkButtonAlt:hover > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
        ".BookmarkButtonAlt:active > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
        ".BookmarkButtonAlt:focus > span": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
      }}
    />

    {marked ?
      <BookmarkAltActive
        style={styles.icon}
      /> :
      <BookmarkAlt
        className="inactive"
        style={styles.iconInactive}
      />
    }

    <span style={styles.label}>
      Save
    </span>
  </button>
);

BookmarkButtonAlt.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: propTypes.style,
};

BookmarkButtonAlt.defaultProps = {
  onClick: null,
  marked: false,
  id: null,
  className: null,
  style: null,
};

export default radium(BookmarkButtonAlt);
