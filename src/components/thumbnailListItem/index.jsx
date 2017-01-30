import React from "react";
import radium from "radium";
import { color, timing, typography } from "../../../settings.json";
import BulletDescription from "../bulletDescription";
import TextBubble from "../textBubble";
import Icon from "../icon";
import Heading from "../heading";

const iconFromString = (iconName, props) => React.createElement(Icon[iconName], {
  ariaHidden: true,
  className: "Icon",
  ...props,
});

const styles = {
  container: {
    display: "flex",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 20,
  },
  image: {
    flex: 1.2,
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
    paddingTop: 15,
    paddingBottom: 15,
    flex: 3,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    marginTop: 5,
  },
  descriptionIcon: {
    cursor: "pointer",
    transition: `transfrom ${timing.default} ease`,
    ":hover": {
      transform: "scale(1.3)",
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
  onDescriptionIconClick,
  textBubble,
  theme,
}) => (
  <div style={[styles.container, theme && styles[theme].container]}>
    <div style={[styles.image, { backgroundImage: `url(${imagePath})` }]}>
      <TextBubble style={styles.imageText}>
        {textBubble}
      </TextBubble>
    </div>
    <div className="ContentBody" style={styles.content}>
      <div className="Text">
        <BulletDescription description={description} />
        <Heading
          level={5}
          weight="thin"
          override={[styles.title, theme && styles[theme].title]}
        >
          {title}
        </Heading>
      </div>
      {descriptionIcon &&
        <div
          style={[styles.descriptionIcon, theme && styles[theme].descriptionIcon]}
          onClick={onDescriptionIconClick}
        >
          {iconFromString(descriptionIcon)}
        </div>
      }
    </div>
  </div>
);

ThumbnailListItem.propTypes = {
  title: React.PropTypes.string,
  imagePath: React.PropTypes.string,
  textBubble: React.PropTypes.string,
  description: React.PropTypes.arrayOf(React.PropTypes.string),
  descriptionIcon: React.PropTypes.string,
  onDescriptionIconClick: React.PropTypes.func,
  theme: React.PropTypes.string,
};

export default radium(ThumbnailListItem);
