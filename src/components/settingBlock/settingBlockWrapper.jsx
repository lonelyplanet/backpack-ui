import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import color from "../../styles/colors";
import propTypes from "../../utils/propTypes";

const styles = {
  hasBorder: {
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
  hasBorder,
  style,
}) => (
  <div
    className="SettingBlockWrapper"
    style={[
      error && styles.error,
      hasBorder && styles.hasBorder,
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
  hasBorder: PropTypes.bool,
  style: propTypes.style,
};

SettingBlockWrapper.defaultProps = {
  hasBorder: true,
};

export default radium(SettingBlockWrapper);
