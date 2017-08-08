import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const Bookmark = ({ onClick, marked, style }) => (
  <ListButton
    onClick={onClick}
    icon={marked ? "BookmarkActive" : "Bookmark"}
    style={style}
  />
);

Bookmark.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  style: propTypes.style,
};

Bookmark.defaultProps = {
  onClick: null,
  marked: false,
  style: null,
};

export default radium(Bookmark);
