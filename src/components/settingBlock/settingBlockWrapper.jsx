import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import propTypes from "../../utils/propTypes";

const styles = {
  hasBorder: {
    borderBottomColor: colors.borderPrimary,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
  },

  hasAction: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  error: {
    borderBottomColor: colors.accentRed,
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
