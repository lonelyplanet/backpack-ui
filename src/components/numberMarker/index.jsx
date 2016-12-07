import React from "react";
import radium from "radium";
import { color, zIndex } from "../../../settings.json";
import font from "../../utils/font";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    base: {
      backfaceVisibility: "hidden",
      color: color.titleGray,
      display: "inline-block",
      fontFamily: font("miller"),
      fontSize: "1em",
      height: `${36 / 20}em`,
      lineHeight: `${36 / 20}em`,
      position: "relative",
      textAlign: "center",
      width: `${36 / 20}em`,
      zIndex: zIndex.default,
    },

    size: {
      small: {
        fontSize: "14px",
      },

      large: {
        fontSize: "20px",
      },
    },

    place: {
      left: "6.7rem",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
    transparent: {
      color: color.white,
    },

  },

  diamond: {
    base: {
      backgroundColor: color.white,
      borderRadius: `${4 / 20}em`,
      boxShadow: `2px 2px 2px rgba(${rgb(color.black)}, .18)`,
      display: "block",
      height: "100%",
      marginTop: `-${36 / 20}em`,
      position: "relative",
      transform: "rotate(45deg)",
      width: "100%",
      zIndex: zIndex.below,
    },

    size: {
      small: {
        borderRadius: `${4 / 14}em`,
      },
      large: {
        borderRadius: `${6 / 20}em`,
      },
    },

    outlined: {
      boxShadow: "0 0 0 1px #e1eaf0", // this color does not exist in settings
    },

    transparent: {
      backgroundColor: "transparent",
      border: `1px solid ${color.white}`,
      opacity: "0.5",
    },
  },
};

function NumberMarker({ number, size, outlined, place, transparent }) {
  const style = {
    container: [styles.container.base],
    diamond: [styles.diamond.base],
  };

  if (size) {
    style.container.push(styles.container.size[size]);
    style.diamond.push(styles.diamond.size[size]);
  }

  if (outlined) {
    style.diamond.push(styles.diamond.outlined);
  }

  if (place) {
    style.container.push(styles.container.place);
  }

  if (transparent) {
    style.diamond.push(styles.diamond.transparent);
    style.container.push(styles.container.transparent);
  }

  return (
    <div
      className="NumberMarker"
      style={style.container}
    >
      {number}

      <span
        className="NumberMarker-diamond"
        style={style.diamond}
      />
    </div>
  );
}

NumberMarker.propTypes = {
  /**
   * Number to show
   */
  number: React.PropTypes.number.isRequired,

  /**
   * How big the marker should be; if size is
   * undefined, the size will be inherited from
   * the parent
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
    "large",
  ]),

  /**
   * Changes the box shadow style to look more
   * like an outline/border
   */
  outlined: React.PropTypes.bool,

  /**
   * If the marker used within a place list;
   * positions the marker over an 80px wide photo
   */
  place: React.PropTypes.bool,

  /**
   * Show a transparent version of the marker;
   *
   */
  transparent: React.PropTypes.bool,
};

NumberMarker.defaultProps = {
  number: "",

  size: "",

  outlined: false,

  place: false,

  transparent: false,
};

NumberMarker.styles = styles;

export default radium(NumberMarker);
