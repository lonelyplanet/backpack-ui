import React, { PropTypes } from "react";
import radium from "radium";
import { outline } from "../../utils/mixins";

const styles = {
  default: {
    borderRadius: "100%",
    display: "inline-block",
    verticalAlign: "middle",
  },

  anchorImage: {
    display: "block",
    height: "100%",
    width: "100%",
  },

  anchor: {
    ":focus": outline(),
  },
};

function Avatar({ src, alt, size, href, style }) {
  const dimensions = {
    height: `${size}px`,
    width: `${size}px`,
  };

  const Image = (
    <img
      className="Avatar"
      style={[
        styles.default,
        dimensions,
        style,
      ]}
      src={src}
      alt={alt}
    />
  );

  const AnchorImage = (
    <img
      style={[
        styles.default,
        styles.anchorImage,
      ]}
      src={src}
      alt={alt}
    />
  );

  const Anchor = (
    <a
      className="Avatar"
      style={[
        styles.default,
        styles.anchor,
        dimensions,
        style,
      ]}
      href={href}
    >
      {AnchorImage}
    </a>
  );

  return href ? Anchor : Image;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf([25, 40, 70]),
  href: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

Avatar.defaultProps = {
  size: 70,
};

export default radium(Avatar);
