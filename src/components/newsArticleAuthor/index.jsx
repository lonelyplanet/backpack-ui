import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import Author from "../author";
import Timestamp from "../timestamp";

const styles = {
  line: {
    backgroundColor: colors.accentRed,
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
  <div
    className="NewsArticleAuthor"
    style={style}
  >
    <div
      style={[
        styles.line,
        (theme === "dark") && {
          backgroundColor: rgba(colors.bgPrimary, 0.5),
        },
      ]}
    />

    <Author
      name={name}
      title={title}
      style={[
        styles.author,
        (theme === "dark") && {
          color: colors.bgPrimary,
        },
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
