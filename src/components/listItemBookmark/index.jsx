import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontWeightMedium,
  lineHeightHeading1,
} from "../../styles/typography";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import { Heading } from "../../components/text";
import AlbumThumbnailImage from "../albumThumbnailImage";
import CategoryLabel from "../categoryLabel";

const styles = {
  anchor: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    display: "flex",
    flexFlow: "row wrap",
    padding: "16px 16px 12px",
  },

  caption: {
    marginLeft: "16px",
  },

  name: {
    lineHeight: lineHeightHeading1,
    marginTop: "6px",
  },

  meta: {
    color: rgba(colors.textPrimary, 0.5),
    fontWeight: fontWeightMedium,
    margin: "6px 0 0",
  },
};

const ListItemBookmark = ({
  name,
  href,
  thumbnail,
  entries,
  visibility,
  style,
}) => (
  <a
    className="ListItemBookmark"
    href={href}
    style={[styles.anchor, style]}
  >
    <AlbumThumbnailImage
      src={thumbnail}
      alt={name}
    />

    <figcaption style={styles.caption}>
      <Heading
        level="2"
        size="7"
        weight="medium"
        style={styles.name}
      >
        {name}
      </Heading>

      <CategoryLabel style={styles.meta}>
        {visibility} • {entries.length} places
      </CategoryLabel>
    </figcaption>
  </a>
);

ListItemBookmark.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.oneOf(["private", "public"]).isRequired,
  style: propTypes.style,
};

ListItemBookmark.styles = styles;

export default radium(ListItemBookmark);
