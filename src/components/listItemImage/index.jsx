import React from "react";
import PropTypes from "prop-types";
import ImageLoader from "../imageLoader";
import Placeholder from "../placeholder";

function ListItemImage({ image, title }) {
  const renderPlaceholder = () => (
    <Placeholder
      title={title}
      fontSize={50}
      aspectRatio={5 / 4}
    />
  );

  return (
    <ImageLoader
      src={image.path}
      preloader={() => renderPlaceholder(title)}
    >
      {renderPlaceholder(title)}
    </ImageLoader>
  );
}

ListItemImage.propTypes = {
  /**
   * The name of the POI
   * key: name
   */
  title: PropTypes.string.isRequired,

  /**
   * Image src for the POI; required keys are path and orientation
   * partner-activities key: links.image
   */
  image: PropTypes.shape({
    path: PropTypes.string,
    orientation: PropTypes.oneOf([
      "",
      "portrait",
      "landscape",
    ]),
  }),
};

export default ListItemImage;
