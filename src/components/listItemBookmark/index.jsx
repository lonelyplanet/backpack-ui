import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeBodySmall,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeUppercase,
  fontWeightMedium,
  lineHeightBodySmall,
  lineHeightHeading6,
} from "../../styles/typography";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import { Heading } from "../../components/text";
import AlbumThumbnailImage from "../albumThumbnailImage";
import CheckboxComponent from "../checkbox";
import CategoryLabel from "../categoryLabel";

const styles = {
  container: {
    default: {
      alignItems: "center",
      backgroundColor: "transparent",
      display: "flex",
      paddingBottom: "16px",
      paddingTop: "16px",
      textAlign: "left",
      width: "100%",
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        paddingBottom: "24px",
        paddingTop: "24px",
      },
    },
  },

  thumbnail: {
    default: {
      alignSelf: "flex-start",
      flexShrink: 0,
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        fontSize: `${fontSizeHeading5}px`,
      },
    },
  },

  caption: {
    default: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "16px",
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        marginLeft: "32px",
      },
    },
  },

  name: {
    default: {
      display: "-webkit-box",
      maxHeight: "48px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: `color ${timing.fast}`,
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        fontSize: `${fontSizeHeading6}px`,
        lineHeight: lineHeightHeading6,
        maxHeight: "56px",
      },
    },
  },

  checkbox: {
    marginLeft: "auto",
  },

  meta: {
    default: {
      color: rgba(colors.textPrimary, 0.5),
      fontWeight: fontWeightMedium,
      lineHeight: (18 / fontSizeUppercase),
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        fontSize: `${fontSizeBodySmall}px`,
        lineHeight: lineHeightBodySmall,
      },
    },
  },
};

function ListItemBookmark({
  name,
  onClick,
  checked,
  thumbnail,
  entriesCount,
  visibility,
  addItem,
  large,
  hideDetail,
  style,
}) {
  const Element = onClick ? "button" : "div";

  return (
    <Element
      className="ListItemBookmark"
      name={name}
      onClick={onClick}
      style={[
        styles.container.default,
        large && styles.container.large,
        style,
      ]}
    >
      <AlbumThumbnailImage
        src={thumbnail}
        icon={addItem ? "Plus" : "List"}
        alt={name}
        style={[
          styles.thumbnail.default,
          large && styles.thumbnail.large,
        ]}
      />

      <div
        style={[
          styles.caption.default,
          large && styles.caption.large,
        ]}
      >
        <Heading
          level={2}
          size={7}
          weight="medium"
          style={[
            styles.name.default,
            large && styles.name.large,
          ]}
        >
          {name}
        </Heading>

        {!hideDetail &&
          <CategoryLabel
            style={[
              styles.meta.default,
              large && styles.meta.large,
            ]}
          >
            {visibility && `${visibility} · `}{entriesCount} place{entriesCount !== 1 && "s"}
          </CategoryLabel>
        }
      </div>

      {onClick && !addItem &&
        <CheckboxComponent
          id={name.toLowerCase().replace(" ", "-")}
          name={name.toLowerCase().replace(" ", "_")}
          value={null}
          key={name}
          checked={checked}
          size={24}
          style={styles.checkbox}
          rounded
        />
      }
    </Element>
  );
}

ListItemBookmark.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  entriesCount: PropTypes.number,
  visibility: PropTypes.oneOf(["Private", "Public"]),
  onClick: PropTypes.func,
  thumbnail: PropTypes.string,
  addItem: PropTypes.bool,
  large: PropTypes.bool,
  hideDetail: PropTypes.bool,
  style: propTypes.style,
};

ListItemBookmark.defaultProps = {
  checked: false,
  entriesCount: null,
  visibility: null,
  onClick: null,
  thumbnail: null,
  addItem: false,
  large: false,
  style: null,
};

export default radium(ListItemBookmark);
