import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import AuthorName from "../authorName";
import Avatar from "../avatar";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import propTypes from "../../utils/propTypes";
import { outline } from "../../utils/mixins";

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

const UserListAuthor = ({ children, imageSrc, href, style }) => (
  <a
    className="UserListAuthor"
    href={href}
    style={[styles.container, style]}
  >
    <Avatar
      src={imageSrc}
      size={24}
      alt=""
    />

    <AuthorName style={styles.authorName}>
      {children}
    </AuthorName>
  </a>
);

UserListAuthor.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(UserListAuthor);
