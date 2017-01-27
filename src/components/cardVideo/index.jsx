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
      imageIcon={props.showPlayButton}
      descriptionIcon={props.showDescriptionIcon}
    />
  </ThemeProvider>
);

CardVideo.propTypes = {
  length: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  showDescriptionIcon: PropTypes.bool,
};

CardVideo.defaultProps = {
  length: "--",
  shadow: true,
  showPlayButton: true,
  showDescriptionIcon: true,
};

export default CardVideo;
