import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const BookmarkButton = ({ onClick, marked, style }) => (
  <ListButton
    onClick={onClick}
    icon={marked ? "BookmarkActive" : "Bookmark"}
    style={style}
  />
);

BookmarkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  style: propTypes.style,
};

BookmarkButton.defaultProps = {
  onClick: null,
  marked: false,
  style: null,
};

export default radium(BookmarkButton);
