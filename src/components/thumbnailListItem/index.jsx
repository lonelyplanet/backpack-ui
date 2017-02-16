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
    flexShrink: 0,
    width: "116px",
  },

  imageAnchor: {
    backgroundColor: color.black,
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
    flexGrow: 1,
    justifyContent: "space-between",
  },

  title: {
    display: "-webkit-box",
    fontSize: "16px",
    lineHeight: (19 / 16),
    marginTop: "4px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
  },

  textContainer: {
    marginRight: "16px",
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
      color: rgba(color.detailHeaderSmall, 0.5),
    },

    ":active": {
      color: rgba(color.detailHeaderSmall, 0.5),
    },

    ":focus": {
      color: rgba(color.detailHeaderSmall, 0.5),
    },
  },
};

const ThumbnailListItem = ({
  title,
  href,
  onClick,
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
      <Link
        to={href}
        onClick={onClick}
        style={styles.imageAnchor}
      >
        <CoverPhoto
          src={imagePath}
          width={116}
          height={64}
          style={{ opacity: 0.88 }}
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
        <Link
          to={href}
          onClick={onClick}
          style={styles.textAnchor}
        >
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
          style={styles.descriptionIcon}
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
  onClick: PropTypes.func,
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
