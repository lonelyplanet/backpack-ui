import React, { PropTypes } from "react";
import { typography } from "../../../settings.json";

const styles = {
  base: {
    fontSize: "16px",
    fontWeight: typography.fontWeightLight,
    marginTop: "8px",
  },
};

const SettingBlockDescription = ({ children }) => (
  <p
    className="SettingBlockDescription"
    style={styles.base}
  >
    {children}
  </p>
);

SettingBlockDescription.propTypes = {
  children: PropTypes.string,
};

export default SettingBlockDescription;
