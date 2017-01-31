import React, { PropTypes } from "react";
import radium from "radium";

import { color, timing, typography } from "../../../settings.json";
import iconFromString from "../../utils/icon";

import BulletDescription from "../bulletDescription";
import TextBubble from "../textBubble";
import Heading from "../heading";
import Icon from "../icon";

const styles = {
  container: {
    display: "flex",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 20,
  },
  image: {
    flex: 1,
    maxWidth: 130,
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 13,
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imageText: {
    marginRight: 3,
    marginBottom: 3,
    fontSize: 11,
    fontWeight: typography.fontWeightMedium,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    flex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    marginTop: 5,
    lineHeight: 1.2,
  },
  textContainer: {
    marginRight: 5,
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
  },

  // themes
  dark: {
    container: {
      background: color.black,
    },
    title: {
      color: color.white,
    },
    descriptionIcon: {
      color: color.white,
    },
  },
};


const ThumbnailListItem = ({
  title,
  imagePath,
  description,
  descriptionIcon,
  descriptionIconLabel,
  onDescriptionIconClick,
  textBubble,
  theme,
}) => (
  <div style={[styles.container, theme && styles[theme].container]}>
    <div style={[styles.image, { backgroundImage: `url(${imagePath})` }]}>
      {textBubble &&
        <TextBubble style={styles.imageText}>
          {textBubble}
        </TextBubble>
      }
    </div>
    <div style={styles.content}>
      <div style={styles.textContainer}>
        <BulletDescription description={description} />
        <Heading
          level={5}
          weight="thin"
          override={[styles.title, theme && styles[theme].title]}
        >
          {title}
        </Heading>
      </div>
      {descriptionIcon && onDescriptionIconClick &&
        <button
          style={[styles.descriptionIcon, theme && styles[theme].descriptionIcon]}
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
  imagePath: PropTypes.string,
  textBubble: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  descriptionIcon: PropTypes.oneOf(Object.keys(Icon)),
  descriptionIconLabel: PropTypes.string,
  onDescriptionIconClick: PropTypes.func,
  theme: PropTypes.string,
};

export default radium(ThumbnailListItem);
