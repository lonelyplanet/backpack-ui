import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import BulletDescription from "../bulletDescription";

const CardDescription = ({ heading, bullets, style }) => (
  <div
    className="Card-description"
    style={style}
  >
    {bullets &&
      <BulletDescription
        description={bullets}
        style={{ marginBottom: "9px" }}
      />
    }

    <Heading
      level={3}
      weight="thin"
      override={{ fontSize: "24px", lineHeight: (32 / 24) }}
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
