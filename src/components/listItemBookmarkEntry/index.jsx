import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeBodySmall,
  fontSizeBodyArticle,
  fontWeightMedium,
  lineHeightBodyArticle,
  lineHeightHeading6,
  lineHeightHeading7,
} from "../../styles/typography";
import mq from "../../styles/mq";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import PriceRangeLabel from "../priceRangeLabel";
import { Heading, TextAccent } from "../../components/text";
import CategoryLabel from "../categoryLabel";

const styles = {
  container: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    paddingBottom: "16px",
    paddingTop: "16px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      paddingBottom: "24px",
      paddingTop: "24px",
    },
  },

  name: {
    fontSize: `${fontSizeHeading7}px`,
    lineHeight: lineHeightHeading7,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
      lineHeight: lineHeightHeading6,
    },
  },

  category: {
    color: rgba(colors.textPrimary, 0.5),
    display: "block",
    fontWeight: fontWeightMedium,
    marginTop: "4px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      marginTop: "8px",
    },
  },

  anchor: {
    color: "inherit",
    transition: `color ${timing.fast} ease-in-out`,

    ":hover": {
      color: colors.linkPrimary,
    },

    ":active": {
      color: colors.linkPrimary,
    },

    ":focus": Object.assign({}, {
      color: colors.linkPrimary,
    }, outline()),
  },

  note: {
    letterSpacing: ".4px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodyArticle}px`,
      letterSpacing: 0,
      lineHeight: lineHeightBodyArticle,
    },
  },

  priceRange: {
    float: "right",
  },
};

const ListItemBookmarkEntry = ({
  name,
  category,
  city,
  url,
  priceRange,
  categoryUrl,
  cityUrl,
  note,
  style,
}) => (
  <article
    className="ListItemBookmarkEntry"
    style={[styles.container, style]}
  >
    <PriceRangeLabel
      value={priceRange}
      style={styles.priceRange}
    />

    <Heading
      level="2"
      size="5"
      weight="medium"
      style={styles.name}
    >
      <a
        key={name}
        style={styles.anchor}
        href={url}
      >
        {name}
      </a>
    </Heading>

    <CategoryLabel style={styles.category}>
      {categoryUrl ?
        <a
          key={category}
          style={styles.anchor}
          href={categoryUrl}
        >
          {category}
        </a> : category
      } in {cityUrl ?
        <a
          key={city}
          style={styles.anchor}
          href={cityUrl}
        >
          {city}
        </a> : city
      }
    </CategoryLabel>

    <TextAccent style={styles.note}>
      {note}
    </TextAccent>
  </article>
);

ListItemBookmarkEntry.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  priceRange: PropTypes.oneOf(["$", "$$", "$$$"]).isRequired,
  categoryUrl: PropTypes.string,
  cityUrl: PropTypes.string,
  note: PropTypes.string,
  style: propTypes.style,
};

export default radium(ListItemBookmarkEntry);
