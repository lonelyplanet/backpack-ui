import React from "react";
import radium from "radium";
import { color } from "../../../settings.json";

const styles = {
  base: {
    fontSize: 11,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    letterSpacing: "0.4px",
    color: color.subtitleGray,
    textTransform: "uppercase",
  },
};

const BulletDescription = ({ description }) => (
  <div style={styles.base}>
    {[].concat(description).join(String.fromCharCode("8226"))}
  </div>
);

BulletDescription.propTypes = {
  description: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default radium(BulletDescription);
