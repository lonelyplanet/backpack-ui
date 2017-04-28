import React, { Component, PropTypes } from "react";

class SocialShareContainer extends Component {
  static defineNetworks() {
    return {
      facebook: {
        name: "facebook",
        label: "Share on Facebook",
      },
      twitter: {
        name: "twitter",
        label: "Share on Twitter",
      },
      facebookMessenger: {
        name: "facebookMessenger",
        label: "Share on Messenger",
      },
      reddit: {
        name: "reddit",
        label: "Share on Reddit",
      },
      email: {
        name: "email",
        label: "Share by email",
      },
    };
  }

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

    windowSettings.popUpLeft = SocialShareContainer.calculateWindowPosition(
      windowSettings.width,
      windowSettings.popUpWidth
    );

    windowSettings.popUpTop = windowSettings.height > windowSettings.popUpHeight
      ? SocialShareContainer.calculateWindowPosition(
        windowSettings.height,
        windowSettings.popUpHeight
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

  static openWindow(event) {
    const { windowOptions, windowSize } = SocialShareContainer.windowSettings();
    const isFacebook = event.currentTarget.dataset.network === "facebook";
    const isReddit = event.currentTarget.dataset.network === "reddit";
    const isTwitter = event.currentTarget.dataset.network === "twitter";
    const shouldOpenWindow = isFacebook || isReddit || isTwitter;

    if (shouldOpenWindow) {
      window.open(
        event.currentTarget.href,
        "share",
        `${windowOptions},${windowSize}`
      );
    } else {
      window.location = event.currentTarget.href;
    }

    event.preventDefault();
  }

  constructor() {
    super();

    this.getData = this.getData.bind(this);
    this.networksToShow = this.networksToShow.bind(this);
  }

  getData() {
    const text = encodeURIComponent(this.props.text);
    const url = encodeURIComponent(this.props.url);
    const via = "lonelyplanet";
    const data = SocialShareContainer.defineNetworks();

    data.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    data.twitter.href = `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`;
    data.facebookMessenger.href = `fb-messenger://share/?link=${url}`;
    data.reddit.href = `http://www.reddit.com/submit/?url=${url}`;
    data.email.href = `mailto:?subject=${text}&body=${url}`;

    return data;
  }

  networksToShow() {
    const hiddenNetworks = this.props.hide;
    const networkData = this.getData();

    if (hiddenNetworks && hiddenNetworks.length) {
      for (let i = 0; i < hiddenNetworks.length; i += 1) {
        const name = networkData[hiddenNetworks[i]].name;

        delete networkData[name];
      }
    }

    return networkData;
  }

  render() {
    return (
      React.createElement(this.props.children, {
        networks: this.networksToShow(),
        onClick: SocialShareContainer.openWindow,
        ...this.props,
      })
    );
  }
}

SocialShareContainer.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  text: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  hide: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(SocialShareContainer.defineNetworks()))),
};

SocialShareContainer.defaultProps = {
  children: null,
  url: null,
  text: null,
  hide: null,
};

export default SocialShareContainer;
