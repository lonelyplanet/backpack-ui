import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { rgb } from "../../utils/color";
import Heading from "../heading";
import MoreLink from "../moreLink";
import Price from "../price";

function calculateContentWidth(imageWidth) {
  return `${((630 - 60 - imageWidth - 30) / (630 - 60)) * 100}%`;
}

const styles = {
  container: {
    base: {
      backgroundColor: colors.bgPrimary,
      boxShadow: `0 0 20px rgba(${rgb(colors.shadowPrimary)}, .05)`,
      overflow: "hidden",

      [`@media (min-width: ${mq.min["600"]})`]: {
        padding: `${(30 / 630) * 100}%`,
      },
    },
  },

  content: {
    base: {
      [`@media (max-width: ${mq.max["600"]})`]: {
        padding: "25px",
      },

      [`@media (min-width: ${mq.min["600"]})`]: {
        float: "right",
      },
    },

    align: {
      center: {
        alignSelf: "center",
      },
    },

    type: {
      activity: {
        [`@media (min-width: ${mq.min["600"]})`]: {
          width: calculateContentWidth(300),
        },
      },
      book: {
        [`@media (min-width: ${mq.min["600"]})`]: {
          width: calculateContentWidth(80),
        },
      },
    },
  },

  heading: {
    base: {
      fontSize: "20px",
      lineHeight: (26 / 20),
    },
  },

  description: {
    base: {
      color: colors.textPrimary,
      fontSize: "14px",
      lineHeight: 1.5,
      marginTop: "1em",
      paddingRight: `${40 / 14}em`,
    },
  },

  image: {
    base: {
      [`@media (min-width: ${mq.min["600"]})`]: {
        float: "left",
        marginRight: `${(30 / 630) * 100}%`,
      },
    },

    type: {
      activity: {
        [`@media (min-width: ${mq.min["600"]})`]: {
          width: `${(300 / (630 - 60)) * 100}%`,
        },
      },

      book: {
        [`@media (min-width: ${mq.min["600"]})`]: {
          width: `${(80 / (630 - 60)) * 100}%`,
        },
      },
    },

    anchor: {
      display: "block",
    },

    img: {
      display: "block",
    },
  },

  category: {
    base: {
      color: colors.textSecondary,
      fontSize: "11px",
      lineHeight: 1,
      marginBottom: `${4 / 11}em`,
      textTransform: "uppercase",
    },
  },

  price: {
    base: {
      marginTop: "12px",
    },
  },

  moreLink: {
    base: {
      marginTop: "16px",
    },
  },
};

function Callout({ type, heading, slug, image, price, description, category, align }) {
  return (
    <div
      className="Callout"
      style={styles.container.base}
      data-type={type}
    >
      <div
        className="Callout-image"
        style={[
          styles.image.base,
          type && styles.image.type[type],
        ]}
      >
        <a href={slug} style={styles.image.anchor}>
          <img
            style={styles.image.img}
            src={image}
            alt=""
          />
        </a>
      </div>

      <div
        className="Callout-content"
        style={[
          styles.content.base,
          type && styles.content.type[type],
          align && styles.content.align[align],
        ]}
      >
        {category &&
          <div style={styles.category.base}>
            {category} {type}
          </div>
        }

        <Heading
          size="medium"
          weight="thick"
          override={styles.heading.base}
        >
          <a href={slug} style={{ color: "inherit" }}>
            {heading}
          </a>
        </Heading>

        {price && price.amount &&
          <div
            className="Callout-price"
            style={styles.price.base}
          >
            <Price
              amount={price.amount}
              currency={price.currency}
              thin
            />
          </div>
        }

        {description &&
          <p style={styles.description.base}>
            {description}
          </p>
        }

        <div
          className="Callout-moreLink"
          style={styles.moreLink.base}
        >
          <MoreLink
            href={slug}
            size="small"
            caps
          >
            Learn more
          </MoreLink>
        </div>
      </div>
    </div>
  );
}

Callout.propTypes = {
  type: PropTypes.oneOf([
    "activity",
    "book",
  ]).isRequired,

  heading: PropTypes.string.isRequired,

  slug: PropTypes.string.isRequired,

  image: PropTypes.string.isRequired,

  price: PropTypes.shape(Price.propTypes),

  description: PropTypes.string,

  category: PropTypes.string,

  align: PropTypes.oneOf([
    "",
    "center",
  ]),
};

Callout.defaultProps = {
  type: "",
  heading: "",
  slug: "",
  image: "",
  price: {},
  description: "",
  category: "",
  align: "",
};

Callout.styles = styles;

export default radium(Callout);
