import React from "react";
import radium from "radium";
import CardVideo from "../cardVideo";
import { validReactAttributes } from "../../utils/validReactAttributes";

const TileVideo = (props) => (
  <CardVideo
    {...validReactAttributes(props)}
  />
);

TileVideo.propTypes = CardVideo.propTypes;

TileVideo.defaultProps = {
  aspectRatio: "video",
  layout: "tile",
};

export default radium(TileVideo);
