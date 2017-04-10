import React, { PropTypes } from "react";

const styles = {
  base: {
    flexBasis: "80%",
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
  children: PropTypes.arrayOf(React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ])),
};

export default SettingBlockButtonDescription;
