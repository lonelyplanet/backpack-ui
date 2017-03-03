import React from "react";
import Heading from "../heading";
import Button from "../button";
import TileGrid from "../tileGrid";
import TileVideo from "../tileVideo";
// import ThumbnailListItem from "../thumbnailListItem";
import { ClockOutline } from "../icon";
import { color } from "../../../settings.json";

const emptyStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: color.detailHeaderSmall,
    marginBottom: "16px",
    fontSize: "34px",
  },
  content: {
    textAlign: "center",
  },
  headline: {
    marginBottom: "16px",
    fontSize: "18px",
  },
  text: {
    fontSize: "14px",
    color: color.articlesBlurb,
    marginBottom: "72px",
  },
};

const videoStyles = {
  buttonWrapper: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    color: color.red,
  },
};
const EmptyVideoList = () => (
  <div style={emptyStyles.container}>
    <div style={emptyStyles.icon}>
      <ClockOutline />
    </div>
    <div style={emptyStyles.content}>
      <Heading
        level={3}
        size="medium"
        weight="thick"
        override={emptyStyles.headline}
      >
        Add Some Videos
      </Heading>
      <p style={emptyStyles.text}>Find interesting videos and save them to your Watch List.</p>
      <Button rounded>Browse Channels</Button>
    </div>
  </div>
);

const VideoList = () => (
  <div>
    <TileGrid>
      {[1, 2, 3, 4, 5, 6].map(() => (
        <TileVideo
          className="Tile"
          heading={"Test Heading"}
          bullets={["On the Road", "Ep1"]}
          runtime={30000}
          actionIcon="Close"
          onClick={() => {}}
          style={{
            marginBottom: "64px",
          }}
          imageSrc="https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtMTQ2OTUyMjI2X2hpZ2guanBnU3VuIEZlYiAyNiAyMDE3IDE0OjMxOjIwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&h=520&w=697
  "
          layout="tile"
          href="/test"
        />
      ))}
    </TileGrid>
    <div style={videoStyles.buttonWrapper}>
      <Button
        color="transparent"
        border={false}
        customStyles={videoStyles.button}
        onClick={() => {}}
      >
        Clear All
      </Button>
    </div>
  </div>
);


const WatchLaterListModalContent = (videos = [1, 2, 3]) => (
  <div>
    {videos && videos.length > 0 ? (
      <VideoList />
    ) : (
      <EmptyVideoList />
    )}
  </div>
);

export default WatchLaterListModalContent;
