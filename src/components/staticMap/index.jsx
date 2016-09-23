"use strict";

import React from "react";
import radium from "radium";
import { color, timing } from "rizzo-next/sass/settings.json";
import { span, percentage } from "../../utils/grid";

const styles = {
  container: {
    base: {
      fontSize: "10px",
      opacity: 1,
      transition: `opacity ${timing.default}`,
    },

    sidebar: {
      marginTop: `${14 / 10}em`,
    },
  },

  image: {
    base: {
      display: "block",
    },

    sidebar: {
      height: "auto",
      maxHeight: `${90 / 10}em`,
      maxWidth: `${278 / 10}em`,
      width: percentage("27.8rem", `${span(3, "static")}`),
      marginTop: `${15 / 10}em`,
    },
  },

  attribution: {
    base: {
      color: color.lightText,
      display: "inline-block",
      fontSize: `${9 / 10}em`,
      letterSpacing: ".1px",
      marginTop: `${4 / 10}em`,
    },

    link: {
      color: "currentColor",
    },
  },
};

/**
 * Generate a static map
 */
function StaticMap({ token, location, size, sidebar }) {
  const baseUrl = "http://api.tiles.mapbox.com/v4/lonelyplanet.b963d424";
  const customMarkerUrl = "https://assets.staticlp.com/assets/mapPin-primary-small.png";
  const customMarker = `url-${encodeURIComponent(customMarkerUrl)}(${location})`;
  const url = `${baseUrl}/${customMarker}/${location},14/${size}.png?access_token=${token}`;

  const style = {
    container: [styles.container.base],
    image: [styles.image.base],
  };

  if (sidebar) {
    style.container.push(styles.container.sidebar);
    style.image.push(styles.image.sidebar);
  }

  return (
    <div
      className="StaticMap"
      style={styles.container.base}
    >
      <img
        className="StaticMap-image"
        style={style.image}
        src={url}
        alt="Static Map"
      />
      <small
        className="StaticMap-attribution"
        style={styles.attribution.base}
      >
        &copy; <a style={styles.attribution.link} href="https://www.mapbox.com/map-feedback/">Mapbox</a> &copy; <a style={styles.attribution.link} href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
      </small>
    </div>
  );
}

StaticMap.propTypes = {
  /**
   * Mapbox API token
   */
  token: React.PropTypes.string.isRequired,

  /**
   * Location string as lontxlat
   */
  location: React.PropTypes.string.isRequired,

  /**
   * Size for the static image in width x height
   * Defaults to 640x480
   */
  size: React.PropTypes.string,

  /**
   * If the static map is located within the sidebar (POI)
   */
  sidebar: React.PropTypes.bool,
};

const token = "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6Imh1ODUtdUEifQ.OLLon0V6rcoTyayXzzUzsg";

StaticMap.defaultProps = {
  token,

  location: "",

  size: "640x480",

  sidebar: false,
};

StaticMap.styles = styles;

export default radium(StaticMap);
