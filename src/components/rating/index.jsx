import React from "react";
import radium from "radium";
import ProviderLogo from "../providerLogo";
import schema from "../../utils/schema";
import font from "../../utils/font";
import iconFromString from "../../utils/icon";

function Rating({ amount, max, description, provider, icon }) {
  const styles = {
    container: {
      base: {
        fontFamily: font("benton"),
        fontSize: "11px",
        lineHeight: 1.5,
      },
    },
  };

  const ratingMap = {
    0: "RatingZero",
    0.5: "RatingHalf",
    1: "RatingOne",
    1.5: "RatingOneHalf",
    2: "RatingTwo",
    2.5: "RatingTwoHalf",
    3: "RatingThree",
    3.5: "RatingThreeHalf",
    4: "RatingFour",
    4.5: "RatingFourHalf",
    5: "RatingFive",
  };

  const label = amount ? `${amount} rating` : "";

  const schemaProps = schema({
    itemProp: "aggregateRating",
    itemType: "AggregateRating",
  });

  const RatingIcon = iconFromString(ratingMap[amount], {
    height: "12px",
    label,
    width: "100px",
  });

  return (
    <div
      className="Rating"
      title={label}
      style={styles.container.base}
      {...schemaProps}
    >
      {amount && icon && ratingMap[amount] &&
        <meta itemProp="ratingValue" content={amount} />
      }

      {amount && icon && RatingIcon}

      {((amount && icon && !ratingMap[amount]) || (amount && !icon)) &&
        <div style={{ display: "inline-block" }}>
          {description && `${description} `}
          <span itemProp="ratingValue">{amount}</span>
          {max && ` out of ${max}`}
        </div>
      }

      {provider &&
        <ProviderLogo
          provider={provider}
          style={{
            float: "right",
            height: "21px",
            marginTop: "-4px",
          }}
        />
      }
    </div>
  );
}

Rating.propTypes = {
  /**
   * A numeric value, 0-5
   */
  amount: React.PropTypes.number,

  /**
   * A number that defines the maximum rating value
   */
  max: React.PropTypes.number,

  /**
   * A word that describes the rating, i.e., excellent, great, poor, etc.
   */
  description: React.PropTypes.string,

  /**
   * If the rating comes from a third-party
   */
  provider: React.PropTypes.oneOf([
    "",
    "bdc",
    "hostelworld",
    "opentable",
    "gadventures",
    "viator",
  ]),

  /**
   * Should the rating use an icon instead of text to describe the rating
   */
  icon: React.PropTypes.bool,
};

Rating.defaultProps = {
  amount: "",

  max: 5,

  text: "",

  provider: "",

  icon: false,
};

export default radium(Rating);
