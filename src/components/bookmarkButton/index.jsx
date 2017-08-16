import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import mq from "../../styles/mq";
import { fontSizeBodyArticle } from "../../styles/typography";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const BookmarkButton = ({ onClick, marked, style }) => {
  const styles = {
    [`@media (min-width: ${mq.max["768"]})`]: {
      boxShadow: "none",
      display: "flex",
      fontSize: fontSizeBodyArticle,
      marginBottom: "40px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-21px",
      position: "relative",
      right: 0,
    },
  };

  return (
    <ListButton
      onClick={onClick}
      icon={marked ? "BookmarkActive" : "Bookmark"}
      style={[styles, style]}
    />
  );
};

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
