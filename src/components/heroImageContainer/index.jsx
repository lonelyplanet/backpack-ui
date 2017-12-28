import React from "react";
import PropTypes from "prop-types";
import assign from "object-assign";

import colors from "../../styles/colors";

const styles = {
  image: {
    backgroundColor: colors.textPrimary,
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bottom: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
  },
};

const HeroImageContainer = ({ children, imagePath, style }) => (
  <div
    className="HeroImageContainer"
    style={assign({},
      styles.image,
      { backgroundImage: `url(${imagePath})` },
      style,
    )}
  >
    {children}
  </div>
);

HeroImageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  imagePath: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default HeroImageContainer;
