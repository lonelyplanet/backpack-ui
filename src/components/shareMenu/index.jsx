import React from "react";
import radium from "radium";
import ReactDOM from "react-dom";
import styles from "./styles";
import IconButton from "../iconButton";
import Flyout from "../flyout";
import ShareMenuItem from "./item";

class ShareMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      optionsHidden: true,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.shareContent = this.shareContent.bind(this);
    this.shareUrl = this.shareUrl.bind(this);
    this.calculateWindowPosition = this.calculateWindowPosition.bind(this);
    this.windowSettings = this.windowSettings.bind(this);
    this.openWindow = this.openWindow.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
  }

  toggleOptions() {
    this.setState({
      optionsHidden: !this.state.optionsHidden,
    });
  }

  handleClickOutside(event) {
    /* eslint-disable */
    const button = ReactDOM.findDOMNode(this._button);
    const menu = ReactDOM.findDOMNode(this._menu);
    /* eslint-enable */

    if (button.contains(event.target)) {
      return;
    } else if (!menu.contains(event.target) && !this.state.optionsHidden) {
      this.toggleOptions();
    }
  }

  handleKeydown(event) {
    if (event.keyCode === 27 && !this.state.optionsHidden) {
      this.toggleOptions();
    }
  }

  shareContent() {
    const { url, text } = this.props;

    return {
      text: encodeURIComponent(text),
      url: encodeURIComponent(url),
      via: "lonelyplanet",
    };
  }

  shareUrl() {
    const { url, text, via } = this.shareContent();

    return {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      email: `mailto:?subject=${text}&body=${url}`,
    };
  }

  calculateWindowPosition(windowDimension, popUpDimension) {
    return Math.round((windowDimension / 2) - (popUpDimension / 2));
  }

  windowSettings() {
    const windowSettings = {
      popUpWidth: 840,
      popUpHeight: 420,
      popUpLeft: 0,
      popUpTop: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    };

    windowSettings.popUpLeft = this.calculateWindowPosition(
      windowSettings.width,
      windowSettings.popUpWidth
    );

    windowSettings.popUpTop = windowSettings.height > windowSettings.popUpHeight
      ? this.calculateWindowPosition(
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

  openWindow(event) {
    const { windowOptions, windowSize } = this.windowSettings();

    if (event.currentTarget.dataset.network !== "email") {
      window.open(
        event.currentTarget.href,
        "share",
        `${windowOptions},${windowSize}`
      );
    }

    event.preventDefault();
  }

  render() {
    const { twitter, facebook, email } = this.shareUrl();

    const style = {
      container: [styles.container.base],
      options: [styles.options.base],
    };

    const position = {
      up: "below",
      down: "above",
      left: "right",
      right: "left",
    };

    const visibility = {
      true: "hidden",
      false: "visible",
    };

    const flyoutArrow = this.props.mobile ? "right" : "up";

    style.options.push(styles.options.position[position[flyoutArrow]]);

    style.options.push(
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .base,
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .position[position[flyoutArrow]]
    );

    return (
      <div
        className="ShareMenu"
        style={style.container}
      >
        <IconButton
          className="ShareMenu-button"
          icon="share"
          label="Share this article on Twitter, Facebook, or email"
          owns="share-menu-options"
          onClick={this.toggleOptions}
          ref={(node) => { this._button = node; }}
        />

        <div
          className="ShareMenu-options"
          id="share-menu-options"
          style={style.options}
          aria-hidden={this.state.optionsHidden}
          ref={(node) => { this._menu = node; }}
        >
          <Flyout arrow={flyoutArrow} fill>
            <ShareMenuItem
              network="twitter"
              href={twitter}
              label="Share on Twitter"
              onClick={this.openWindow}
            />

            <ShareMenuItem
              network="facebook"
              href={facebook}
              label="Share on Facebook"
              onClick={this.openWindow}
            />

            <ShareMenuItem
              network="email"
              href={email}
              label="Share by email"
            />
          </Flyout>
        </div>
      </div>
    );
  }
}

ShareMenu.propTypes = {
  /**
   * URL of page to share
   */
  url: React.PropTypes.string.isRequired,

  /**
   * Text to share
   */
  text: React.PropTypes.string,

  /**
   * Describe how the buttons should be aligned
   */
  alignment: React.PropTypes.oneOf([
    "",
    "centered",
  ]),

  /**
   * Whether or not the layout should be formatted for mobile screen sizes
   */
  mobile: React.PropTypes.bool,
};

ShareMenu.defaultProps = {
  url: "",

  text: "",

  alignment: "",

  mobile: true,
};

ShareMenu.styles = styles;

export default radium(ShareMenu);
