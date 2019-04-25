import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import { textUppercase } from "../../utils/typography";
import propTypes from "../../utils/propTypes";
import { validReactAttributes } from "../../utils/validReactAttributes";

const styles = Object.assign({}, {
  backgroundColor: colors.accentGray,
  borderRadius: `${(2 / 8)}em`,
  color: colors.textOverlay,
  display: "inline-block",
  paddingBottom: `${(2 / 8)}em`,
  paddingLeft: `${(4 / 8)}em`,
  paddingRight: `${(4 / 8)}em`,
  paddingTop: `${(4 / 8)}em`,
  verticalAlign: "middle",
}, textUppercase(), {
  fontSize: "8px",
});

const Flag = (props) => {
  const sanitizedProps = validReactAttributes(props);

  return (
    <span
      className="Flag"
      style={[styles, props.style]}
      {...sanitizedProps}
    >
      {props.children}
    </span>
  );
};

Flag.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(Flag);
