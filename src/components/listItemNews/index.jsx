import React, { PropTypes } from "react";
import radium from "radium";
import { color, media } from "../../../settings.json";
import font from "../../utils/font";
import Heading from "../heading";
import ListItemThumbnail from "../listItemThumbnail";

const styles = {
  container: {
    display: "flex",
    fontFamily: font("benton"),
    width: "100%",
  },

  anchor: {
    color: color.blue,
    textDecoration: "none",
  },

  textContainer: {
    flex: "3",
  },

  category: {
    color: color.blue,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "-0.1px",
    marginBottom: "4px",
    textTransform: "uppercase",
  },

  sponsored: {
    color: color.crusta,
  },

  heading: {
    fontSize: "16px",
    lineHeight: (24 / 16),
    paddingRight: "24px",

    [`@media (min-width: ${media.min["560"]})`]: {
      fontSize: "20px",
      lineHeight: 1.6,
    },
  },

  imageContainer: {
    display: "flex",
    flex: "1.5",
    justifyContent: "flex-end",
  },
};

const ListItemNews = ({
  title,
  link,
  thumbnail,
  category,
  categoryLink,
  isSponsored,
}) => (
  <div
    className="ListItemNews"
    style={styles.container}
  >
    <div style={styles.textContainer}>
      <div style={[styles.category, isSponsored && styles.sponsored]}>
        {isSponsored ? "Sponsored" :
          <a
            style={styles.anchor}
            href={categoryLink}
          >
            {category}
          </a>
        }
      </div>

      <Heading
        level={3}
        weight="thin"
        tracking="tight"
        override={styles.heading}
      >
        <a
          style={[styles.anchor, { color: "inherit" }]}
          href={link}
        >
          {title}
        </a>
      </Heading>
    </div>

    <div style={styles.imageContainer}>
      <a href={link} style={styles.imageAnchor}>
        <ListItemThumbnail
          src={thumbnail}
          alt={title}
        />
      </a>
    </div>
  </div>
);

ListItemNews.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  isSponsored: PropTypes.bool,
};

ListItemNews.defaultProps = {
  title: null,
  category: null,
  categoryLink: null,
  link: null,
  thumbnail: null,
  isSponsored: false,
};

export default radium(ListItemNews);
