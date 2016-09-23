import React, { PropTypes } from "react";
import radium from "radium";
import assign from "object-assign";
import { color } from "rizzo-next/sass/settings.json";
import providerImageSize from "../../utils/providerImageSize";

const propTypes = {
  /**
   * Image path
   */
  image: PropTypes.string.isRequired,

  /**
   * Width and height of the image
   */
  imageSize: PropTypes.array.isRequired,
};

const defaultProps = {
  images: "",

  imageSize: [],
};

const styles = {
  container: {
    base: {
      backgroundColor: color.gray,
      position: "relative",
    },
  },

  image: {
    base: {
      display: "block",
      margin: "0 auto",
    },

    center: {
      bottom: 0,
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      margin: "auto",
    },
  },
};

function ImageHero({ image, imageSize }) {
  const isImage500Wide = providerImageSize(image, "max500");

  return (
    <div
      className="ImageHero"
      style={[
        styles.container.base,
        isImage500Wide && { paddingBottom: `${(imageSize[1] / imageSize[0]) * 100}%` },
      ]}
    >
      <img
        src={image}
        alt=""
        style={[
          styles.image.base,
          isImage500Wide && assign({}, styles.image.center, { height: "100%" }),
        ]}
      />
    </div>
  );
}

ImageHero.propTypes = propTypes;
ImageHero.defaultProps = defaultProps;

export default radium(ImageHero);
