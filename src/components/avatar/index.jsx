import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

const styles = {
  default: {
    borderRadius: "100%",
    display: "inline-block",
    objectFit: "cover",
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

function Avatar({ src, alt, size, href, id, className, style, qaHook }) {
  const dimensions = {
    height: `${size}px`,
    width: `${size}px`,
  };

  const Image = (
    <img
      id={id}
      className={cn("Avatar", className)}
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
      id={id}
      data-testid={qaHook ? createQAHook(id, cn("Avatar", className), "link") : null}
      className={cn("Avatar", className)}
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
  size: PropTypes.oneOf([24, 40, 48, 80, 104]),
  href: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

Avatar.defaultProps = {
  alt: "",
  size: 80,
  href: null,
  id: null,
  className: null,
  style: null,
  qaHook: false,
};

export default radium(Avatar);
