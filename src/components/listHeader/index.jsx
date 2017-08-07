import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeBodySmall,
  fontSizeUppercase,
  fontWeightMedium,
  fontWeightRegular,
  lineHeightHeading3,
} from "../../styles/typography";
import mq from "../../styles/mq";
import font from "../../utils/font";
import AvatarMarker from "../avatarMarker";

const styles = {
  header: {
    display: "flex",
    flexFlow: "column wrap",
    padding: "32px 16px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      flexFlow: "row wrap",
      fontSize: `${(fontSizeHeading5 + 2)}px`,
      padding: 0,
    },
  },

  avatarMarker: {
    fontSize: `${fontSizeUppercase}px`,
    fontWeight: fontWeightMedium,
    marginBottom: "16px",
    order: 1,
    textTransform: "uppercase",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      marginBottom: 0,
      order: 3,
    },

    username: {
      alignSelf: "center",
    },
  },

  title: {
    fontWeight: fontWeightMedium,
    letterSpacing: ".9px",
    lineHeight: lineHeightHeading3,
    marginBottom: "6px",
    order: 2,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontWeight: fontWeightRegular,
      letterSpacing: ".6px",
      marginBottom: 0,
      width: "100%",
    },
  },

  meta: {
    fontFamily: font("miller"),
    fontSize: `${fontSizeHeading7}px`,
    fontStyle: "italic",
    letterSpacing: ".3px",
    marginRight: "24px",
    order: 2,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
      letterSpacing: 0,
    },
  },
};

const ListHeader = ({
  profileHref,
  avatarSrc,
  username,
  title,
  items,
  isPublic,
  style,
}) => {
  const privacy = isPublic ? "Public" : "Private";

  return (
    <header
      className="ListHeader"
      style={[styles.header, style]}
    >
      <AvatarMarker
        profileHref={profileHref}
        avatarSrc={avatarSrc}
        username={username}
        style={styles.avatarMarker}
      />

      <h2
        style={styles.title}
      >
        {title}
      </h2>

      <p
        style={styles.meta}
      >{items.length} places • {privacy}</p>
    </header>
  );
};

ListHeader.propTypes = {
  profileHref: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.objectOf(PropTypes.array).isRequired,
  isPublic: PropTypes.bool.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

ListHeader.styles = styles;

export default radium(ListHeader);
