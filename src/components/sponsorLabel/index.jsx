import React, { PropTypes } from "react";
import assign from "object-assign";
import { color } from "../../../settings.json";
import CategoryLabel from "../categoryLabel";

const SponsorLabel = ({ style }) => (
  <CategoryLabel style={assign({}, style, { color: color.crusta })}>
    Sponsored
  </CategoryLabel>
);

SponsorLabel.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
};

export default SponsorLabel;
