import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import { blueLink } from "../../utils/mixins";
import schema from "../../utils/schema";
import MoreLink from "../moreLink";
import StaticMap from "../staticMap";
import createQAHook from "../../utils/createQAHook";

function Location({ name, street, place, coordinates, mobile }) {
  const styles = {
    container: {
      base: {
      },
    },

    address: {
      base: {
      },
    },

    directionsLink: {
      base: {
        borderTop: `1px solid ${colors.borderPrimary}`,
        display: "inline-block",
        marginTop: "10px",
        paddingRight: "13px",
        paddingTop: "13px",
      },
    },

    map: {
      base: {
      },
    },
  };

  const schemaProps = schema({
    itemProp: "address",
    itemType: "PostalAddress",
  });

  return (
    <div className="Location clearfix" style={styles.container.base}>
      {(street || (place && place.length > 0) || coordinates) &&
        <div className="Location-address" style={[mobile && { float: "left" }]}>

          {(street || (place && place.length > 0)) &&
            <div {...schemaProps}>
              {street &&
                <div itemProp="streetAddress">{street}</div>
              }

              {place && place.length > 0 && <div>
                {place.map((placeItem, i) => (
                  <span key={`${placeItem.title} span`}>
                    <a
                      key={placeItem.title}
                      style={blueLink()}
                      href={placeItem.href}
                      data-qa={createQAHook(placeItem.type, "place", "link")}
                    >
                      <span itemProp={placeItem.type === "city" ? "addressLocality" : "addressCountry"}>
                        {placeItem.title}
                      </span>
                    </a>
                    {(i !== (place.length - 1)) && ", "}
                  </span>
                ))}
              </div>}
            </div>
          }

          {coordinates && mobile &&
            <div style={styles.directionsLink.base}>
              <MoreLink
                href={"https://www.google.com/maps/place/" +
                  `${name.split(" ").join("+")},` +
                  `${coordinates[1]},${coordinates[0]}`}
                size="small"
              >
                Get directions
              </MoreLink>
            </div>
          }
        </div>
      }

      {coordinates &&
        <div
          className="Location-map"
          style={[mobile && { float: "right", marginTop: "-26px" }]}
        >
          <StaticMap
            location={coordinates.join(",")}
            size={mobile ? "88x88" : "278x90"}
            sidebar={!mobile}
            hideAttribution={mobile}
            name={name}
            url={mobile ? "https://www.google.com/maps/place/" +
              `${name.split(" ").join("+")},` +
              `${coordinates[1]},${coordinates[0]}` : ""}
          />
        </div>
      }
    </div>
  );
}

Location.propTypes = {
  /**
   * Name of the location; used for the static map and in the Google URL with
   * the coordinates
   */
  name: PropTypes.string.isRequired,

  /**
   * Street address of the location
   */
  street: PropTypes.string.isRequired,

  /**
   * An array of containing places, usually city and country
   */
  place: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,

  /**
   * An array of latitude and longitude coordinates; used in the Google URL
   */
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * Should mobile-specific styles and props be used
   */
  mobile: PropTypes.bool.isRequired,
};

Location.defaultProps = {
  name: "",
  street: "",
  place: null,
  coordinates: null,
  mobile: false,
};

export default radium(Location);
