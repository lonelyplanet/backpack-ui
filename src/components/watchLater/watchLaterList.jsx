import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Button from "../button";
import TileGrid from "../tileGrid";
import TileVideo from "../tileVideo";
import CardVideo from "../cardVideo";
import { color } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  buttonWrapper: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    color: color.red,
  },
};

const WatchLaterList = ({ videos, removeVideo, removeAll, style }) => (
  <div className="WatchLaterList" style={style}>
    <TileGrid>
      {videos.map(video => (
        <TileVideo
          className="Tile"
          heading={video.heading}
          bullets={video.bullets}
          runtime={video.runtime}
          actionIcon="Close"
          onClick={() => removeVideo(video.id)}
          style={{
            marginBottom: "64px",
          }}
          imageSrc={video.imageSrc}
          layout="tile"
          href={video.href}
        />
      ))}
    </TileGrid>
    <div style={styles.buttonWrapper}>
      <Button
        color="transparent"
        border={false}
        customStyles={styles.button}
        onClick={removeAll}
      >
        Clear All
      </Button>
    </div>
  </div>
);

WatchLaterList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(CardVideo.propTypes)),
  removeVideo: PropTypes.func,
  removeAll: PropTypes.func,
  style: propTypes.style,
};

export default radium(WatchLaterList);
