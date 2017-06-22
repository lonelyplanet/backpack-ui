import React, { PropTypes } from "react";
import radium from "radium";
import color from "../../styles/colors";
import propTypes from "../../utils/propTypes";

const styles = {
  base: {
    borderBottom: "1px solid",
    borderBottomColor: color.borderPrimary,
  },
  hasAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  error: {
    borderBottomColor: color.accentRed,
  },
};

const SettingBlockWrapper = ({
  children,
  error,
  hasAction,
  style,
}) => (
  <div
    className="SettingBlockWrapper"
    style={[
      styles.base,
      error && styles.error,
      hasAction && styles.hasAction,
      style,
    ]}
  >
    {children}
  </div>
);

SettingBlockWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  error: PropTypes.bool,
  hasAction: PropTypes.bool,
  style: propTypes.style,
};

export default radium(SettingBlockWrapper);
