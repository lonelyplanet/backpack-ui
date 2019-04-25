import React from "react";
import radium from "radium";
import { Loading as Icon } from "../icon";
import colors from "../../styles/colors";
import { fontSizeHeading4 } from "../../styles/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import { validReactAttributes } from "../../utils/validReactAttributes";

const spinKeyframes = radium.keyframes({
  "0%": {
    transform: "rotate(0)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
}, "spin");

const styles = {
  animation: "spin 500ms linear infinite",
  animationName: spinKeyframes,
  color: rgba(colors.textPrimary, 0.5),
  fontSize: `${fontSizeHeading4}px`,
};

const Loading = (props) => {
  const sanitizedProps = validReactAttributes(props);

  return (
    <Icon
      {...sanitizedProps}
      style={Object.assign({}, styles, props.style)}
    />
  );
};

Loading.propTypes = {
  style: propTypes.style,
};

Loading.defaultProps = {
  style: null,
};

export default Loading;
