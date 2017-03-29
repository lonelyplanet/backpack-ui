import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";

const propTypes = {
  /**
   * Image path
   */
  image: PropTypes.string.isRequired,

  /**
   * Width and height of the image
   */
  imageSize: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

const styles = {
  container: {
    base: {
      backgroundColor: color.gray,
      backgroundSize: "cover",
      position: "relative",
    },
  },
};

function ImageHero({ image, imageSize }) {
  return (
    <div
      className="ImageHero"
      style={[
        styles.container.base,
        {
          backgroundImage: `url(${image})`,
          paddingBottom: `${(imageSize[1] / imageSize[0]) * 100}%`,
        },
      ]}
    />
  );
}

ImageHero.propTypes = propTypes;

export default radium(ImageHero);
