import React, { PropTypes } from "react";
import radium from "radium";
import CoverPhoto from "../coverPhoto";
import { timing } from "../../../settings.json";

const styles = {
  container: {
    position: "relative",
    transition: `transform ${timing.default} ease`,
  },

  anchor: {
    display: "block",
  },
};

const CardImage = ({ href, src, children, style }) => (
  <div
    className="Card-image"
    style={[styles.container, style]}
  >
    <a
      href={href}
      tabIndex={-1}
      style={styles.anchor}
    >
      {src &&
        <CoverPhoto
          src={src}
          width={412}
          height={232}
          style={styles.coverPhoto}
        />
      }

      {children}
    </a>
  </div>
);

CardImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardImage);
