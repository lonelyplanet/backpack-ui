import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import { rgba } from "../../utils/color";
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

const NewsArticleAuthor = ({ name, title, absoluteTime, relativeTime, theme, style }) => (
  <div className="NewsArticleAuthor" style={style}>
    <div
      style={[
        styles.line,
        (theme === "dark") && { backgroundColor: rgba(color.white, 0.5) },
      ]}
    />

    <Author
      name={name}
      title={title}
      style={[
        styles.author,
        (theme === "dark") && { color: color.white },
      ]}
    />
    {relativeTime &&
      <Timestamp
        dateTime={absoluteTime}
        style={styles.timestamp}
      >
        {relativeTime}
      </Timestamp>
    }
  </div>
);

NewsArticleAuthor.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  absoluteTime: PropTypes.string,
  relativeTime: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  style: PropTypes.objectOf(PropTypes.object),
};

NewsArticleAuthor.defaultProps = {
  theme: "light",
};

export default radium(NewsArticleAuthor);
