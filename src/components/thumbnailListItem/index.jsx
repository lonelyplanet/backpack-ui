import React, { PropTypes } from "react";
import radium from "radium";
import { Link } from "react-router";
import { color, timing, typography, zIndex } from "../../../settings.json";
import font from "../../utils/font";
import { rgba } from "../../utils/color";
import { duration } from "../../utils/time";
import iconFromString from "../../utils/icon";
import BulletDescription from "../bulletDescription";
import TextBubble from "../textBubble";
import Heading from "../heading";
import Icon from "../icon";
import CoverPhoto from "../coverPhoto";

const styles = {
  container: {
    display: "flex",
  },

  image: {
    flex: 1,
    maxWidth: "116px",
  },

  imageAnchor: {
    display: "block",
    position: "relative",
    width: "100%",
  },

  imageText: {
    bottom: "3px",
    fontSize: "11px",
    fontWeight: typography.fontWeightMedium,
    position: "absolute",
    right: "3px",
    zIndex: zIndex.default,
  },

  content: {
    alignItems: "center",
    display: "flex",
    flex: 2,
    justifyContent: "space-between",
  },

  title: {
    fontSize: "16px",
    lineHeight: (19 / 16),
    marginTop: "4px",
  },

  textContainer: {
    marginRight: "5px",
    width: "100%",
  },

  textAnchor: {
    display: "block",
    paddingLeft: "15px",
    width: "100%",
  },

  status: {
    color: color.white,
    fontFamily: font("miller"),
    fontSize: "12px",
    fontStyle: "italic",
    marginBottom: "5px",
  },

  descriptionIcon: {
    backgroundColor: "transparent",
    border: 0,
    color: color.detailHeaderSmall,
    cursor: "pointer",
    fontSize: "16px",
    padding: 0,
    transition: `color ${timing.default} ease-in-out`,

    ":hover": {
      color: color.blue,
    },

    ":active": {
      color: color.blue,
    },

    ":focus": {
      color: color.blue,
    },
  },

  descriptionIconDark: {
    color: color.white,

    ":hover": {
      color: rgba(color.white, 0.5),
    },

    ":active": {
      color: rgba(color.white, 0.5),
    },

    ":focus": {
      color: rgba(color.white, 0.5),
    },
  },
};

const ThumbnailListItem = ({
  title,
  href,
  imagePath,
  description,
  descriptionIcon,
  descriptionIconLabel,
  onDescriptionIconClick,
  runtime,
  status,
  theme,
  style,
}) => (
  <div
    className="ListItem-thumbnail"
    style={[
      styles.container,
      theme === "dark" && { backgroundColor: "transparent" },
      style,
    ]}
  >
    <div style={styles.image}>
      <Link to={href} style={styles.imageAnchor}>
        <CoverPhoto
          src={imagePath}
          width={116}
          height={64}
        />

        {runtime &&
          <TextBubble style={styles.imageText}>
            {duration(runtime)}
          </TextBubble>
        }
      </Link>
    </div>

    <div style={styles.content}>
      <div style={styles.textContainer}>
        <Link to={href} style={styles.textAnchor}>
          {status &&
            <div style={styles.status}>
              {status}
            </div>
          }

          {description &&
            <BulletDescription description={description} />
          }

          <Heading
            level={5}
            weight="thin"
            override={[
              styles.title,
              (theme === "dark") && { color: color.white },
            ]}
          >
            {title}
          </Heading>
        </Link>
      </div>

      {descriptionIcon && onDescriptionIconClick &&
        <button
          style={[
            styles.descriptionIcon,
            theme === "dark" && styles.descriptionIconDark,
          ]}
          onClick={onDescriptionIconClick}
        >
          {iconFromString(descriptionIcon, { label: descriptionIconLabel })}
        </button>
      }
    </div>
  </div>
);

ThumbnailListItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  imagePath: PropTypes.string,
  runtime: PropTypes.number,
  description: PropTypes.arrayOf(PropTypes.string),
  descriptionIcon: PropTypes.oneOf(Object.keys(Icon)),
  descriptionIconLabel: PropTypes.string,
  onDescriptionIconClick: PropTypes.func,
  status: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

ThumbnailListItem.defaultProps = {
  theme: "light",
};

export default radium(ThumbnailListItem);
