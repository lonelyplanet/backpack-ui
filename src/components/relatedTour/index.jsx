import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { span } from "../../utils/grid";
import Bullet from "../bullet";
import Heading from "../heading";
import Price from "../price";

const styles = {
  base: {},

  elements: {
    image: {
      base: {
        display: "block",
        marginBottom: "32px",
        width: "100%",
      },
    },

    heading: {
      fontSize: "28px",
      lineHeight: 1,
    },

    content: {
      base: {
        position: "relative",
      },
    },

    details: {
      base: {
        color: colors.textPrimary,
        fontSize: "1.1rem",
        lineHeight: 1,
        textTransform: "uppercase",

        [`@media (max-width: ${mq.max[480]})`]: {
          display: "inline-block",
          color: colors.accentGray,
          marginTop: "14px",
          fontWeight: 600,
        },

        [`@media (min-width: ${mq.min[480]})`]: {
          marginTop: "1.4rem",
        },
      },

      list: {
        [`@media (max-width: ${mq.max[480]})`]: {
          display: "inline-block",
        },
      },

      item: {
        display: "inline-block",
      },

      bullet: {
        display: "inline-block",

        [`@media (min-width: ${mq.min[480]})`]: {
          display: "none",
        },
      },
    },
  },
};

function RelatedTour({
  title,
  slug,
  image,
  price,
  tripLength,
  destination,
  reviews,
  clickHandler,
}) {
  const Details = tripLength || destination || reviews ? (
    <div
      className="RelatedTour-details"
      style={styles.elements.details.base}
    >
      <span
        style={styles.elements.details.bullet}
      >
        <Bullet space="both" />
      </span>
      <ul style={styles.elements.details.list}>
        {tripLength &&
          <li style={styles.elements.details.item}>
            {tripLength}
            {(destination || reviews) && <Bullet space="both" /> }
          </li>
        }

        {destination &&
          <li style={styles.elements.details.item}>
            {destination}
            {reviews && <Bullet space="both" /> }
          </li>
        }

        {reviews &&
          <li style={styles.elements.details.item}>
            {reviews} reviews
          </li>
        }
      </ul>
    </div>
  ) : null;


  return (
    <div className="RelatedTour">
      <Style
        scopeSelector=".RelatedTour"
        rules={{
          ".Heading a": {
            color: "currentColor",
          },

          ".Price-amount": {
            color: colors.textPrimary,
            fontSize: "2.4rem !important",
          },

          mediaQueries: {
            [`(max-width: ${mq.max[480]})`]: {
              ".Price": {
                display: "block",
                marginTop: "20px",

              },

              ".Price-amount": {
                fontWeight: "300 !important",
                color: colors.accentRed,
              },
            },

            [`(min-width: ${mq.min[480]})`]: {
              ".Heading": {
                maxWidth: "50rem",
                width: "80%",
              },

              ".Price": {
                position: "absolute !important",
                right: 0,
                top: 0,
              },

              ".Price-amount": {
                color: colors.textPrimary,
                fontSize: "2.4rem",
              },
            },
          },
        }}
      />

      <a
        className="RelatedTour-image"
        style={styles.elements.image.base}
        href={slug}
        onClick={clickHandler}
        data-qa="related-tour-image-link"
      >
        <img
          src={image}
          alt=""
        />
      </a>

      <div
        className="RelatedTour-content clearfix"
        style={styles.elements.content.base}
      >
        <Heading
          level={3}
          size="medium"
          importance="high"
          weight="thick"
          truncate
          tracking="tight"
          override={styles.elements.heading}
        >
          <a href={slug} onClick={clickHandler}>
            {title}
          </a>
        </Heading>

        {Details}

        <Price
          amount={price.amount}
          currency={price.currency}
        />

      </div>
    </div>
  );
}

RelatedTour.propTypes = {
  /**
   * The name of the tour
   */
  title: PropTypes.string.isRequired,

  /**
   * The URL of the tour
   */
  slug: PropTypes.string.isRequired,

  /**
   * The image of the tour
   */
  image: PropTypes.string.isRequired,

  /**
   * The price of the tour, containing currency and amount
   */
  price: PropTypes.shape({
    currency: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,

  /**
   * The length of the trip, usually in days i.e., "14 days"
   */
  tripLength: PropTypes.string,

  /**
   * The main destination of the tour; can be something like "London to Ireland"
   */
  destination: PropTypes.string,

  /**
   * The number of reviews for the tour
   */
  reviews: PropTypes.number,

  /**
   * Callback for clicking on the tour
   */
  clickHandler: PropTypes.func,
};

RelatedTour.defaultProps = {
  title: "",
  slug: "",
  image: "",
  price: {},
  tripLength: "",
  destination: "",
  reviews: 0,
};

RelatedTour.styles = styles;

export default radium(RelatedTour);
