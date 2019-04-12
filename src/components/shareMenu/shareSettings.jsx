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
    const isFacebook = url.indexOf("facebook.com") !== -1;
    const isPinterest = url.indexOf("pinterest.com") !== -1;
    const isReddit = url.indexOf("reddit.com") !== -1;
    const isWhatsApp = url.indexOf("whatsapp.com") !== -1;
    const isTwitter = url.indexOf("twitter.com") !== -1;
    const hasTwitterWidgets = typeof window !== "undefined" &&
      typeof window.__twttr !== "undefined" &&
      window.__twttr.widgets &&
      window.__twttr.widgets.init;
    const shouldOpenWindow = isFacebook ||
      isPinterest ||
      isReddit ||
      isWhatsApp ||
      (isTwitter && !hasTwitterWidgets);

    if (shouldOpenWindow) {
      window.open(
        url,
        "share",
        `${windowOptions},${windowSize}`,
      );
    } else {
      window.location = url;
    }
  }

  componentDidMount() {
    const { handleClipboardSuccess, handleClipboardError } = this.props;
    const shouldInitiateClipboard = typeof handleClipboardSuccess === "function" &&
      typeof handleClipboardError === "function";

    if (shouldInitiateClipboard) {
      this.initiateClipboard();
    }
  }

  initiateClipboard() {
    this.clipboard = new Clipboard(".shareCopy");
    this.clipboard.on("success", this.props.handleClipboardSuccess);
    this.clipboard.on("error", this.props.handleClipboardError);
  }

  formattedShareContent() {
    const {
      url,
      text,
      image,
      description,
      twitterContent,
      via,
      weChatQr,
    } = this.props.shareContent;

    return {
      text: encodeURIComponent(text),
      image: encodeURIComponent(image),
      description: encodeURIComponent(description),
      twitterContent: encodeURIComponent(twitterContent),
      url: encodeURIComponent(url),
      via,
      weChatQr,
    };
  }

  shareUrl() {
    const {
      url,
      text,
      image,
      description,
      twitterContent,
      via,
      weChatQr,
    } = this.formattedShareContent();

    const facebookAppId = "111537044496";

    const twitterText = twitterContent || `${description}&url=${url}&via=${via}`;

    return {
      twitter: `https://twitter.com/intent/tweet?text=${twitterText}`,
      facebook: `https://www.facebook.com/dialog/share?app_id=${facebookAppId}&display=popup&href=${url}`,
      facebookMessenger: `fb-messenger://share/?link=${url}&app_id=${facebookAppId}`,
      email: `mailto:?subject=${text}&body=${description}%0A%0A${url}`,
      pinterest: `https://www.pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${description}`,
      reddit: `https://www.reddit.com/submit/?url=${url}&title=${description}`,
      whatsapp: `https://api.whatsapp.com/send?text=${description}%0A%0A${url}`,
      weChat: weChatQr,
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
  handleClipboardSuccess: PropTypes.func,
  handleClipboardError: PropTypes.func,
  shareContent: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    twitterContent: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    via: PropTypes.string,
    weChatQr: PropTypes.string,
  }).isRequired,
};

ShareSettings.defaultProps = {
  handleClipboardSuccess: () => null,
  handleClipboardError: () => null,
};

export default ShareSettings;
