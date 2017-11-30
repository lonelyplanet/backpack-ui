import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const BookmarkButtonAlt = ({ onClick, marked, id, className, style }) => (
  <ListButton
    id={id}
    className={cn("BookmarkButtonAlt", className)}
    onClick={onClick}
    label="Save to list"
    icon={marked ? "BookmarkAltActive" : "BookmarkAlt"}
    style={style}
  />
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
