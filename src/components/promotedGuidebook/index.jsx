import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import { span, gutter } from "../../utils/grid";
import Heading from "../heading";
import MoreLink from "../moreLink";

const styles = {
  container: {
    color: colors.textPrimary,
    boxShadow: `0 3px 29px 0 rgba(${rgb(colors.shadowPrimary)}, .08)`,
    display: "flex",
    fontFamily: font("benton"),
    maxWidth: span(6, "static"),
    padding: gutter("static", 12, 0.5),
    textDecoration: "none",

    [`@media (min-width: ${mq.min[600]})`]: {
      padding: "28px 34px",
    },
  },

  image: {
    alignSelf: "flex-start",
    display: "block",
    width: "64px",

    [`@media (min-width: ${mq.min[600]})`]: {
      width: "124px",
    },
  },

  content: {
    maxWidth: "220px",
    marginLeft: gutter("static", 12, 0.5),
    marginRight: gutter("static", 12, 0.5),

    [`@media (min-width: ${mq.min[480]})`]: {
      maxWidth: "360px",
    },

    [`@media (min-width: ${mq.min[600]})`]: {
      marginLeft: gutter("static"),
      marginRight: gutter("static"),
    },

    [`@media (min-width: ${mq.min[720]})`]: {
      maxWidth: "none",
    },
  },

  heading: {
    fontSize: "18px",
    lineHeight: (22 / 18),
    marginTop: "2px",

    [`@media (min-width: ${mq.min[600]})`]: {
      fontSize: "20px",
      lineHeight: (24 / 20),
      margintop: "15px",
    },
  },

  price: {
    fontSize: "14px",
    lineHeight: 1,
    marginTop: "7px",

    [`@media (min-width: ${mq.min[600]})`]: {
      fontSize: "16px",
    },
  },

  description: {
    fontSize: "12px",
    lineHeight: (20 / 12),
    marginBottom: "16px",
    marginTop: "12px",

    [`@media (min-width: ${mq.min[600]})`]: {
      fontSize: "14px",
      lineHeight: (22 / 14),
      marginBottom: "21px",
      marginTop: "17px",
    },
  },

  moreLink: {
    [`@media (max-width: ${mq.max[600]})`]: {
      fontSize: "11px",
    },
  },
};

const PromotedGuidebook = ({ title, url, imageUrl, price, description }) => (
  <a
    className="PromotedGuidebook"
    href={url}
    style={styles.container}
    data-qa="promoted-guidebook-link"
  >
    <img
      style={styles.image}
      src={imageUrl}
      alt=""
    />

    <div style={styles.content}>
      <Heading
        level={4}
        weight="thick"
        tracking="tight"
        override={styles.heading}
      >
        {title}
      </Heading>

      <div style={styles.price}>
        ${price.usd}
      </div>

      <p style={styles.description}>
        {description}
      </p>

      <MoreLink isNested caps style={styles.moreLink}>
        Visit Shop
      </MoreLink>
    </div>
  </a>
);

PromotedGuidebook.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

PromotedGuidebook.defaultProps = {
  title: null,
  url: null,
  imageUrl: null,
  price: null,
  description: null,
};

export default radium(PromotedGuidebook);
