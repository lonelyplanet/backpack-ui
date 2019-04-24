import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import Measure from "react-measure";
import Button from "../button";
import { ArrowRightAlternate, ChevronRight } from "../icon";
import colors from "../../styles/colors";
import {
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading7,
  fontSizeHeading8,
  fontWeightLight,
  lineHeightReset,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import { span } from "../../utils/grid";
import currencySymbols from "../../utils/currencySymbols";
import propTypes from "../../utils/propTypes";

class FlightSearchWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
      },
    };
  }

  render() {
    const {
      className,
      style,
      onClick,
      arrive,
      depart,
      price,
      qahook,
      ...rest
    } = this.props;

    const { width } = this.state.dimensions;

    const attributes = Object.assign({}, rest);

    delete attributes.depart;
    delete attributes.arrive;
    delete attributes.price;
    delete attributes.onClick;

    const styles = {
      container: {
        borderTop: `1px solid ${colors.borderPrimary}`,
        display: "flex",
        flexDirection: width < 580 ? "column" : "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: span(6, "static"),
        paddingTop: "24px",
      },

      grid: {
        alignItems: "flex-end",
        display: "flex",
        flexWrap: "wrap",
      },

      columnDepart: {
        paddingRight: (width > 182 && "16px") || null,
        width: (width <= 182 && "100%") || (width <= 400 && "auto") || "168px",
      },

      columnArrive: {
        marginTop: (width <= 182 && "16px") || null,
        paddingRight: (width > 182 && "16px") || null,
        width: (width <= 182 && "100%") || (width <= 400 && "auto") || "112px",
      },

      columnPrice: {
        marginTop: (width <= 258 && "16px") || null,
        width: (width <= 182 && "100%") || null,
      },

      label: {
        color: rgba(colors.textPrimary, 0.5),
        fontSize: width <= 400 ? `${fontSizeHeading8}px` : `${fontSizeHeading7}px`,
        lineHeight: lineHeightReset,
        marginBottom: width <= 258 ? "8px" : "16px",
      },

      text: {
        color: colors.textSecondary,
        fontSize: width <= 400 ? `${fontSizeHeading5}px` : `${fontSizeHeading4}px`,
        fontWeight: fontWeightLight,
        lineHeight: lineHeightReset,
      },

      price: {
        color: colors.accentRed,
      },

      icon: {
        display: (width <= 182 && "none") || null,
        fontSize: `${(28 / fontSizeHeading4)}em`,
        marginLeft: width <= 400 ? "16px" : "36px",
        stroke: colors.bgPrimary,
        strokeWidth: "2px",
        verticalAlign: "top",
      },

      button: {
        alignSelf: (width >= 580 && "flex-end") || null,
        fontSize: "11px",
        marginTop: (width < 580 && "16px") || null,
        paddingBottom: "15px",
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: "18px",
        width: width <= 258 ? "100%" : "152px",
      },

      buttonIcon: {
        display: (width <= 152 && "none") || null,
        fontSize: "8px",
        marginLeft: "1em",
        verticalAlign: "baseline",
      },
    };

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({
            dimensions: contentRect.bounds,
          });
        }}
      >
        {({ measureRef }) => (
          <div
            {...attributes}
            ref={measureRef}
            className={cn("FlightSearchWidget", className)}
            style={[styles.container, style]}
          >
            <div style={styles.grid}>
              <div style={styles.columnDepart}>
                <div style={styles.label}>
                  {depart.city}
                </div>

                <div style={styles.text}>
                  {depart.airportCode}

                  <ArrowRightAlternate style={styles.icon} />
                </div>
              </div>

              <div style={styles.columnArrive}>
                <div style={styles.label}>
                  {arrive.city}
                </div>

                <div style={styles.text}>
                  {arrive.airportCode}
                </div>
              </div>

              <div style={styles.columnPrice}>
                <div style={styles.label}>
                  from
                </div>

                <div style={[styles.text, styles.price]}>
                  {currencySymbols[price.currency]}{price.amount}
                </div>
              </div>
            </div>

            <Button
              customStyles={styles.button}
              onClick={onClick}
              rounded
              data-qa={qahook ? "see-flights" : null}
            >
              See flights

              <ChevronRight style={styles.buttonIcon} />
            </Button>
          </div>
        )}
      </Measure>
    );
  }
}

FlightSearchWidget.propTypes = {
  depart: PropTypes.shape({
    airportCode: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  arrive: PropTypes.shape({
    airportCode: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
    currency: propTypes.currency,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: propTypes.style,
  qahook: PropTypes.bool,
};

FlightSearchWidget.defaultProps = {
  className: null,
  style: null,
  qahook: false,
};

export default radium(FlightSearchWidget);
