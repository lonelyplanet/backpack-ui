import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { color } from "../../../settings.json";
import CategoryLabel from "../categoryLabel";

const SponsorLabel = ({ style }) => (
  <CategoryLabel style={[style, { color: color.crusta }]}>
    Sponsored
  </CategoryLabel>
);

SponsorLabel.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(SponsorLabel);
