import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Avatar from "../avatar";
import LocationLabel from "../locationLabel";
import Tag from "../tag";
import TagList from "../tagList";
import { Heading, TextBodySmall } from "../text";
import propTypes from "../../utils/propTypes";
import { span, gutter } from "../../utils/grid";

const ProfileHeader = ({
  name,
  intro,
  avatarSrc,
  location,
  interests,
  interestsLimit,
  alignment,
  style,
}) => (
  <div
    className="ProfileHeader"
    style={[
      (alignment === "center") && { textAlign: "center" },
      (alignment === "left" && {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        maxWidth: span(6, "static"),
      }),
      style,
    ]}
  >
    {avatarSrc &&
      <div
        className="ProfileHeader-avatar"
        style={[
          (alignment === "left") && {
            flexShrink: 0,
            marginLeft: gutter("static"),
            maxWidth: span(1, "static"),
          },
        ]}
      >
        <Avatar
          src={avatarSrc}
          alt={`Avatar for user ${name}`}
          size={80}
        />
      </div>
    }

    <div
      className="ProfileHeader-info"
      style={[
        (alignment === "center" && { marginTop: "23px" }),
        (alignment === "left" && { maxWidth: span(4, "static") }),
      ]}
    >
      {name &&
        <Heading level={1} size={4} weight="medium">
          {name}
        </Heading>
      }

      {location &&
        <LocationLabel style={{ marginTop: "5px" }}>
          {location}
        </LocationLabel>
      }

      {intro &&
        <TextBodySmall style={{ marginTop: "25px" }}>
          {intro}
        </TextBodySmall>
      }

      {interests && interests.length > 0 &&
        <TagList
          style={{ marginTop: "39px" }}
          limit={interestsLimit}
          rows={10}
        >
          {interests.map((interest) => (
            <Tag key={interest}>{interest}</Tag>
          ))}
        </TagList>
      }
    </div>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  avatarSrc: PropTypes.string,
  location: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string),
  interestsLimit: PropTypes.number,
  alignment: PropTypes.oneOf(["center", "left"]),
  style: propTypes.style,
};

ProfileHeader.defaultProps = {
  alignment: "center",
};

export default radium(ProfileHeader);
