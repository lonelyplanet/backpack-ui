import React, { PropTypes } from "react";
import radium from "radium";
import Avatar from "../avatar";
import LocationLabel from "../locationLabel";
import { color } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  container: {
    textAlign: "center",
  },

  name: {
    color: color.darkGray,
    fontFamily: font("benton"),
    fontSize: "17px",
    fontWeight: 500,
    lineHeight: 1,
    marginTop: "17px",
  },

  subtitle: {
    color: color.titleGray,
    fontFamily: font("miller"),
    fontSize: "16px",
    fontStyle: "italic",
    lineHeight: 1,
    marginTop: "12px",
  },

  location: {
    marginTop: "16px",
  },
};

const UserProfileHeader = ({ name, subtitle, avatarSrc, location, style }) => (
  <div className="UserProfileHeader" style={[styles.container, style]}>
    {avatarSrc &&
      <Avatar
        src={avatarSrc}
        alt={`Avatar for user ${name}`}
        size={70}
      />
    }

    <div style={styles.name}>
      {name}
    </div>

    {subtitle &&
      <div style={styles.subtitle}>
        {subtitle}
      </div>
    }

    {location &&
      <LocationLabel style={styles.location}>
        {location}
      </LocationLabel>
    }
  </div>
);

UserProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  avatarSrc: PropTypes.string,
  location: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(UserProfileHeader);
