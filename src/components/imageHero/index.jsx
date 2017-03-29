import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";

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

ImageHero.propTypes = {
  image: PropTypes.string.isRequired,
  imageSize: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

export default radium(ImageHero);
