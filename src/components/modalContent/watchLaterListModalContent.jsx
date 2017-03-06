import React from "react";
import WatchLaterList from "../watchLaterList";
import EmptyVideoList from "../emptyVideoList";

const WatchLaterListModalContent = ({ videos, removeVideo }) => (
  <div>
    {videos && videos.length > 0 ? (
      <WatchLaterList videos={videos} removeVideo={removeVideo} />
    ) : (
      <EmptyVideoList />
    )}
  </div>
);

WatchLaterListModalContent.propTypes = {
  videos: React.PropTypes.arrayOf(React.PropTypes.object),
  removeVideo: React.PropTypes.func,
};

export default WatchLaterListModalContent;
