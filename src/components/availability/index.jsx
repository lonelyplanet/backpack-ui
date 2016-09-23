import React from "react";
import radium, { Style } from "radium";
import { media } from "rizzo-next/sass/settings.json";
import Price from "../price";
import Button from "../button";
import { gutter } from "../../utils/grid";

const styles = {
  price: {
    base: {
      marginBottom: "1.6rem",
    },
  },

  form: {
    base: {
      position: "relative",
      width: "100%",
    },
  },

  button: {
    base: {
      marginBottom: gutter("static"),
    },
  },
};

function Availability({ price, url, buttonLabel, buttonClick }) {
  return (
    <div className="Availability">
      <Style
        scopeSelector=".Availability"
        rules={{
          ".Price": {
            position: "relative",
            width: "100%",
          },

          mediaQueries: {
            [`(max-width: ${media.max["768"]})`]: {
              ".Price": {
                textAlign: "center",
              },
            },

            [`(min-width: ${media.min["768"]})`]: {
              ".Price-rate": {
                bottom: ".6rem",
                position: "absolute",
                right: 0,
              },
            },
          },
        }}
      />

      <div
        className="Availability-price"
        style={styles.price.base}
      >
        <Price
          {...price}
          parent="booking"
          emphasized
        />
      </div>

      <div
        className="Availability-button"
        style={styles.button.base}
      >
        <Button
          height="tall"
          rounded={false}
          full
          href={buttonClick ? "" : url}
          onClick={(e) => {
            if (buttonClick) {
              e.preventDefault();
              buttonClick();
              window.location = url;
            }
          }}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

Availability.propTypes = {
  /**
   * Price
   */
  price: React.PropTypes.object.isRequired,

  /**
   * Availability url to send to external resource
   */
  url: React.PropTypes.string.isRequired,

  /**
   * Button label
   */
  buttonLabel: React.PropTypes.string,

  /**
   * Function to run when button is clicked
   */
  buttonClick: React.PropTypes.func,
};

Availability.defaultProps = {
  price: {},

  url: "",

  buttonLabel: "Check prices and availability",

  buttonClick: null,
};

Availability.styles = styles;

export default radium(Availability);
