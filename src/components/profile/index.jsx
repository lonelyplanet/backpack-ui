import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { gutter } from "../../utils/grid";
import font from "../../utils/font";

const styles = {
  base: {
    fontSize: "1.4rem",
    letterSpacing: ".01rem",
  },
  size: {},
  orientation: {
    vertical: {
      textAlign: "center",
    },
    horizontal: {
      display: "inline-block",
      marginTop: "2.4rem",
      overflow: "hidden",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginTop: gutter("static"),
      },
    },
  },
  type: {
    article: {
      [`@media (max-width: ${settings.media.max["600"]})`]: {
        marginTop: ".6rem",
      },
    },
    narrative: {
      marginTop: "1.5rem",
    },
  },

  element: {
    anchor: {
      base: {
        display: "inline-block",
      },
    },
    avatar: {
      base: {
        backgroundColor: settings.color.white,
        borderRadius: "100%",
        display: "inline-block",
        height: "4rem",
        maxWidth: "4rem",
        position: "relative",
        verticalAlign: "middle",
        width: "4rem",
      },
      size: {
        large: {
          [`@media (min-width: ${settings.media.min["600"]})`]: {
            height: "auto",
            maxWidth: "none",
            width: "8rem",
          },
        },
      },
      orientation: {
        horizontal: {
          float: "left",
          marginRight: "1.4rem",
        },
      },
      type: {
        author: {
          height: "auto",
          maxWidth: "4rem",
          width: "12vw",
        },
        navigation: {
          position: "relative",
          top: "-.4rem",
        },
        article: {
          [`@media (max-width: ${settings.media.max["600"]})`]: {
            display: "none",
          },
        },
      },
    },
    details: {
      base: {},
      size: {},
      orientation: {
        horizontal: {
          float: "left",
          marginTop: ".6rem",
        },
        vertical: {
          marginTop: "1.3rem",

          [`@media (min-width: ${settings.media.min["600"]})`]: {
            marginTop: "1.8rem",
          },
        },
      },
      type: {},
    },
    name: {
      base: {
        color: settings.color.titleGray,
        fontSize: "1.2rem",
        fontWeight: 600,
        lineHeight: 1,

        // not inline
        marginBottom: ".8rem",
        textTransform: "uppercase",

        // inline
        // display: "inline",
        // fontSize: "1.4rem",

        [`@media (min-width: ${settings.media.min["600"]})`]: {
          fontSize: "1.4rem",
        },
      },

      size: {
        small: {
          letterSpacing: ".06rem",

          // not inline
          marginBottom: ".5rem",

          [`@media (min-width: ${settings.media.min["600"]})`]: {
            fontSize: "1.2rem",
          },
        },
      },
      orientation: {},
      type: {
        article: {
          [`@media (max-width: ${settings.media.max["600"]})`]: {
            display: "inline",
            fontSize: "1.1rem",
          },
        },
      },
    },
    title: {
      base: {
        color: settings.color.lightText,
        fontSize: "1.4rem",
        lineHeight: 1,

        // not inline
        fontFamily: font("miller"),
        fontStyle: "italic",
        letterSpacing: 0,

        // inline
        // display: "inline",
        // fontFamily: settings.font.family.benton.join(", "),
        // fontSize: "1.2rem",
        // fontStyle: "normal",
        // letterSpacing: ".06rem",
      },
      size: {},
      orientation: {},
      type: {
        article: {
          [`@media (max-width: ${settings.media.max["600"]})`]: {
            display: "inline",
            fontSize: "1.1rem",
            marginLeft: "1.2rem",
          },
        },
      },
    },
    bio: {
      base: {
        marginTop: ".4rem",
        maxWidth: "40rem",
      },
    },
  },
};

/**
 * Intro narrative for POI
 */
function Profile({ name, title, avatar, profileUrl, size, orientation, type }) {
  const style = {
    base: [styles.base],
    anchor: [styles.element.anchor.base],
    avatar: [styles.element.avatar.base],
    details: [styles.element.details.base],
    name: [styles.element.name.base],
    title: [styles.element.title.base],
    bio: [styles.element.bio.base],
  };

  if (size) {
    style.base.push(styles.size[size]);
    style.avatar.push(styles.element.avatar.size[size]);
    style.details.push(styles.element.details.size[size]);
    style.name.push(styles.element.name.size[size]);
    style.title.push(styles.element.title.size[size]);
  }

  if (orientation) {
    style.base.push(styles.orientation[orientation]);
    style.avatar.push(styles.element.avatar.orientation[orientation]);
    style.details.push(styles.element.details.orientation[orientation]);
    style.name.push(styles.element.name.orientation[orientation]);
    style.title.push(styles.element.title.orientation[orientation]);
  }

  if (type) {
    style.base.push(styles.type[type]);
    style.avatar.push(styles.element.avatar.type[type]);
    style.details.push(styles.element.details.type[type]);
    style.name.push(styles.element.name.type[type]);
    style.title.push(styles.element.title.type[type]);
  }

  const ProfileAvatar = (
    <img
      className="Profile-avatar"
      style={style.avatar}
      src={avatar}
      alt="Avatar"
    />
  );

  const AuthorDetails = (
    <div className="Profile-details" style={style.details}>
      <div className="Profile-name" style={style.name}>
        {name}
      </div>

      <div className="Profile-title" style={style.title}>
        {title}
      </div>
    </div>
  );

  if (profileUrl) {
    return (
      <div className="Profile" style={style.base}>
        <a style={style.anchor} href={profileUrl}>
          {ProfileAvatar}
          {AuthorDetails}
        </a>
      </div>
    );
  }

  return (
    <div className="Profile" style={style.base}>
      {ProfileAvatar}
      {AuthorDetails}
    </div>
  );
}

Profile.propTypes = {
  /**
   * Profile name
   */
  name: React.PropTypes.string.isRequired,

  /**
   * Profile title
   */
  title: React.PropTypes.string,

  /**
   * Profile avatar URL
   */
  avatar: React.PropTypes.string,

  /**
   * Profile profile URL
   */
  profileUrl: React.PropTypes.string,

  /**
   * Size of profile
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
    "large",
  ]),

  /**
   * Orientation of profile; how is it presented
   */
  orientation: React.PropTypes.oneOf([
    "",
    "horizontal",
    "vertical",
  ]),

  /**
   * A specific type of profile
   */
  type: React.PropTypes.oneOf([
    "",
    "article",
    "narrative",
    "navigation",
  ]),
};

Profile.defaultProps = {
  name: "",

  title: "",

  avatar: "//assets.staticlp.com/profiles/users/placeholders/large.png",

  profileUrl: "",

  size: "small",

  orientation: "horizontal",

  type: "",
};

Profile.styles = styles;

export default radium(Profile);
