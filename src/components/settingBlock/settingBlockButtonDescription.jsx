import React from "react";
import PropTypes from "prop-types";

const styles = {
  base: {
    flexBasis: "60%",
    paddingBottom: "16px",
  },
};

const SettingBlockButtonDescription = ({ children }) => (
  <div
    className="SettingBlockButtonDescription"
    style={styles.base}
  >
    {children}
  </div>
);

SettingBlockButtonDescription.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ])),
};

export default SettingBlockButtonDescription;
