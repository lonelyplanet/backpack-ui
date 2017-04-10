import React, { PropTypes } from "react";
import radium from "radium";
import color from "../../styles/colors";

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
}) => (
  <div
    className="SettingBlockWrapper"
    style={[
      styles.base,
      error && styles.error,
      hasAction && styles.hasAction,
    ]}
  >
    {children}
  </div>
);

SettingBlockWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  error: PropTypes.bool,
  hasAction: PropTypes.bool,
};

export default radium(SettingBlockWrapper);
