import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const BookmarkButton = ({ onClick, marked, id, className, style }) => (
  <ListButton
    id={id}
    className={className}
    onClick={onClick}
    label="Save to list"
    icon={marked ? "BookmarkActive" : "Bookmark"}
    style={style}
  />
);

BookmarkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: propTypes.style,
};

BookmarkButton.defaultProps = {
  onClick: null,
  marked: false,
  id: null,
  className: null,
  style: null,
};

export default radium(BookmarkButton);
