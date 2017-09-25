import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { color } from "../../../settings.json";

const CoverPhoto = ({ src, width, height, alt, style }) => (
  <div
    className="CoverPhoto"
    aria-label={alt}
    style={[
      {
        backgroundColor: color.gray,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      },
      style,
      { backgroundImage: `url(${src})` },
      (width && height) && { paddingBottom: `${(height / width) * 100}%` },
    ]}
  />
);

CoverPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CoverPhoto);
