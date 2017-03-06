import React from "react";
import Button from "../button";
import TileGrid from "../tileGrid";
import TileVideo from "../tileVideo";
import { color } from "../../../settings.json";

const styles = {
  buttonWrapper: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    color: color.red,
  },
};

const WatchLaterList = ({ videos, removeVideo }) => (
  <div>
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
        onClick={() => removeVideo(videos.map(video => video.id))}
      >
        Clear All
      </Button>
    </div>
  </div>
);

WatchLaterList.propTypes = {
  videos: React.PropTypes.arrayOf(React.PropTypes.object),
  removeVideo: React.PropTypes.func,
};

export default WatchLaterList;
