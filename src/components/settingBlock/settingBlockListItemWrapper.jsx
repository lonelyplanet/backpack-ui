import React, { PropTypes } from "react";

const styles = {
  base: {
    marginBottom: "8px",
  },
};

const SettingBlockListItemWrapper = ({ children }) => (
  <div
    className="SettingBlockListItemWrapper"
    style={styles.base}
  >
    {children}
  </div>
);

SettingBlockListItemWrapper.propTypes = {
  children: PropTypes.element,
};

export default SettingBlockListItemWrapper;
