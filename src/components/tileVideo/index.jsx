import React from "react";
import radium from "radium";
import CardVideo from "../cardVideo";

const TileVideo = (props) => (
  <CardVideo
    {...props}
  />
);

TileVideo.propTypes = CardVideo.propTypes;

TileVideo.defaultProps = {
  aspectRatio: "video",
  layout: "tile",
};

export default radium(TileVideo);
