import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import font from "../../utils/font";
import Heading from "../heading";
import ListItemThumbnail from "../listItemThumbnail";
import createQAHook from "../../utils/createQAHook";

const styles = {
  container: {
    display: "flex",
    fontFamily: font("benton"),
    width: "100%",
  },

  anchor: {
    color: colors.linkPrimary,
    textDecoration: "none",
  },

  textContainer: {
    flex: "3",
  },

  category: {
    color: colors.linkPrimary,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "-0.1px",
    marginBottom: "4px",
    textTransform: "uppercase",
  },

  sponsored: {
    color: colors.accentOrange,
  },

  heading: {
    default: {
      paddingRight: "24px",
    },

    size: {
      small: {
        fontSize: "16px",
        lineHeight: (24 / 16),
      },
      medium: {
        fontSize: "16px",
        lineHeight: (24 / 16),

        [`@media (min-width: ${mq.min[560]})`]: {
          fontSize: "20px",
          lineHeight: 1.6,
        },
      },
    },
  },

  imageContainer: {
    default: {
      display: "flex",
      flex: "1.5",
      justifyContent: "flex-end",
    },

    size: {
      small: {
        maxWidth: "80px",
      },
      medium: {
        maxWidth: "110px",
      },
    },
  },
};

const ListItemNews = ({
  title,
  category,
  categoryLink,
  link,
  thumbnail,
  isSponsored,
  size,
}) => (
  <div
    className="ListItemNews"
    style={styles.container}
  >
    <div style={styles.textContainer}>
      <div style={[styles.category, isSponsored && styles.sponsored]}>
        {isSponsored ?
          "Sponsored" :
          <a
            data-qa="sponsored-link"
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
        override={[styles.heading.default, size && styles.heading.size[size]]}
      >
        <a
          data-qa={createQAHook(link, "heading", "link")}
          style={[styles.anchor, { color: "inherit" }]}
          href={link}
        >
          {title}
        </a>
      </Heading>
    </div>

    <div style={[styles.imageContainer.default, size && styles.imageContainer.size[size]]}>
      <a href={link} data-qa="list-item-thumbnail-link" style={styles.imageAnchor}>
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
  size: PropTypes.oneOf([
    "small",
    "medium",
  ]),
};

ListItemNews.defaultProps = {
  title: null,
  category: null,
  categoryLink: null,
  link: null,
  thumbnail: null,
  isSponsored: false,
  size: "medium",
};

export default radium(ListItemNews);
