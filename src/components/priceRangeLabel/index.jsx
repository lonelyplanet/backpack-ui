import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import {
  fontSizeHeading8,
  fontSizeBodySmall,
  fontWeightMedium,
  lineHeightReset,
} from "../../styles/typography";
import mq from "../../styles/mq";
import { visuallyHidden } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    color: colors.accentGray,
    display: "inline-block",
    fontSize: `${fontSizeHeading8}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightReset,
    opacity: 0.5,

    [`@media (min-width: ${mq.min[768]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
    },
  },

  activeSymbol: {
    color: colors.textPrimary,
  },

  label: visuallyHidden(),
};

const definitions = {
  $$$: "Top-end",
  $$: "Mid-range",
  $: "Budget",
};

const PriceRangeLabel = ({ value, style }) => (
  <span
    className="PriceRangeLabel"
    style={[styles.container, style]}
    title={`${definitions[value]} price`}
    aria-label={`${definitions[value]} price`}
  >
    {["$", "$", "$"].map((symbol, index) => (
      <span
        style={index <= (value.length - 1) ? styles.activeSymbol : {}}
        aria-hidden="true"
        key={index}
      >
        {symbol}
      </span>
    ))}

    <span style={styles.label}>
      {`${definitions[value]} price`}
    </span>
  </span>
);

PriceRangeLabel.propTypes = {
  value: PropTypes.oneOf(["$", "$$", "$$$"]).isRequired,
  style: propTypes.style,
};

export default radium(PriceRangeLabel);
