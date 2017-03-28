import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import AuthorName from "../authorName";
import ItalicText from "../italicText";
import Timestamp from "../timestamp";

const styles = {
  line: {
    backgroundColor: colors.accentRed,
    content: "``",
    display: "block",
    height: "2px",
    width: "48px",
  },

  container: {
    alignItems: "baseline",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  author: {
    alignItems: "baseline",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: "17px",
  },

  authorName: {
    marginRight: "8px",
    marginTop: "10px",
  },

  italicText: {
    marginRight: "8px",
    marginTop: "8px",
  },

  timestamp: {
    display: "block",
    marginTop: "25px",
  },
};

const NewsArticleAuthor = ({
  name,
  title,
  absoluteTime,
  relativeTime,
  theme,
  style,
}) => (
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

    <div style={styles.container}>
      <div
        style={[
          styles.author,
          (theme === "dark") && {
            color: colors.bgPrimary,
          },
        ]}
      >
        <AuthorName style={styles.authorName}>
          {name}
        </AuthorName>

        <ItalicText style={styles.italicText}>
          {title}
        </ItalicText>
      </div>

      {relativeTime &&
        <Timestamp
          dateTime={absoluteTime}
          style={styles.timestamp}
        >
          {relativeTime}
        </Timestamp>
      }
    </div>
  </div>
);

NewsArticleAuthor.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  absoluteTime: PropTypes.string,
  relativeTime: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  style: propTypes.style,
};

NewsArticleAuthor.defaultProps = {
  theme: "light",
};

export default radium(NewsArticleAuthor);
