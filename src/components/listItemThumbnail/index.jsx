import React, { PropTypes } from "react";

const styles = {
  alignSelf: "flex-start",
  display: "block",
  maxWidth: "100%",
};

const ListItemThumbnail = ({ src, alt }) => (
  <img
    style={styles}
    src={src}
    alt={alt}
  />
);

ListItemThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ListItemThumbnail;
