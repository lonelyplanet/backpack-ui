import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import BulletDescription from "../bulletDescription";

const styles = {
  bullets: {
    marginBottom: "9px",
  },

  heading: {
    fontSize: "24px",
    lineHeight: (32 / 24),
  },
};

const CardDescription = ({ heading, bullets, style }) => (
  <div
    className="Card-description"
    style={style}
  >
    {bullets &&
      <BulletDescription
        description={bullets}
        style={styles.bullets}
      />
    }

    <Heading
      level={3}
      weight="thin"
      override={styles.heading}
    >
      {heading}
    </Heading>
  </div>
);

CardDescription.propTypes = {
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardDescription);
