import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeHeading6 } from "../../styles/typography";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import Avatar from "../avatar";

const styles = {
  anchor: {
    alignItems: "center",
    color: "inherit",
    display: "inline-flex",
    fontSize: `${fontSizeHeading6}px`,
    lineHeight: 1,
    textDecoration: "none",
    transition: `color ${timing.fast} ease-in-out`,

    ":hover": {
      color: colors.linkPrimary,
    },

    ":active": {
      color: colors.linkPrimary,
    },

    ":focus": Object.assign({}, {
      color: colors.linkPrimary,
    }, outline()),
  },

  username: {
    alignSelf: "flex-end",
    marginLeft: "16px",
    maxWidth: "136px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

const AvatarMarker = ({
  href,
  src,
  username,
  style,
  usernameStyle,
}) => (
  <a
    className="AvatarMarker"
    href={href}
    style={[styles.anchor, style]}
  >
    <Avatar
      src={src}
      size={24}
    />

    <span style={[styles.username, usernameStyle]}>
      {username}
    </span>
  </a>
);

AvatarMarker.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  style: propTypes.style,
  usernameStyle: propTypes.style,
};

AvatarMarker.defaultProps = {
  style: null,
  usernameStyle: null,
};

export default radium(AvatarMarker);
