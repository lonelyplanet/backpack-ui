import React from "react";
import radium from "radium";
import ReactDOM from "react-dom";
import styles from "./styles";
import IconButton from "../iconButton";
import Heading from "../heading";
import SocialButton from "./item";


class SocialLinks extends React.Component {

  static openWindow(event) {
    const { windowOptions, windowSize } = SocialLinks.windowSettings();

    if (event.currentTarget.dataset.network !== "email") {
      window.open(
        event.currentTarget.href,
        "share",
        `${windowOptions},${windowSize}`
      );
    }

    event.preventDefault();
  }


  constructor() {
    super();

    this.shareContent = this.shareContent.bind(this);
    this.shareUrl = this.shareUrl.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  toggleOptions() {
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
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`,
      facebookmessenger: `fb-messenger://share/?link=${url}`,
      reddit: `http://www.reddit.com/submit/?url=${url}`,
      email: `mailto:?subject=${text}&body=${url}`,


    };
  }

  render() {
    const { twitter, facebook, email } = this.shareUrl();

    const style = {
      container: [styles.container.base],
      options: [styles.options.base],
    };

    return (
      <div
        className="ShareMenu"
        style={style.container}
      >
        <Heading size="tiny" weight="thick" caps>Share this article</Heading>

        <div
          className="ShareMenu-options"
          id="share-menu-options"
          style={style.options}
        >

          <SocialButton
            network="facebook"
            href={facebook}
            label="Share on Facebook"
            onClick={SocialLinks.openWindow}
          />
          <SocialButton
            network="twitter"
            href={twitter}
            label="Share on Twitter"
            onClick={SocialLinks.openWindow}
          />
          <SocialButton
            network="email"
            href={email}
            label="Share by email"
          />

        </div>
      </div>
    );
  }
}

SocialLinks.propTypes = {
  /**
   * URL of page to share
   */
  url: React.PropTypes.string.isRequired,

  /**
   * Text to share
   */
  text: React.PropTypes.string,

  /**
   * Whether or not the layout should be formatted for mobile screen sizes
   */
  mobile: React.PropTypes.bool,
};

SocialLinks.defaultProps = {
  url: "",

  text: "",

  alignment: "",

  mobile: true,
};

SocialLinks.styles = styles;

export default radium(SocialLinks);
