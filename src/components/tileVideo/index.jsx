import React from "react";
import radium from "radium";
import CardVideo from "../cardVideo";

const TileVideo = (props) => (
  <CardVideo
    {...props}
    aspectRatio="video"
    layout="tile"
  />
);

TileVideo.propTypes = CardVideo.propTypes;

export default radium(TileVideo);
