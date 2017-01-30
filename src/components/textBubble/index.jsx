import React from "react";
import radium from "radium";
import { color, typography } from "../../../settings.json";
import { rgb } from "../../utils/color";


const styles = {
  base: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    color: color.white,
    weight: typography.fontWeightMedium,
    background: `rgba(${rgb(color.black)}, 0.24)`,
    borderRadius: 44,
  },
};

const TextBubble = ({ children, style }) => (
  <span style={[styles.base, style && style]}>
    {children}
  </span>
);

TextBubble.propTypes = {
  children: React.PropTypes.string,
  style: React.PropTypes.objectOf(React.PropTypes.object),
};

export default radium(TextBubble);
