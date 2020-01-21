import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { LogoUrbanAdventuresColor } from "../icon";

function ProviderLogoUrbanAdventures({ className, style }) {
  return (
    <LogoUrbanAdventuresColor
      className={cn(className)}
      style={style}
      label="Urban Adventures"
    />
  );
}

ProviderLogoUrbanAdventures.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

ProviderLogoUrbanAdventures.defaultProps = {
  className: "",
  style: {},
};

export default ProviderLogoUrbanAdventures;
