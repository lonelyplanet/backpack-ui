import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    backgroundColor: color.gray,
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
  imageSize: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  style: propTypes.style,
};

export default radium(ImageHero);
