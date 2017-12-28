import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";
import Icon from "../icon";

function mapMarker({ poiType, size, hideShadow, inverse }) {
  const types = {
    sleeping: {
      icon: "Sleep",
      color: colors.accentPurple,
    },
    drinking_nightlife: {
      icon: "Drink",
      color: colors.accentBlue,
    },
    transport: {
      icon: "Transport",
      color: colors.accentGray,
    },
    activities: {
      icon: "See",
      color: colors.poiSee,
    },
    tours: {
      icon: "See",
      color: colors.poiSee,
    },
    entertainment: {
      icon: "Play",
      color: colors.poiPlay,
    },
    shopping: {
      icon: "Shop",
      color: colors.accentPink,
    },
    eating: {
      icon: "Eat",
      color: colors.poiEat,
    },
    restaurants: {
      icon: "Eat",
      color: colors.poiEat,
    },
    sights: {
      icon: "See",
      color: colors.poiSee,
    },
    info: {
      icon: "Default",
      color: colors.poiDefault,
    },
    festivals_events: {
      icon: "Play",
      color: colors.poiPlay,
    },
  };

  /**
   * Get a size (in pixels) to use in the CSS. A ratio is created by dividing a
   * given number by the default icon size (20). That ratio is then multiplied
   * by the size recieved in the component’s props to create a value that is
   * proportional to the size of the marker.
   * @param  {Number} number Pixel value of desired size
   * @return {Number}        Calculated pixel value
   */
  const getSize = (number) => Math.ceil(size * (number / 20));

  /**
   * Calculate the font size from the size (height, width). The ratio is
   * calculated by dividing 11 (which is the font size for a 20x20 icon) by 20
   * (which has been defined as the default size).
   */
  const fontSize = getSize(11);

  /**
   * Calculate the border width from the size (height, width). The ratio is
   * calculated by dividing 1 (which is the lowest posible width) by 20 (which
   * has been defined as the default size and is the smallest size that a 1px
   * border should be applied to).
   */
  const borderWidth = getSize(1);

  const styles = {
    container: {
      base: {
        borderRadius: "100%",
        backgroundColor: poiType === "center" ?
          colors.linkPrimary :
          types[poiType].color,
        color: colors.bgPrimary,
        borderColor: `rgba(${rgb(colors.shadowPrimary)}, .12)`,
        borderStyle: "solid",
        borderWidth: `${borderWidth / fontSize}em`,
        display: "inline-block",
        fontSize: `${fontSize}px`,
        height: `${size / fontSize}em`,
        lineHeight: 1,
        textAlign: "center",
        width: `${size / fontSize}em`,
      },

      shadow: {
        boxShadow: `0 ${getSize(1) / fontSize}em
          ${getSize(5) / fontSize}em
          rgba(${rgb(colors.shadowPrimary)}, .25)`,
      },

      inverse: {
        backgroundColor: colors.bgPrimary,
        borderColor: "transparent",
        borderWidth: 0,
        boxShadow: `0 0 ${getSize(5) / fontSize}em
          rgba(${rgb(colors.shadowPrimary)}, .25)`,
        color: poiType === "center" ?
          colors.linkPrimary :
          types[poiType].color,
      },
    },

    icon: {
      base: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        verticalAlign: "top",
      },
    },
  };

  const MarkerIcon = iconFromString(`Map${types[poiType].icon}`, {
    style: styles.icon.base,
    fill: inverse ? types[poiType].color : colors.bgPrimary,
  });

  return (
    <div
      className="MapMarker"
      style={[
        styles.container.base,
        !hideShadow && styles.container.shadow,
        inverse && styles.container.inverse,
      ]}
    >
      {poiType === "center" ? <Icon.MapDefault /> : MarkerIcon}
    </div>
  );
}

mapMarker.propTypes = {
  /**
   * A pre-defined POI type that maps to an icon; "center" is a custom value
   * that can be used to create an LP Blue marker that uses the default icon
   */
  poiType: PropTypes.oneOf([
    "center",
    "activities",
    "drinking_nightlife",
    "eating",
    "entertainment",
    "festivals_events",
    "info",
    "restaurants",
    "shopping",
    "sights",
    "sleeping",
    "tours",
    "transport",
  ]),

  /**
   * Number to define width and height
   */
  size: PropTypes.number,

  /**
   * Whether or not to hide the shadow on the marker; note that the "inverse"
   * marker always has a shadow, regardless of the value of this prop
   */
  hideShadow: PropTypes.bool,

  /**
   * Reverse the colors; the background becomes white and the icon a color
   */
  inverse: PropTypes.bool,
};

mapMarker.defaultProps = {
  poiType: "center",
  size: 20,
  hideShadow: false,
  inverse: false,
};

// mapMarker.styles = styles;

export default radium(mapMarker);
