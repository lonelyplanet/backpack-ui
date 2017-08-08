import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Link from "../link";
import CoverPhoto from "../coverPhoto";
import { color, timing } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    overflow: "hidden",
    position: "relative",
  },

  anchor: {
    display: "block",
  },

  coverPhoto: {
    transition: `transform ${timing.slow} ease-in-out`,
  },
};

const imageSizes = {
  video: {
    width: 410,
    height: 232,
  },
  poster: {
    width: 300,
    height: 378,
  },
};

const CardImage = ({
  href,
  src,
  aspectRatio,
  children,
  opacity,
  style,
}) => (
  <div
    className="Card-image"
    style={[
      styles.container,
      opacity && { backgroundColor: color.black },
      style,
    ]}
  >
    <Link
      to={href}
      tabIndex={-1}
      style={styles.anchor}
    >
      {src &&
        <CoverPhoto
          src={src}
          width={imageSizes[aspectRatio].width}
          height={imageSizes[aspectRatio].height}
          style={[
            styles.coverPhoto,
            { opacity },
          ]}
        />
      }

      {children}
    </Link>
  </div>
);

CardImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf([
    "video",
    "poster",
  ]).isRequired,
  children: PropTypes.node,
  opacity: PropTypes.number,
  style: propTypes.style,
};

CardImage.defaultProps = {
  aspectRatio: "video",
};

export default radium(CardImage);
