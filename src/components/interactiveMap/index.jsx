import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import leaflet from "leaflet";
import { styles, scopedStyles, markerStyles, markerColors, markerStylesMixin } from "./styles";
import icons from "./icons";

const mapSettings = {
  accessToken: "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6Imh1ODUtdUEifQ.OLLon0V6rcoTyayXzzUzsg",
  attribution: `<span title="Map data &copy; OpenStreetMap contributors,
    CC-BY-SA, Imagery &copy; Mapbox">&copy;</span>`,
  maxZoom: 17,
  popupOptions: {
    className: "InteractiveMap-popup",
    closeButton: false,
    maxWidth: 150,
    offset: leaflet.point(0, 0),
    autoPan: false,
  },
  projectId: "lonelyplanet.b963d424",
  url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
};

class InteractiveMap extends Component {
  static addPopupToMarker(marker, title) {
    marker.bindPopup(title);
    marker.on("mouseover", () => {
      marker.openPopup();
    });
    marker.on("mouseout", () => {
      marker.closePopup();
    });
  }

  static setMarkerStyles() {
    Object.keys(markerColors).forEach((type) => {
      if (type === "center") {
        Object.assign(markerStyles, {
          [`.leaflet-div-icon-${type}`]: markerStylesMixin(
            markerColors[type],
            ""
          ),
        });
      } else {
        Object.assign(markerStyles, {
          [`.leaflet-div-icon-${type}`]: markerStylesMixin(
            markerColors[type],
            ""
          ),
          [`.leaflet-div-icon-${type}.is-active`]: markerStylesMixin(
            markerColors[type],
            "",
            "active"
          ),
        });
      }
    });
  }

  componentDidMount() {
    this.initMap();
    InteractiveMap.setMarkerStyles();
    this.initTiles();
    this.initMarkers();
    this.setMapBounds();
  }

  setMapBounds() {
    const { places } = this.props;
    const placesCoords = places.map(place => [place.lat, place.long]);
    this.leafletMap.fitBounds(placesCoords, {
      padding: [30, 30],
    });
  }

  initMarkers() {
    const { places, markerSize } = this.props;
    places.map((place, index) => {
      const marker = leaflet.marker([place.lat, place.long], {
        opacity: 1,
        icon: leaflet.divIcon({
          className: "leaflet-div-icon-see",
          iconSize: markerSize,
          html: icons.see,
        }),
        id: `marker-${index}`,
        riseOnHover: true,
      }).addTo(this.leafletMap);

      return InteractiveMap.addPopupToMarker(marker, place.title);
    });
  }

  initTiles() {
    leaflet.tileLayer(mapSettings.url, {
      accessToken: mapSettings.accessToken,
      attribution: mapSettings.attribution,
      id: mapSettings.projectId,
      maxZoom: mapSettings.maxZoom,
    }).addTo(this.leafletMap);
  }

  initMap() {
    this.leafletMap = leaflet.map("map", {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
    });
  }

  render() {
    const { width, height, style } = this.props;

    return (
      <div
        className="InteractiveMap-container"
        style={[
          styles.container.base,
          { width, height },
          style,
        ]}
      >
        <Style
          scopeSelector=".InteractiveMap-container"
          rules={Object.assign(scopedStyles, markerStyles)}
        />

        <div id="map" style={styles.map.base} />
      </div>
    );
  }
}

InteractiveMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    lat: PropTypes.number,
    long: PropTypes.number,
  })).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  markerSize: PropTypes.arrayOf(PropTypes.number),
  style: PropTypes.objectOf(PropTypes.object),
};

InteractiveMap.defaultProps = {
  width: 628,
  height: 400,
  markerSize: [20, 20],
  style: null,
};

export default radium(InteractiveMap);
