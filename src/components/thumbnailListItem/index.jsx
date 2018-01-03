import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontWeightRegular } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import iconFromString from "../../utils/icon";
import duration from "../../utils/time";
import BulletDescription from "../bulletDescription";
import CoverPhoto from "../coverPhoto";
import Heading from "../heading";
import Icon from "../icon";
import Link from "../link";
import TextBubble from "../textBubble";

const hoverStyles = {
  ".CoverPhoto": {
    transform: "scale(1.03) !important",
  },
};

const styles = {
  container: {
    display: "flex",
  },

  image: {
    flexShrink: 0,
    width: "116px",
  },

  imageAnchor: {
    backgroundColor: colors.bgOverlay,
    display: "block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },

  coverPhoto: {
    opacity: 0.88,
    transition: `transform ${timing.slow} ease-in-out`,
  },

  imageText: {
    bottom: "3px",
    fontSize: "11px",
    fontWeight: fontWeightRegular,
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
    color: colors.bgPrimary,
    fontFamily: font("miller"),
    fontSize: "12px",
    fontStyle: "italic",
    marginBottom: "5px",
  },

  descriptionIcon: {
    backgroundColor: "transparent",
    border: 0,
    color: colors.accentGray,
    cursor: "pointer",
    fontSize: "16px",
    padding: 0,
    transition: `color ${timing.default} ease-in-out`,

    ":hover": {
      color: rgba(colors.accentGray, 0.5),
    },

    ":active": {
      color: rgba(colors.accentGray, 0.5),
    },

    ":focus": {
      color: rgba(colors.accentGray, 0.5),
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
    <Style
      scopeSelector=".ListItem-thumbnail:hover"
      rules={hoverStyles}
    />

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
          style={styles.coverPhoto}
        />

        {typeof runtime === "number" &&
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
              (theme === "dark") && { color: colors.bgPrimary },
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
