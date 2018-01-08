import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import Link from "../link";
import Icon from "../icon";
import BulletDescription from "../bulletDescription";
import TextBubble from "../textBubble";
import Heading from "../heading";
import CoverPhoto from "../coverPhoto";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontWeightMedium,
  fontSizeUppercase,
  fontSizeHeading6,
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
import propTypes from "../../utils/propTypes";

const hoverStyles = {
  default: {
    ".CoverPhoto": {
      transform: "scale(1.03) !important",
    },
  },

  light: {
    ".Heading": {
      color: `${colors.linkPrimary} !important`,
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
    backgroundColor: colors.bgOverlay,
    display: "block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },

  coverPhoto: {
    transition: `transform ${timing.slow} ease-in-out`,
  },

  iconContainer: {
    alignItems: "center",
    backgroundColor: rgba(colors.bgOverlay, 0.15),
    color: colors.textOverlay,
    display: "flex",
    fontSize: `${fontSizeHeading6}px`,
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: 0,
    transition: `opacity ${timing.default} ease`,
    width: "100%",
  },

  imageText: {
    bottom: "3px",
    fontSize: `${fontSizeUppercase}px`,
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
      fontSize: `${fontSizeHeading7}px`,
      lineHeight: lineHeightHeading7,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: `color ${timing.default} ease`,
      WebkitBoxOrient: "vertical",
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
      color: colors.textOverlay,
      fontFamily: font("miller"),
      fontSize: `${fontSizeHeading8}px`,
      fontStyle: "italic",
      lineHeight: lineHeightHeading8,
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
    color: colors.accentGray,
    cursor: "pointer",
    fontSize: `${fontSizeHeading7}px`,
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
    className={cn("ListItem-thumbnail", theme && `ListItem-thumbnail--${theme}`)}
    style={[
      styles.container,
      style,
    ]}
  >
    <Style
      scopeSelector=".ListItem-thumbnail:hover"
      rules={hoverStyles.default}
    />

    {theme === "light" &&
      <Style
        scopeSelector=".ListItem-thumbnail--light:hover"
        rules={hoverStyles.light}
      />
    }

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
