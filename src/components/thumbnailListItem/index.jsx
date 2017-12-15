import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Link from "../link";
import { color } from "../../../settings.json";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontWeightMedium,
  fontSizeUppercase,
  fontSizeHeading7,
  lineHeightHeading7,
  fontSizeHeading8,
  lineHeightHeading8,
} from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import font from "../../utils/font";
import { rgba } from "../../utils/color";
import duration from "../../utils/time";
import iconFromString from "../../utils/icon";
import Icon from "../icon";
import BulletDescription from "../bulletDescription";
import TextBubble from "../textBubble";
import Heading from "../heading";
import CoverPhoto from "../coverPhoto";
import propTypes from "../../utils/propTypes";

const hoverStyles = {
  default: {
    ".CoverPhoto": {
      transform: "scale(1.03) !important",
    },
  },
  light: {
    ".Heading": {
      color: `${color.blue} !important`,
    },
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
    backgroundColor: color.black,
    display: "block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },

  coverPhoto: {
    transition: `transform ${timing.slow} ease-in-out`,
  },

  iconContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.textOverlay,
    fontSize: "20px",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    transition: `opacity ${timing.default} ease`,
  },

  imageText: {
    bottom: "3px",
    fontSize: fontSizeUppercase,
    fontWeight: fontWeightMedium,
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
    default: {
      display: "-webkit-box",
      fontSize: fontSizeHeading7,
      lineHeight: lineHeightHeading7,
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      transition: `color ${timing.default} ease`,
    },
    lineClamp: {
      WebkitLineClamp: 1,
    },
    light: {
      color: colors.textPrimary,
    },
    dark: {
      color: colors.textOverlay,
    },
  },

  textContainer: {
    marginRight: "16px",
    width: "100%",
  },

  textAnchor: {
    display: "block",
    paddingLeft: "16px",
    width: "100%",
  },

  status: {
    default: {
      color: color.white,
      fontFamily: font("miller"),
      fontSize: fontSizeHeading8,
      lineHeight: lineHeightHeading8,
      fontStyle: "italic",
    },
    light: {
      color: colors.textPrimary,
    },
    dark: {
      color: colors.textOverlay,
    },
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
  subtitle,
  href,
  onClick,
  imagePath,
  imageIcon,
  imageIconLabel,
  description,
  descriptionIcon,
  descriptionIconLabel,
  onDescriptionIconClick,
  runtime,
  status,
  lineClamp,
  theme,
  style,
}) => (
  <div
    className={`ListItem-thumbnail ListItem-thumbnail--${theme}`}
    style={[
      styles.container,
      style,
    ]}
  >
    <Style
      scopeSelector=".ListItem-thumbnail:hover"
      rules={hoverStyles.default}
    />

    <Style
      scopeSelector=".ListItem-thumbnail--light:hover"
      rules={hoverStyles.light}
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

        <div
          style={[
            styles.iconContainer,
            { opacity: imageIcon ? 1 : 0 },
          ]}
        >
          {imageIcon && iconFromString(imageIcon, { label: imageIconLabel })}
        </div>

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
            <div
              style={[
                styles.status.default,
                styles.status[theme],
              ]}
            >
              {status}
            </div>
          }

          {description &&
            <BulletDescription description={description} />
          }

          <Heading
            level={5}
            weight="thin"
            override={{
              ...styles.title.default,
              ...styles.title[theme],
              ...(lineClamp ? styles.title.lineClamp : {}),
            }}
          >
            {title}
          </Heading>

          {subtitle &&
            <BulletDescription description={subtitle} />
          }
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
  subtitle: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string,
  onClick: PropTypes.func,
  imagePath: PropTypes.string,
  imageIcon: PropTypes.oneOf(Object.keys(Icon)),
  imageIconLabel: PropTypes.string,
  runtime: PropTypes.number,
  description: PropTypes.arrayOf(PropTypes.string),
  descriptionIcon: PropTypes.oneOf(Object.keys(Icon)),
  descriptionIconLabel: PropTypes.string,
  onDescriptionIconClick: PropTypes.func,
  status: PropTypes.string,
  lineClamp: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark"]),
  style: propTypes.style,
};

ThumbnailListItem.defaultProps = {
  theme: "light",
  lineClamp: true,
};

export default radium(ThumbnailListItem);
