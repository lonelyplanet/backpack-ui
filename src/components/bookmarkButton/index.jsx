import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import mq from "../../styles/mq";
import { fontSizeBodyArticle } from "../../styles/typography";
import ListButton from "../listButton";
import propTypes from "../../utils/propTypes";

const BookmarkButton = ({ onClick, marked, iconType, style }) => {
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

  const icons = {
    default: ["BookmarkActive", "Bookmark"],
    alternate: ["BookmarkAltActive", "BookmarkAlt"],
  };

  return (
    <ListButton
      onClick={onClick}
      icon={marked ? icons[iconType][0] : icons[iconType][1]}
      style={[styles, style]}
    />
  );
};

BookmarkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  iconType: PropTypes.oneOf(["default", "alternate"]),
  style: propTypes.style,
};

BookmarkButton.defaultProps = {
  onClick: null,
  marked: false,
  iconType: "default",
  style: null,
};

export default radium(BookmarkButton);
