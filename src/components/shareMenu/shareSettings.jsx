import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import ClipboardWrapper from "./clipboardWrapper";

class ShareSettings extends React.Component {
  static calculateWindowPosition(windowDimension, popUpDimension) {
    return Math.round((windowDimension / 2) - (popUpDimension / 2));
  }

  static windowSettings() {
    const windowSettings = {
      popUpWidth: 840,
      popUpHeight: 420,
      popUpLeft: 0,
      popUpTop: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    };

    windowSettings.popUpLeft = ShareSettings.calculateWindowPosition(
      windowSettings.width,
      windowSettings.popUpWidth,
    );

    windowSettings.popUpTop = windowSettings.height > windowSettings.popUpHeight
      ? ShareSettings.calculateWindowPosition(
        windowSettings.height,
        windowSettings.popUpHeight,
      ) : 0;

    windowSettings.windowOptions = "toolbar=no,"
      + "menubar=no,"
      + "location=yes,"
      + "resizable=no,"
      + "scrollbars=yes";

    windowSettings.windowSize = `width=${windowSettings.popUpWidth},`
      + `height=${windowSettings.popUpHeight},`
      + `top=${windowSettings.popUpTop},`
      + `left=${windowSettings.popUpLeft}`;

    return windowSettings;
  }

  static openShareWindow(url) {
    const { windowOptions, windowSize } = ShareSettings.windowSettings();
    window.open(
      url,
      "share",
      `${windowOptions},${windowSize}`,
    );
  }

  componentDidMount() {
    this.initiateClipboard();
  }

  initiateClipboard() {
    this.clipboard = new Clipboard(".shareCopy");
    this.clipboard.on("success", this.props.handleClipboardSuccess);
    this.clipboard.on("error", this.props.handleClipboardError);
  }

  formattedShareContent() {
    const { url, text, image, description, via } = this.props.shareContent;

    return {
      text: encodeURIComponent(text),
      image: encodeURIComponent(image),
      description: encodeURIComponent(description),
      url: encodeURIComponent(url),
      via,
    };
  }

  shareUrl() {
    const { url, text, image, description, via } = this.formattedShareContent();

    return {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      email: `mailto:?subject=${text}&body=${url}`,
      pinterest: `http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${description}`,
      whatsapp: `whatsapp://send?text=${text}%0A%0A${url}`,
    };
  }

  render() {
    const socialUrls = this.shareUrl();
    const socialActions = Object.keys(socialUrls).reduce((acc, curr) => {
      acc[curr] = () => ShareSettings.openShareWindow(socialUrls[curr]);
      return acc;
    }, {});

    return this.props.children(socialActions, socialUrls, ClipboardWrapper);
  }
}

ShareSettings.propTypes = {
  children: PropTypes.func.isRequired,
  handleClipboardSuccess: PropTypes.func.isRequired,
  handleClipboardError: PropTypes.func.isRequired,
  shareContent: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    via: PropTypes.string,
  }).isRequired,
};

ShareSettings.defaultProps = {
  handleClipboardSuccess: () => null,
  handleClipboardError: () => null,
};

export default ShareSettings;
