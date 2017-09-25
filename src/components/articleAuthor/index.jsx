import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Avatar from "../avatar";
import Author from "../author";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    textAlign: "center",
  },

  author: {
    vertical: {
      display: "block",
      marginTop: "18px",
    },

    horizontal: {
      marginLeft: "14px",
      verticalAlign: "middle",
    },
  },
};

const ArticleAuthor = ({ name, title, href, avatarSrc, orientation, style }) => (
  <div
    className="ArticleAuthor"
    style={[
      (orientation === "vertical") && styles.container,
      style,
    ]}
  >
    <Avatar
      src={avatarSrc}
      alt={`Avatar for user ${name}`}
      size={(orientation === "vertical") ? 80 : 40}
      href={href}
    />

    <Author
      name={name}
      title={title}
      alignment={(orientation === "vertical") ? "center" : "left"}
      style={[
        (orientation === "vertical") && styles.author.vertical,
        (orientation === "horizontal") && styles.author.horizontal,
      ]}
    />
  </div>
);

ArticleAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  avatarSrc: PropTypes.string,
  orientation: propTypes.origin,
  style: propTypes.style,
};

ArticleAuthor.defaultProps = {
  avatarSrc: "https://assets.staticlp.com/profiles/users/placeholders/large.png",
  orientation: "vertical",
};

export default radium(ArticleAuthor);
