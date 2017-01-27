import React, { PropTypes } from "react";
import { ThemeProvider } from "styled-components";
import Card from "..";

const VideoCard = (props) => (
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

VideoCard.propTypes = {
  length: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  showDescriptionIcon: PropTypes.bool,
};

VideoCard.defaultProps = {
  length: "--",
  shadow: true,
  showPlayButton: true,
  showDescriptionIcon: true,
};

export default VideoCard;
