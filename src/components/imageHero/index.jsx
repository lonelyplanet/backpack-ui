import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    backgroundColor: colors.borderPrimary,
    backgroundSize: "cover",
    position: "relative",
  },
};

function ImageHero({ image, imageSize, style }) {
  return (
    <div
      className="ImageHero"
      style={[
        styles.container,
        {
          backgroundImage: `url(${image})`,
          paddingBottom: `${(imageSize[1] / imageSize[0]) * 100}%`,
        },
        style,
      ]}
    />
  );
}

ImageHero.propTypes = {
  image: PropTypes.string.isRequired,
  imageSize: PropTypes.arrayOf(PropTypes.number).isRequired,
  style: propTypes.style,
};

export default radium(ImageHero);
