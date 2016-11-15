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
  componentDidMount() {
    this.initMap();
    this.setMarkerStyles();
    this.initTiles();
    this.initMarkers();
    this.setBounds();
  }

  initMap() {
    this.leafletMap = leaflet.map("map", {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
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

  initMarkers() {
    const { places } = this.props;
    places.map((place, index) => {
      const marker = leaflet.marker([place.lat, place.long], {
        opacity: 1,
        icon: leaflet.divIcon({
          className: "leaflet-div-icon-see",
          iconSize: [20, 20],
          html: icons.see,
        }),
        id: `marker-${index}`,
        riseOnHover: true,
      }).addTo(this.leafletMap);

      marker.bindPopup(place.title);
      marker.on("mouseover", () => {
        marker.openPopup();
      });
      marker.on("mouseout", () => {
        marker.closePopup();
      });
    });
  }

  setMarkerStyles() {
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

  setBounds() {
    const { places } = this.props;
    const placesCoords = places.map(place => [place.lat, place.long]);
    this.leafletMap.fitBounds(placesCoords, {
      padding: [30, 30],
    });
  }

  render() {
    return (
      <div className="InteractiveMap-container" style={styles.container.base}>
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
};


export default radium(InteractiveMap);
