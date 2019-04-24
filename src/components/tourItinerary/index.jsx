import React from "react";
import PropTypes from "prop-types";
import MoreLink from "../moreLink";
import Heading from "../heading";
import font from "../../utils/font";

const styles = {
  day: {
    base: {
      fontSize: "20px",
      lineHeight: (36 / 20),
      marginTop: `${27 / 20}em`,
    },
  },

  title: {
    base: {
      fontSize: "1em",
      lineHeight: "inherit",
    },
  },

  description: {
    base: {
      fontFamily: font("miller"),
      marginTop: `${-4 / 20}em`,
    },
  },
};

function TourItinerary({ itinerary, link, qahook }) {
  return (
    <div className="TourItinerary" data-qa={qahook ? "tour-itinerary-div" : null}>
      {itinerary.map((day, index) => (
        <div key={index} className="TourItinerary-day" style={styles.day.base}>
          <Heading
            level={3}
            weight="thick"
            override={styles.title.base}
            qahook={qahook}
          >
            {day.title}
          </Heading>

          <p style={styles.description.base}>
            {day.description}
          </p>
        </div>
      ))}

      {link &&
        <div style={{ marginTop: "8px" }}>
          <MoreLink href={link} size="small" caps qahook={qahook ? "Full itinerary" : null}>
            Full itinerary
          </MoreLink>
        </div>
      }
    </div>
  );
}

TourItinerary.propTypes = {
  /**
   * Array of objects for each day of the tour
   */
  itinerary: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,

  /**
   * Link to full itinerary
   */
  link: PropTypes.string,

  /**
   * QA Hook
   */
  qahook: PropTypes.bool,
};

TourItinerary.defaultProps = {
  itinerary: [],

  link: "",

  qahook: false,
};

export default TourItinerary;
