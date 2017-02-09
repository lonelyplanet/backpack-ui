import React, { PropTypes } from "react";
import radium from "radium";
import { PhotoSwipe } from "react-photoswipe";
import styles from "./styles";

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const PhotoGallery = ({
  photos,
  options,
  isOpen,
  onClose,
  beforeChange,
  afterChange,
  style,
}) => (
  <div className="PhotoGallery" style={style}>
    <style dangerouslySetInnerHTML={markup(styles)} />

    <PhotoSwipe
      isOpen={isOpen}
      items={photos}
      options={options}
      onClose={onClose}
      beforeChange={beforeChange}
      afterChange={afterChange}
    />
  </div>
);

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  options: PropTypes.shape({
    index: PropTypes.number,
    getThumbBoundsFn: PropTypes.func,
    showHideOpacity: PropTypes.bool,
    showAnimationDuration: PropTypes.number,
    hideAnimationDuration: PropTypes.number,
    bgOpacity: PropTypes.number,
    spacing: PropTypes.number,
    allowPanToNext: PropTypes.bool,
    maxSpreadZoom: PropTypes.number,
    getDoubleTapZoom: PropTypes.func,
    loop: PropTypes.bool,
    pinchToClose: PropTypes.bool,
    closeOnScroll: PropTypes.bool,
    closeOnVerticalDrag: PropTypes.bool,
    mouseUsed: PropTypes.bool,
    escKey: PropTypes.bool,
    arrowKeys: PropTypes.bool,
    history: PropTypes.bool,
    galleryUID: PropTypes.number,
    galleryPIDs: PropTypes.bool,
    errorMsg: PropTypes.string,
    preload: PropTypes.arrayOf(PropTypes.number),
    mainClass: PropTypes.string,
    getNumItemsFn: PropTypes.func,
    focus: PropTypes.bool,
    isClickableElement: PropTypes.func,
    modal: PropTypes.bool,
  }),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  beforeChange: PropTypes.func,
  afterChange: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

PhotoGallery.defaultProps = {
  options: {
    index: 0,
    showHideOpacity: false,
    showAnimationDuration: 333,
    hideAnimationDuration: 333,
    bgOpacity: 1,
    spacing: 0.12,
    allowPanToNext: true,
    maxSpreadZoom: 2,
    loop: true,
    pinchToClose: true,
    closeOnScroll: true,
    closeOnVerticalDrag: true,
    mouseUsed: false,
    escKey: true,
    arrowKeys: true,
    history: true,
    galleryUID: 1,
    galleryPIDs: false,
    preload: [1, 1],
    focus: true,
    modal: true,
  },
  isOpen: false,
};

export default radium(PhotoGallery);
