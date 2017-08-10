import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeAccent,
  fontSizeBodySmall,
  fontSizeBodyArticle,
  fontWeightMedium,
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
    padding: "16px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      padding: "24px 0",
    },
  },

  name: {
    fontSize: `${fontSizeHeading7}px`,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
    },
  },

  category: {
    color: rgba(colors.textPrimary, 0.5),
    fontWeight: fontWeightMedium,
    marginBottom: "6px",
    marginTop: "6px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      marginBottom: "7px",
      marginTop: "7px",
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
    fontSize: `${fontSizeAccent}px`,
    letterSpacing: ".4px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodyArticle}px`,
      letterSpacing: 0,
    },
  },

  value: {
    float: "right",
  },
};

const ListItemBookmarkEntry = ({
  name,
  category,
  city,
  url,
  categoryUrl,
  cityUrl,
  note,
  value,
  style,
}) => (
  <article
    className="ListItemBookmarkEntry"
    style={[styles.container, style]}
  >
    <PriceRangeLabel
      value={value}
      style={styles.value}
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
  categoryUrl: PropTypes.string,
  cityUrl: PropTypes.string,
  note: PropTypes.string,
  value: PropTypes.oneOf(["$", "$$", "$$$"]).isRequired,
  style: propTypes.style,
};

export default radium(ListItemBookmarkEntry);
