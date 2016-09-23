import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";
import Icon from "../icon";

function mapMarker({ poiType, size, hideShadow, inverse }) {
  const types = {
    sleeping: {
      icon: "sleep",
      color: color.poiSleep,
    },
    drinking_nightlife: {
      icon: "drink",
      color: color.poiDrink,
    },
    transport: {
      icon: "transport",
      color: color.poiTransport,
    },
    activities: {
      icon: "see",
      color: color.poiSee,
    },
    tours: {
      icon: "see",
      color: color.poiSee,
    },
    entertainment: {
      icon: "play",
      color: color.poiPlay,
    },
    shopping: {
      icon: "shop",
      color: color.poiShop,
    },
    eating: {
      icon: "eat",
      color: color.poiEat,
    },
    restaurants: {
      icon: "eat",
      color: color.poiEat,
    },
    sights: {
      icon: "see",
      color: color.poiSee,
    },
    info: {
      icon: "default",
      color: color.poiDefault,
    },
    festivals_events: {
      icon: "play",
      color: color.poiPlay,
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
          color.blue :
          types[poiType].color,
        color: color.white,
        borderColor: `rgba(${rgb(color.black)}, .12)`,
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
          rgba(${rgb(color.black)}, .25)`,
      },

      inverse: {
        backgroundColor: color.white,
        borderColor: "transparent",
        borderWidth: 0,
        boxShadow: `0 0 ${getSize(5) / fontSize}em
          rgba(${rgb(color.black)}, .25)`,
        color: poiType === "center" ?
          color.blue :
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

  return (
    <div
      className="MapMarker"
      style={[
        styles.container.base,
        !hideShadow && styles.container.shadow,
        inverse && styles.container.inverse,
      ]}
    >
      <Icon
        label={poiType}
        style={styles.icon.base}
        name={poiType === "center" ?
          "map-default" :
          `map-${types[poiType].icon}`
        }
      />
    </div>
  );
}

mapMarker.propTypes = {
  /**
   * A pre-defined POI type that maps to an icon; "center" is a custom value
   * that can be used to create an LP Blue marker that uses the default icon
   */
  poiType: React.PropTypes.oneOf([
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
  size: React.PropTypes.number,

  /**
   * Whether or not to hide the shadow on the marker; note that the "inverse"
   * marker always has a shadow, regardless of the value of this prop
   */
  hideShadow: React.PropTypes.bool,

  /**
   * Reverse the colors; the background becomes white and the icon a color
   */
  inverse: React.PropTypes.bool,
};

mapMarker.defaultProps = {
  poiType: "center",

  size: 20,

  hideShadow: false,

  inverse: false,
};

// mapMarker.styles = styles;

export default radium(mapMarker);
