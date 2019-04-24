import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";

const CoverPhoto = ({ src, width, height, alt, style, qahook }) => (
  <div
    className="CoverPhoto"
    data-qa={qahook ? "cover-photo-img" : null}
    aria-label={alt}
    style={[
      {
        backgroundColor: colors.borderPrimary,
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
  qahook: PropTypes.bool,
};

export default radium(CoverPhoto);
