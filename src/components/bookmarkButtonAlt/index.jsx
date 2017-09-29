import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import { BookmarkAltActive, BookmarkAlt } from "../icon";
import propTypes from "../../utils/propTypes";
import IconRevealButton from "../iconRevealButton";


const BookmarkButtonAlt = ({ onClick, marked, id, className, style }) => (
  <IconRevealButton
    id={id}
    className={cn("BookmarkButtonAlt", className)}
    onClick={onClick}
    icon={marked ? <BookmarkAltActive /> : <BookmarkAlt />}
    style={style}
    label="Save"
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
