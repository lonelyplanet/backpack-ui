import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Avatar from "../avatar";
import colors from "../../styles/colors";
import { fontSizeHeading6 } from "../../styles/typography";
import timing from "../../styles/timing";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  anchor: {
    alignItems: "center",
    color: "inherit",
    display: "inline-flex",
    fontSize: fontSizeHeading6,
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

const AvatarMarker = ({ href, src, username, style }) => (
  <a
    className="AvatarMarker"
    href={href}
    style={[styles.anchor, style]}
  >
    <Avatar
      src={src}
      size={24}
    />

    <span style={[styles.username, style]}>
      {username}
    </span>
  </a>
);

AvatarMarker.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  style: propTypes.style,
};

AvatarMarker.defaultProps = {
  style: [],
};

export default radium(AvatarMarker);
