import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeAccent,
  fontSizeBodySmall,
  fontSizeBodyArticle,
  fontSizeUppercase,
  fontWeightMedium,
} from "../../styles/typography";
import mq from "../../styles/mq";
import font from "../../utils/font";
import PriceRangeLabel from "../priceRangeLabel";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";

const styles = {
  borderBottom: `1px solid ${colors.borderPrimary}`,
  padding: "16px",

  [`@media (min-width: ${mq.min["768"]})`]: {
    padding: "24px 0",
  },

  name: {
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
    },
  },

  category: {
    color: rgba(colors.textPrimary, 0.5),
    fontSize: `${fontSizeUppercase}px`,
    fontWeight: fontWeightMedium,
    letterSpacing: ".1px",
    marginBottom: "14px",
    textTransform: "uppercase",

    [`@media (min-width: ${mq.min["768"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      marginBottom: "12px",
    },
  },

  note: {
    fontFamily: font("miller"),
    fontSize: `${fontSizeAccent}px`,
    fontStyle: "italic",
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

const ListEntry = ({
  name,
  category,
  city,
  note,
  value,
  style,
}) => (
  <article
    className="ListEntry"
    style={[styles, style]}
  >
    <PriceRangeLabel
      value={value}
      style={styles.value}
    />

    <h2
      className="ListEntry"
      style={[styles.name, style]}
    >
      {name}
    </h2>

    <h3 style={styles.category}>
      {category} in {city}
    </h3>

    <p style={styles.note}>
      {note}
    </p>
  </article>
);

ListEntry.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.objectOf(PropTypes.array).isRequired,
  city: PropTypes.objectOf(PropTypes.array).isRequired,
  note: PropTypes.bool.isRequired,
  value: PropTypes.oneOf(["$", "$$", "$$$"]).isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

ListEntry.styles = styles;

export default radium(ListEntry);
