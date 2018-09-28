import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { LogoWorldNomadsColor } from "../icon";

function ProviderLogoWorldNomads({ className, style }) {
  return (
    <LogoWorldNomadsColor
      className={cn(className)}
      style={style}
      label="World Nomads"
    />
  );
}

ProviderLogoWorldNomads.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

ProviderLogoWorldNomads.defaultProps = {
  className: "",
  style: {},
};

export default ProviderLogoWorldNomads;
