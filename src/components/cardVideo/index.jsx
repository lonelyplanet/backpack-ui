import React, { PropTypes } from "react";
import { ThemeProvider } from "styled-components";
import Card from "../card";

const CardVideo = (props) => (
  <ThemeProvider
    theme={{
      fullBleed: !props.shadow,
    }}
  >
    <Card
      {...props}
      imageBubbleText={props.length}
      imageIcon="Play"
      descriptionIcon="Clock"
      onDescriptionIconClick={props.onWatchLater}
    />
  </ThemeProvider>
);

CardVideo.propTypes = {
  length: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  onWatchLater: PropTypes.func,
};

CardVideo.defaultProps = {
  length: "--",
  shadow: false,
};

export default CardVideo;
