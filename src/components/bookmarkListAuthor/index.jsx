import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import AuthorName from "../authorName";
import Avatar from "../avatar";

const styles = {
  container: {
    alignItems: "center",
    color: colors.textSecondary,
    display: "inline-flex",
    transition: `color ${timing.fast} ease-in-out`,

    ":hover": {
      color: colors.textPrimary,
    },

    ":active": {
      color: colors.textPrimary,
    },

    ":focus": Object.assign({}, {
      color: colors.textPrimary,
    }, outline()),
  },

  authorName: {
    color: "currentColor",
    marginLeft: "8px",
  },
};

const BookmarkListAuthor = ({ children, imageSrc, href, style, qahook }) => (
  <a
    className="BookmarkListAuthor"
    href={href}
    style={[styles.container, style]}
  >
    <Avatar
      src={imageSrc}
      size={24}
      alt=""
      qahook={qahook}
    />

    <AuthorName style={styles.authorName}>
      {children}
    </AuthorName>
  </a>
);

BookmarkListAuthor.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  style: propTypes.style,
  qahook: PropTypes.bool,
};

BookmarkListAuthor.defaultProps = {
  qahook: false,
};

export default radium(BookmarkListAuthor);
