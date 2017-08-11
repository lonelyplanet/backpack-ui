import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontWeightMedium,
  lineHeightHeading1,
} from "../../styles/typography";
import colors from "../../styles/colors";
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
    padding: "16px",
    textAlign: "left",
    transition: `background ${timing.default}`,
    width: "100%",

    ":hover": {
      background: rgba(colors.bgOverlay, 0.05),
    },
  },

  caption: {
    marginLeft: "16px",
  },

  name: {
    lineHeight: lineHeightHeading1,
    marginTop: "6px",
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
    marginTop: "6px",
  },
};

function ListItemBookmark({
  name,
  href,
  onClick,
  checked,
  thumbnail,
  entriesCount,
  visibility,
  style,
}) {
  const Element = onClick ? "button" : "a";

  return (
    <Element
      className="ListItemBookmark"
      name={name}
      onClick={onClick}
      href={href}
      style={[styles.container, style]}
    >
      <AlbumThumbnailImage
        src={thumbnail}
        alt={name}
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
  href: PropTypes.string,
  onClick: PropTypes.func,
  thumbnail: PropTypes.string,
  style: propTypes.style,
};

ListItemBookmark.defaultProps = {
  href: null,
  onClick: null,
  thumbnail: null,
  style: null,
};

export default radium(ListItemBookmark);
