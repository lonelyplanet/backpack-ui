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
import CategoryLabel from "../categoryLabel";
import Icon from "../icon";

const styles = {
  container: {
    alignItems: "center",
    background: 0,
    borderBottom: `1px solid ${colors.borderPrimary}`,
    display: "flex",
    flexFlow: "row wrap",
    paddingBottom: "16px",
    paddingTop: "16px",
    textAlign: "left",
    transition: `background-color ${timing.default} ease-in-out`,
    width: "100%",

    ":hover": {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
    },

    [`@media (min-width: ${mq.min["720"]})`]: {
      paddingBottom: "24px",
      paddingTop: "24px",
    },
  },

  thumbnail: {
    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: `${fontSizeHeading5}px`,
    },
  },

  caption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "16px",

    [`@media (min-width: ${mq.min["720"]})`]: {
      marginLeft: "32px",
    },
  },

  name: {
    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
      lineHeight: lineHeightHeading6,
    },
  },

  checkedName: {
    color: colors.linkPrimary,
  },

  checkbox: {
    border: `1px solid ${colors.borderPrimary}`,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    height: "24px",
    width: "24px",
  },

  checkedBox: {
    background: colors.linkPrimary,
    border: 0,
  },

  meta: {
    color: rgba(colors.textPrimary, 0.5),
    fontWeight: fontWeightMedium,
    lineHeight: (18 / fontSizeUppercase),

    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      lineHeight: lineHeightBodySmall,
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
  style,
}) {
  const Element = onClick ? "button" : "div";

  return (
    <Element
      className="ListItemBookmark"
      name={name}
      onClick={onClick}
      style={[styles.container, style]}
    >
      <AlbumThumbnailImage
        src={thumbnail}
        alt={name}
        style={styles.thumbnail}
      />

      <div style={styles.caption}>
        <Heading
          level="2"
          size="7"
          weight="medium"
          style={[styles.name, checked && styles.checkedName]}
        >
          {name}
        </Heading>

        <CategoryLabel style={styles.meta}>
          {visibility} • {entriesCount} places
        </CategoryLabel>
      </div>

      {onClick &&
        <div style={[styles.checkbox, checked && styles.checkedBox]}>
          {checked &&
            <Icon.Checkmark
              label="Bookmark"
              fill={colors.bgPrimary}
              width="11px"
            />
          }
        </div>
      }
    </Element>
  );
}

ListItemBookmark.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  entriesCount: PropTypes.number.isRequired,
  visibility: PropTypes.oneOf(["Private", "Public"]).isRequired,
  onClick: PropTypes.func,
  thumbnail: PropTypes.string,
  style: propTypes.style,
};

ListItemBookmark.defaultProps = {
  onClick: null,
  thumbnail: null,
  style: null,
};

export default radium(ListItemBookmark);
