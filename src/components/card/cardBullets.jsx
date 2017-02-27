import React, { PropTypes } from "react";
import radium from "radium";
import BulletDescription from "../bulletDescription";
import { media } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  marginBottom: "9px",

  [mq]: {
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
