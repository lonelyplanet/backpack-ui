import React from "react";
import radium from "radium";
import { Link } from "react-router";
import settings from "../../../settings.json";
import { gutter } from "../../utils/grid";
import font from "../../utils/font";
import { rgb, lighten } from "../../utils/color";
import Heading from "../heading";
import { Play } from "../icon";

const styles = {
  container: {
  },
};

class VideoEmbed extends React.Component {
  constructor(props) {
    super(props);

    this.accountId = "5104226627001";
    this.playerId = "default";
    this.playerId360 = "HkUmgIl6";

    this.state = {
      videoId: props.videoId,
      videoIs360: props.videoIs360,
    };
  }

  render () {
    const { videoId, videoIs360 } = this.state;

    // if (!videoIs360) {
      return (
        <div className="VideoEmbed" style={styles.container}>
          <video
            data-video-id={videoId}
            data-account={this.accountId}
            data-player={this.playerId}
            data-embed="default"
            class="video-js"
            controls>
          </video>
          <script src="//players.brightcove.net/{this.accountId}/{this.playerId}_default/index.min.js"></script>
        </div>
      );
    // }
    // else {
    //   return (
    //     <div className="VideoEmbed" style={styles.container}>
    //       <video
    //         data-video-id={videoId}
    //         data-account={this.accountId}
    //         data-player={this.playerId360}
    //         data-embed="default"
    //         class="video-js"
    //         controls>
    //       </video>
    //       <script src="//players.brightcove.net/{this.accountId}/{this.playerId360}_default/index.min.js"></script>
    //     </div>
    //   );
    // }
  }
}

VideoEmbed.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  videoIs360: React.PropTypes.boolean.isRequired,
};

VideoEmbed.defaultProps = {
  videoId: "",
  videoIs360: false,
};

VideoEmbed.styles = styles;

export default radium(VideoEmbed);
