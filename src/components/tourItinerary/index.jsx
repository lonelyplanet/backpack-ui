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

function TourItinerary({ itinerary, link }) {
  return (
    <div className="TourItinerary">
      {itinerary.map((day, index) => (
        <div key={index} className="TourItinerary-day" style={styles.day.base}>
          <Heading
            level={3}
            weight="thick"
            override={styles.title.base}
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
          <MoreLink href={link} size="small" caps>
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
};

TourItinerary.defaultProps = {
  itinerary: [],

  link: "",
};

export default TourItinerary;
