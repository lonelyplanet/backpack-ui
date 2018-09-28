import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import assign from "object-assign";
import ProviderLogoBookingDotcom from "./providerLogoBookingDotcom";
import ProviderLogoGAdventures from "./providerLogoGAdventures";
import ProviderLogoViator from "./providerLogoViator";
import ProviderLogoWorldNomads from "./providerLogoWorldNomads";

function ProviderLogo({ provider, className, style }) {
  const providers = {
    bdc: {
      name: "booking.com",
      image: "vendorLogo-bdc.png",
      icon: <ProviderLogoBookingDotcom />,
    },
    hostelworld: {
      name: "Hostelworld",
      image: "vendorLogo-hostelworld-transparent.png",
    },
    opentable: {
      name: "OpenTable",
      image: "vendorLogo-openTable-transparent.png",
    },
    gadventures: {
      name: "G Adventures",
      image: "vendorLogo-gAdventures.png",
      icon: <ProviderLogoGAdventures />,
    },
    viator: {
      name: "Viator",
      image: "vendorLogo-viator.png",
      icon: <ProviderLogoViator />,
    },
    worldNomads: {
      name: "World Nomads",
      image: "vendorLogo-worldNomads.png",
      icon: <ProviderLogoWorldNomads />,
    },
  };

  if (providers[provider].icon) {
    return (
      React.cloneElement(providers[provider].icon, {
        className: cn(className),
        style: assign({}, {
          display: "block",
          height: "42px",
          width: "auto",
        }, style),
      })
    );
  }

  return (
    <img
      className={cn(className)}
      src={`https://s3.amazonaws.com/static-asset/assets/${providers[provider].image}`}
      style={style}
      alt={providers[provider].name}
    />
  );
}

ProviderLogo.propTypes = {
  provider: PropTypes.oneOf([
    "",
    "bdc",
    "hostelworld",
    "opentable",
    "gadventures",
    "viator",
    "worldNomads",
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

ProviderLogo.defaultProps = {
  provider: "",
  className: "",
  style: {},
};

export default ProviderLogo;
