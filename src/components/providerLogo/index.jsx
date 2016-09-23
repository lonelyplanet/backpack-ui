import React from "react";

function ProviderLogo({ provider, style }) {
  const providers = {
    bdc: {
      name: "booking.com",
      image: "vendorLogo-bdc.png",
    },
    hostelworld: {
      name: "Hostelworld",
      image: "vendorLogo-hostelWorld.png",
    },
    opentable: {
      name: "OpenTable",
      image: "vendorLogo-openTable.png",
    },
    gadventures: {
      name: "G Adventures",
      image: "vendorLogo-gAdventures.png",
    },
    viator: {
      name: "Viator",
      image: "vendorLogo-viator.png",
    },
  };

  return (
    <img
      src={`https://s3.amazonaws.com/static-asset/assets/${providers[provider].image}`}
      style={style}
      alt={providers[provider].name}
    />
  );
}

ProviderLogo.propTypes = {
  provider: React.PropTypes.oneOf([
    "",
    "bdc",
    "hostelworld",
    "opentable",
    "gadventures",
    "viator",
  ]).isRequired,

  style: React.PropTypes.object,
};

ProviderLogo.defaultProps = {
  provider: "",

  style: {
    float: "right",
    height: "21px",
  },
};

export default ProviderLogo;
