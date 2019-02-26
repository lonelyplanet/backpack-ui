import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import CategoryLabel from "../categoryLabel";

const SponsorLabel = ({ text, style }) => (
  <CategoryLabel style={[style, { color: colors.accentOrange }]}>
    { text }
  </CategoryLabel>
);

SponsorLabel.propTypes = {
  text: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

SponsorLabel.defaultProps = {
  text: "Sponsored",
};

export default radium(SponsorLabel);
