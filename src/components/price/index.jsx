import React, { PropTypes } from "react";
import radium from "radium";
import { color, media } from "../../../settings.json";
import Bullet from "../bullet";

const styles = {
  container: {
    base: {
      lineHeight: 1,
      fontSize: "18px",
      position: "relative",
    },

    emphasized: {
      base: {
        fontSize: "36px",
      },

      parent: {
        listItem: {
          [`@media (max-width: ${media.max["768"]})`]: {
            fontSize: "22px",
          },
        },
      },
    },

    tag: {
      backgroundColor: color.red,
      color: color.white,
      display: "inline-block",
      fontSize: "12px",
      padding: `${6 / 12}em ${8 / 12}em ${4 / 12}em`,
      textAlign: "center",
      verticalAlign: "middle",
    },

    thin: {
      fontSize: "20px",
    },
  },

  amount: {
    base: {
      display: "inline-block",
      fontSize: "1em",
      lineHeight: 1,
    },

    emphasized: {
      color: color.red,
      fontWeight: 300,
    },

    tag: {
      fontWeight: 600,
    },

    thin: {
      fontWeight: 300,
    },
  },

  rate: {
    base: {
      fontSize: `${(14 / 36)}em`,
      fontWeight: 300,
      lineHeight: 1,
    },

    parent: {
      listItem: {
        [`@media (max-width: ${media.max["768"]})`]: {
          display: "inline-block",
          fontSize: "9px",
          fontWeight: 400,
          lineHeight: (16 / 9),
        },

        [`@media (min-width: ${media.min["768"]})`]: {
          marginTop: `${(3 / 14)}em`,
        },
      },

      booking: {
        bottom: "5px",
        display: "inline-block",
        position: "absolute",
        right: 0,
      },
    },
  },

  currencySymbol: {
    base: {},

    emphasized: {
      fontSize: `${(18 / 36) * 100}%`,
      position: "relative",
      top: "-.65em",
    },
  },

  bullet: {
    base: {
      [`@media (min-width: ${media.min["768"]})`]: {
        display: "none",
      },
    },
  },

  onSale: {
    container: {
      [`@media (max-width: ${media.max["768"]})`]: {
        paddingTop: "14px",
        textAlign: "center",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        borderLeft: `1px solid ${color.gray}`,
        float: "right",
        fontWeight: 400,
        padding: "2px 0 2px 14px",
        textAlign: "right",
      },
    },

    label: {
      color: color.footerCopyright,
      fontWeight: 400,
      marginBottom: "7px",
    },

    oldPrice: {
      color: color.footerCopyright,
      paddingTop: "4px",
    },
  },

  card: {
    salePrice: {
      color: color.subtitleGray,
      fontSize: "11px",
      marginBottom: "8px",
      marginLeft: "5px",
      textTransform: "uppercase",
    },

    crossThrough: {
      textDecoration: "line-through",
    },
  },
};

/**
 * A standalone price for an item
 */
function Price({
  amount,
  discountedAmount,
  rate,
  currency,
  emphasized,
  thin,
  tag,
  parent,
  poiType,
  style,
}) {
  const currencySymbol = {
    AUD: "$",
    EUR: "€",
    GBP: "£",
    USD: "$",
  };

  return (
    <div
      className="Price clearfix"
      style={[
        styles.container.base,
        emphasized && styles.container.emphasized.base,
        tag && styles.container.tag,
        parent && styles.container.emphasized.parent[parent],
        style,
      ]}
    >
      {parent === "booking" && poiType === "partnerActivity" &&
        (amount > 0 || discountedAmount > 0) &&
        <div
          style={[
            styles.rate.base,
            styles.onSale.label,
          ]}
        >
          From
        </div>
      }

      {parent === "card" && discountedAmount > 0 &&
        <div style={styles.card.salePrice}>
          was <span style={styles.card.crossThrough}>{currencySymbol[currency]}{discountedAmount ? Math.round(amount) : ""}</span>
        </div>
      }

      {(amount > 0 || discountedAmount > 0) &&
        <div
          className="Price-amount"
          style={[
            styles.amount.base,
            emphasized && styles.amount.emphasized,
            thin && styles.amount.thin,
            tag && styles.amount.tag,
          ]}
        >
          {emphasized &&
            <span
              className="Price-symbol"
              style={[
                styles.currencySymbol.base,
                emphasized && styles.currencySymbol.emphasized,
              ]}
            >
              {currencySymbol[currency]}
            </span>
          }

          {!emphasized &&
            `${currencySymbol[currency]}`
          }

          {discountedAmount ? Math.round(discountedAmount) : Math.round(amount)}
        </div>
      }

      {parent === "booking" && discountedAmount > 0 &&
        <div
          style={[
            styles.rate.base,
            styles.onSale.container,
          ]}
        >
          <div><strong>On sale</strong></div>
          <div style={styles.onSale.oldPrice}>
            Was – {currencySymbol[currency]}{discountedAmount ? Math.round(amount) : ""}
          </div>
        </div>
      }

      {rate &&
        <div
          className="Price-rate"
          style={[
            styles.rate.base,
            parent && styles.rate.parent[parent],
          ]}
        >
          {(amount > 0 || discountedAmount > 0) &&
            <span
              className="Price-bullet"
              style={styles.bullet.base}
              aria-hidden="true"
            >
              <Bullet space="both" color={color.gray} />
            </span>
          }

          {rate}
        </div>
      }
    </div>
  );
}

Price.propTypes = {
  /**
   * The price amount
   */
  amount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,

  /**
   * Discounted price amount
   */
  discountedAmount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * The rate for the price, i.e., "per night"
   */
  rate: PropTypes.string,

  /**
   * The currency in which the price is displayed in
   */
  currency: PropTypes.string,

  /**
   * Change the color to show emphasis
   */
  emphasized: PropTypes.bool,

  /**
   * Render the price with a thinner font weight and slightly larger size
   */
  thin: PropTypes.bool,

  /**
   * Render the price with a tag-like style
   */
  tag: PropTypes.bool,

  /**
   * Name of parent component in which Price renders in
   */
  parent: PropTypes.oneOf([
    "",
    "booking",
    "listItem",
    "card",
  ]),

  /**
   * Type of POI
   */
  poiType: PropTypes.oneOf([
    "",
    "poi",
    "hotel",
    "partnerActivity",
  ]),

  /**
   * Override styles
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Price.defaultProps = {
  amount: 0,

  discountedAmount: 0,

  rate: "",

  currency: "USD",

  emphasized: false,

  thin: false,

  tag: false,

  parent: "",

  poiType: "",
};

Price.styles = styles;

export default radium(Price);
