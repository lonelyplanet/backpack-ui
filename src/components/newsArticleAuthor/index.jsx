import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import Author from "../author";
import Timestamp from "../timestamp";

const styles = {
  line: {
    backgroundColor: color.red,
    content: "``",
    display: "block",
    height: "2px",
    marginBottom: "27px",
    width: "48px",
  },

  author: {
    display: "block",
  },

  timestamp: {
    display: "block",
    marginTop: "25px",
  },
};

const NewsArticleAuthor = ({ name, title, absoluteTime, relativeTime, style }) => (
  <div className="NewsArticleAuthor" style={style}>
    <div style={styles.line} />

    <Author name={name} title={title} style={styles.author} />

    <Timestamp dateTime={absoluteTime} style={styles.timestamp}>
      {relativeTime}
    </Timestamp>
  </div>
);

NewsArticleAuthor.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  absoluteTime: PropTypes.string,
  relativeTime: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(NewsArticleAuthor);
