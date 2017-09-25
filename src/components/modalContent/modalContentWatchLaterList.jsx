import React from "react";
import PropTypes from "prop-types";
import WatchLaterList from "../watchLater/watchLaterList";
import WatchLaterEmptyList from "../watchLater/watchLaterEmptyList";

const ModalContentWatchLaterList = ({ videos, removeVideo, removeAll }) => (
  <div className="ModalContentWatchLaterList">
    {videos && videos.length ? (
      <WatchLaterList
        videos={videos}
        removeVideo={removeVideo}
        removeAll={removeAll}
      />
    ) : (
      <WatchLaterEmptyList />
    )}
  </div>
);

ModalContentWatchLaterList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
  removeVideo: PropTypes.func,
  removeAll: PropTypes.func,
};

export default ModalContentWatchLaterList;
