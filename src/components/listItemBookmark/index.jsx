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
      flexFlow: "row wrap",
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
      transition: `color ${timing.fast}`,
    },

    large: {
      [`@media (min-width: ${mq.min["720"]})`]: {
        fontSize: `${fontSizeHeading6}px`,
        lineHeight: lineHeightHeading6,
      },
    },
  },

  checkedName: {
    color: colors.linkPrimary,
  },

  checkbox: {
    alignSelf: "flex-start",
    marginLeft: "auto",
    marginTop: "23px",
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
            checked && styles.checkedName,
          ]}
        >
          {name}
        </Heading>

        {visibility &&
          <CategoryLabel
            style={[
              styles.meta.default,
              large && styles.meta.large,
            ]}
          >
            {visibility} · {entriesCount} place{entriesCount !== 1 && "s"}
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
