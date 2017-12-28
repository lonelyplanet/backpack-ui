import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import CategoryLabel from "../categoryLabel";

const SponsorLabel = ({ style }) => (
  <CategoryLabel style={[style, { color: colors.accentOrange }]}>
    Sponsored
  </CategoryLabel>
);

SponsorLabel.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(SponsorLabel);
