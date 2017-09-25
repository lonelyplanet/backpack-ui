import React from "react";
import PropTypes from "prop-types";
import { PhotoSwipe } from "react-photoswipe";

const propTypes = {
  images: PropTypes.array.isRequired,

  options: PropTypes.object,

  isOpen: PropTypes.bool,

  onClose: PropTypes.func,
};

const defaultProps = {
  images: [],

  options: {},

  isOpen: false,

  onClose: () => {},
};

function ImageGallery({ images, options, isOpen, onClose }) {
  return (
    <PhotoSwipe
      isOpen={isOpen}
      items={images}
      options={options}
      onClose={onClose}
    />
  );
}

ImageGallery.propTypes = propTypes;
ImageGallery.defaultProps = defaultProps;

export default ImageGallery;
