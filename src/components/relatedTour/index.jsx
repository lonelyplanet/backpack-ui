import React from "react";
import radium, { Style } from "radium";
import { color, media } from "rizzo-next/sass/settings.json";
import Heading from "../heading";
import Price from "../price";
import Bullet from "../decoration/bullet";
import { gutter, span, percentage } from "../../utils/grid";

const styles = {
  base: {},

  elements: {
    image: {
      base: {
        display: "block",
        marginBottom: gutter("static"),
        width: "100%",
      },
    },

    content: {
      base: {
        position: "relative",
      },
    },

    details: {
      base: {
        color: color.text,
        fontSize: "1.1rem",
        lineHeight: 1,
        textTransform: "uppercase",

        [`@media (max-width: ${media.max["480"]})`]: {
          display: "inline-block",
        },

        [`@media (min-width: ${media.min["480"]})`]: {
          marginTop: ".7rem",
        },
      },

      list: {
        [`@media (max-width: ${media.max["480"]})`]: {
          display: "inline-block",
        },
      },

      item: {
        display: "inline-block",
      },

      bullet: {
        display: "inline-block",

        [`@media (min-width: ${media.min["480"]})`]: {
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
            color: color.red,
            fontSize: "1.1rem",
          },

          mediaQueries: {
            [`(max-width: ${media.max["480"]})`]: {
              ".Price": {
                display: "inline-block",
              },

              ".Price-amount": {
                fontWeight: 600,
              },
            },

            [`(min-width: ${media.min["480"]})`]: {
              ".Heading": {
                maxWidth: "50rem",
                width: percentage("50rem", span(6, "static")),
              },

              ".Price": {
                position: "absolute",
                right: 0,
                top: ".8rem",
              },

              ".Price-amount": {
                color: `${color.darkGray}`,
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
        >
          <a href={slug} onClick={clickHandler}>
            {title}
          </a>
        </Heading>

        <Price
          amount={price.amount}
          currency={price.currency}
        />

        {Details}
      </div>
    </div>
  );
}

RelatedTour.propTypes = {
  /**
   * The name of the tour
   */
  title: React.PropTypes.string.isRequired,

  /**
   * The URL of the tour
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * The image of the tour
   */
  image: React.PropTypes.string.isRequired,

  /**
   * The price of the tour, containing currency and amount
   */
  price: React.PropTypes.object.isRequired,

  /**
   * The length of the trip, usually in days i.e., "14 days"
   */
  tripLength: React.PropTypes.string,

  /**
   * The main destination of the tour; can be something like "London to Ireland"
   */
  destination: React.PropTypes.string,

  /**
   * The number of reviews for the tour
   */
  reviews: React.PropTypes.number,

  /**
   * Callback for clicking on the tour
   */
  clickHandler: React.PropTypes.func,
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
