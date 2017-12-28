import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import BulletDescription from "../bulletDescription";

const styles = {
  marginBottom: "9px",

  [`@media (max-width: ${mq.max["768"]})`]: {
    fontSize: "9px",
    marginBottom: "6px",
  },
};

const CardBullets = ({ bullets, style }) => (
  <BulletDescription
    description={bullets}
    style={[styles, style]}
  />
);

CardBullets.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: propTypes.style,
};

export default radium(CardBullets);
