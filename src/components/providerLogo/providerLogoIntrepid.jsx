import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { LogoIntrepid } from "../icon";

function ProviderLogoIntrepid({ className, style }) {
  return (
    <LogoIntrepid
      className={cn(className)}
      style={style}
      label="Urban Adventures"
    />
  );
}

ProviderLogoIntrepid.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

ProviderLogoIntrepid.defaultProps = {
  className: "",
  style: {},
};

export default ProviderLogoIntrepid;
