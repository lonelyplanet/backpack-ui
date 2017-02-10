import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import { color } from "../../../settings.json";

const styles = {
  heading: {
    fontSize: "20px",
    lineHeight: (28 / 20),
  },

  description: {
    color: color.featureCopy,
    fontSize: "16px",
    lineHeight: 1,
    marginBottom: 0,
    marginTop: "12px",
  },
};

const CardDescriptionPoster = ({ heading, description, style }) => (
  <div
    className="Card-description"
    style={style}
  >
    <Heading
      level={3}
      weight="thick"
      override={styles.heading}
    >
      {heading}
    </Heading>

    {description &&
      <p style={styles.description}>
        {description}
      </p>
    }
  </div>
);

CardDescriptionPoster.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardDescriptionPoster);
