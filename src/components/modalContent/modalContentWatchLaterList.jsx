import React, { PropTypes } from "react";
import WatchLaterList from "../watchLater/watchLaterList";
import WatchLaterEmptyList from "../watchLater/watchLaterEmptyList";

const ModalContentWatchLaterList = ({ videos, removeVideo }) => (
  <div className="ModalContentWatchLaterList">
    {videos && videos.length > 0 ? (
      <WatchLaterList videos={videos} removeVideo={removeVideo} />
    ) : (
      <WatchLaterEmptyList />
    )}
  </div>
);

ModalContentWatchLaterList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
  removeVideo: PropTypes.func,
};

export default ModalContentWatchLaterList;
