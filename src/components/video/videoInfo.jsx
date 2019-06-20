import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import defer from "lodash/defer";
import Heading from "../heading";
import Link from "../link";
import SocialIconButton from "../socialIconButton";
import colors from "../../styles/colors";
import media from "../../styles/mq";
import timing from "../../styles/timing";
import {
  fontWeightLight,
  fontWeightRegular,
  fontSizeHeading4,
  lineHeightHeading4,
  fontSizeHeading5,
  lineHeightHeading5,
  fontSizeHeading7,
  lineHeightHeading7,
  fontSizeBodySmall,
  fontSizeBodyArticleSmall,
  lineHeightBodySmall,
  lineHeightBodyArticleSmall,
  fontSizeUppercase,
  lineHeightUppercase,
} from "../../styles/typography";
import { gutter } from "../../utils/grid";

const styles = {
  container: {
    default: {
      opacity: 0,
      transition: `opacity ${timing.default} linear`,
    },

    visible: {
      opacity: 1,
    },
  },

  section: {
    default: {
      overflow: "hidden",
      display: "flex",
      paddingTop: gutter("static"),

      [`@media (max-width: ${media.max["720"]})`]: {
        display: "block",
      },
    },

    light: {
      color: colors.textPrimary,
    },

    dark: {
      color: colors.textOverlay,
      borderBottom: "1px solid #474747",

      [`@media (min-width: ${media.min["480"]})`]: {
        marginBottom: "48px",
      },
    },
  },

  article: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingBottom: gutter("static"),
    position: "relative",
  },

  heading: {
    default: {
      fontSize: `${fontSizeHeading7}px`,
      lineHeight: lineHeightHeading7,

      [`@media (max-width: ${media.max["480"]})`]: {
        letterSpacing: "-0.5px",
      },

      [`@media (min-width: ${media.min["480"]})`]: {
        fontSize: `${fontSizeHeading5}px`,
        lineHeight: lineHeightHeading5,
      },

      [`@media (min-width: ${media.min["960"]})`]: {
        fontSize: `${fontSizeHeading4}px`,
        lineHeight: lineHeightHeading4,
        paddingRight: "245px",
      },
    },

    light: {
      color: colors.textPrimary,
    },

    dark: {
      color: colors.textOverlay,
    },
  },

  description: {
    fontSize: `${fontSizeBodySmall}px`,
    fontWeight: fontWeightLight,
    lineHeight: lineHeightBodySmall,
    marginBottom: "16px",
    marginTop: "16px",

    [`@media (min-width: ${media.min["960"]})`]: {
      fontSize: `${fontSizeBodyArticleSmall}px`,
      lineHeight: lineHeightBodyArticleSmall,
      marginBottom: "24px",
      marginTop: "24px",
    },
  },

  data: {
    fontSize: `${fontSizeUppercase}px`,
    fontWeight: fontWeightRegular,
    letterSpacing: "0.05px",
    lineHeight: (18 / fontSizeUppercase),
    textTransform: "uppercase",
  },

  dataLabel: {
    color: colors.accentGray,
    fontStyle: "italic",
    marginRight: "8px",
    textTransform: "none",
  },

  dataDivider: {
    color: colors.accentGray,
    marginLeft: "8px",
    marginRight: "8px",
  },

  socialLinksDesktop: {
    display: "none",
    marginLeft: "auto",
    paddingLeft: "24px",

    [`@media (min-width: ${media.min["480"]})`]: {
      display: "flex",
    },

    [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["960"]})`]: {
      flexDirection: "column",
    },

    [`@media (min-width: ${media.min["960"]})`]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  },

  socialLinkDesktop: {
    float: "right",
    marginLeft: "16px",
    marginBottom: "16px",
  },

  socialLinksMobile: {
    default: {
      borderStyle: "solid",
      borderBottomWidth: "1px",
      borderLeftWidth: 0,
      borderRightWidth: 0,
      paddingBottom: gutter("static"),
      paddingTop: gutter("static"),

      [`@media (min-width: ${media.min["480"]})`]: {
        display: "none",
      },
    },

    light: {
      borderTopWidth: "1px",
      borderColor: colors.borderPrimary,
    },

    dark: {
      borderColor: "#474747",
      borderTopWidth: 0,
      marginBottom: gutter("static"),
    },
  },

  socialLinkMobile: {
    marginRight: "16px",
  },

  socialLinksText: {
    default: {
      fontSize: `${fontSizeUppercase}px`,
      fontWeight: fontWeightRegular,
      letterSpacing: "0.05px",
      lineHeight: lineHeightUppercase,
      paddingBottom: gutter("static", 1, 0.5),
      textTransform: "uppercase",
    },

    light: {
      color: colors.textPrimary,
    },

    dark: {
      color: colors.textOverlay,
    },
  },

  adContainer: {
    default: {
      display: "none",

      [`@media (max-width: ${media.max["720"]})`]: {
        paddingBottom: gutter("static"),
        borderLeftWidth: 0,
      },

      [`@media (min-width: ${media.min["720"]})`]: {
        marginLeft: gutter("static"),
        paddingLeft: gutter("static"),
        paddingRight: gutter("static"),
      },
    },

    light: {},

    dark: {
      borderLeftColor: "#474747",
      borderLeftStyle: "solid",
      borderLeftWidth: "1px",
    },
  },
};

const facebookAppId = "111537044496";

class VideoInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: !props.fadeIn,
    };
  }

  componentDidMount() {
    defer(() => this.setState({ visible: true }));
  }

  onClickFacebook = () => {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const appId = facebookAppId;
    const display = "popup";
    const href = encodeURIComponent(videoUrl);
    const url = `https://www.facebook.com/dialog/share?app_id=${appId}&display=${display}&href=${href}`;
    window.open(url, "_blank", "width=555,height=655");
  }

  onClickFacebookMessenger = () => {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const appId = facebookAppId;
    const href = encodeURIComponent(videoUrl);
    const url = `fb-messenger://share?link=${href}&app_id=${appId}`;
    window.open(url);
  }

  onClickTwitter = () => {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const href = encodeURIComponent(videoUrl);
    const text = encodeURIComponent(video.name);
    const via = "lonelyplanet";
    const url = `https://twitter.com/share?url=${href}&via=${via}&text=${text}`;
    window.open(url, "_blank", "width=500,height=300");
  }

  onClickWhatsApp = () => {
    const { video, mobile } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const text = encodeURIComponent(`${video.name} ${videoUrl}`);
    const url = mobile ? `whatsapp://send?text=${text}` : `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, "_blank");
  }

  render() {
    const { video, theme, mobile, headingLevel } = this.props;
    const { visible } = this.state;

    return (
      <div
        className="VideoInfo"
        style={[
          styles.container.default,
          video && visible && styles.container.visible,
        ]}
      >
        {video &&
          <div>
            <Style
              scopeSelector=".VideoInfo"
              rules={{
                "#ad-logo > div": {
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  height: "100%",
                },
                a: theme === "dark" ? { color: "#41a4ef" } : {},
              }}
            />

            <section
              style={[
                styles.section.default,
                styles.section[theme],
              ]}
            >
              <article style={styles.article}>
                <div>
                  <Heading
                    level={headingLevel}
                    weight="thick"
                    tracking="tight"
                    override={{
                      ...styles.heading.default,
                      ...styles.heading[theme],
                    }}
                  >
                    {video.name}
                  </Heading>

                  {video.description &&
                    <p
                      style={styles.description}
                      dangerouslySetInnerHTML={{ __html: video.description }}
                    />
                  }

                  <p style={styles.data}>
                    {video.host &&
                      <span>
                        <span style={styles.dataLabel}>Host:</span>
                        {video.host}
                      </span>
                    }
                    {video.director && video.host &&
                      <span style={styles.dataDivider}>|</span>
                    }
                    {video.director &&
                      <span>
                        <span style={styles.dataLabel}>Director:</span>
                        {video.director}
                      </span>
                    }
                    {video.year && (video.director || video.host) &&
                      <span style={styles.dataDivider}>|</span>
                    }
                    {video.year}
                    {video.relatedChannels && video.relatedChannels.length &&
                      (video.director || video.host || video.year) &&
                      <span style={styles.dataDivider}>|</span>
                    }
                    {video.relatedChannels && video.relatedChannels.map((channel, index) => (
                      <span key={index}>
                        <Link
                          to={channel.url}
                          style={styles.data}
                        >
                          {channel.name}
                        </Link>
                        <span
                          style={[
                            styles.dataDivider,
                            index === video.relatedChannels.length - 1 ? { display: "none" } : {},
                          ]}
                        >|</span>
                      </span>
                    ))}
                  </p>
                </div>

                <div style={styles.socialLinksDesktop}>
                  <SocialIconButton
                    network="facebook"
                    onClick={this.onClickFacebook}
                    style={styles.socialLinkDesktop}
                  />

                  {mobile &&
                    <SocialIconButton
                      network="facebookMessenger"
                      onClick={this.onClickFacebookMessenger}
                      style={styles.socialLinkDesktop}
                    />
                  }

                  <SocialIconButton
                    network="twitter"
                    onClick={this.onClickTwitter}
                    style={styles.socialLinkDesktop}
                  />

                  <SocialIconButton
                    network="whatsapp"
                    onClick={this.onClickWhatsApp}
                    style={styles.socialLinkDesktop}
                  />
                </div>
              </article>

              <aside
                id="ad-logo"
                style={[
                  styles.adContainer.default,
                  styles.adContainer[theme],
                ]}
              />
            </section>

            <div
              style={[
                styles.socialLinksMobile.default,
                styles.socialLinksMobile[theme],
              ]}
            >
              <div
                style={[
                  styles.socialLinksText.default,
                  styles.socialLinksText[theme],
                ]}
              >
                Share this video:
              </div>
              <div>
                <SocialIconButton
                  network="facebook"
                  onClick={this.onClickFacebook}
                  style={styles.socialLinkMobile}
                />

                {mobile &&
                  <SocialIconButton
                    network="facebookMessenger"
                    onClick={this.onClickFacebookMessenger}
                    style={styles.socialLinkMobile}
                  />
                }

                <SocialIconButton
                  network="twitter"
                  onClick={this.onClickTwitter}
                  style={styles.socialLinkMobile}
                />

                <SocialIconButton
                  network="whatsapp"
                  onClick={this.onClickWhatsApp}
                  style={styles.socialLinkMobile}
                />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const channelShape = {
  name: PropTypes.string,
  url: PropTypes.string,
};

const videoShape = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  host: PropTypes.string,
  director: PropTypes.string,
  year: PropTypes.string,
  relatedChannels: PropTypes.arrayOf(PropTypes.shape(channelShape)),
};

VideoInfo.propTypes = {
  video: PropTypes.shape(videoShape),
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  mobile: PropTypes.bool,
  headingLevel: PropTypes.number,
  fadeIn: PropTypes.bool,
};

VideoInfo.defaultProps = {
  theme: "light",
  headingLevel: 2,
  fadeIn: false,
};

export default radium(VideoInfo);
