import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { color } from "../../../settings.json";
import Icon from "../icon";

const styles = {
  backgroundColor: "transparent",
  border: 0,
  color: color.detailHeaderSmall,
  cursor: "pointer",
  display: "inline-block",
  fontSize: "17px",
  height: "1em",
  lineHeight: 1,
  padding: 0,
  width: "1em",

  ":focus": {
    outline: "1px lightgray dotted",
    outlineOffset: "2px",
  },
};

const iconProps = {
  label: "Bookmark",
  style: { display: "block" },
};

const Bookmark = ({ onClick, size, marked, style }) => (
  <button
    className="Bookmark"
    style={[
      styles,
      size === "large" && { fontSize: "24px" },
      style,
    ]}
    onClick={onClick}
  >
    {marked ? (
      <Icon.BookmarkActive {...iconProps} />
    ) : (
      <Icon.Bookmark {...iconProps} />
    )}
  </button>
);

Bookmark.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["", "large"]),
  marked: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.object),
};

Bookmark.defaultProps = {
  marked: false,
};

export default radium(Bookmark);
