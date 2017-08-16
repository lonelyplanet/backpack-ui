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
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import PriceRangeLabel from "../priceRangeLabel";
import { Heading, TextAccent } from "../../components/text";
import CategoryLabel from "../categoryLabel";

const styles = {
  container: {
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

  note: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      letterSpacing: ".4px",
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodyArticle}px`,
      lineHeight: lineHeightBodyArticle,
      marginTop: "16px",
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
  priceRange,
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
      {name}
    </Heading>

    <CategoryLabel style={styles.category}>
      {category} in {city}
    </CategoryLabel>

    {note &&
      <TextAccent style={styles.note}>
        {note}
      </TextAccent>
    }
  </article>
);

ListItemBookmarkEntry.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  priceRange: PropTypes.oneOf(["$", "$$", "$$$"]).isRequired,
  note: PropTypes.string,
  style: propTypes.style,
};

export default radium(ListItemBookmarkEntry);
