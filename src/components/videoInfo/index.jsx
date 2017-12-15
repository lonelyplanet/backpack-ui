import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Heading from "../heading";
import Link from "../link";
import SocialIconButton from "../socialIconButton";
import colors from "../../styles/colors";
import media from "../../styles/mq";
import timing from "../../styles/timing";
import {
  fontWeightLight,
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
      height: "0px",
      transition: `opacity ${timing.default} linear`,
    },
    visible: {
      opacity: 1,
      height: "auto",
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
      borderBottomColor: "#474747",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      marginBottom: "45px",

      [`@media (max-width: ${media.max["480"]})`]: {
        marginBottom: "0px",
      },
    },
  },

  article: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingBottom: gutter("static"),
  },

  heading: {
    default: {
      fontSize: fontSizeHeading4,
      lineHeight: lineHeightHeading4,
      paddingRight: "245px",

      [`@media (max-width: ${media.max["960"]})`]: {
        fontSize: fontSizeHeading5,
        lineHeight: lineHeightHeading5,
        paddingRight: "0px",
      },

      [`@media (max-width: ${media.max["480"]})`]: {
        fontSize: fontSizeHeading7,
        lineHeight: lineHeightHeading7,
        paddingRight: "0px",
        letterSpacing: "-0.5px",
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
    marginTop: "24px",
    marginBottom: "24px",
    fontWeight: fontWeightLight,
    fontSize: fontSizeBodyArticleSmall,
    lineHeight: lineHeightBodyArticleSmall,

    [`@media (max-width: ${media.max["960"]})`]: {
      fontSize: fontSizeBodySmall,
      lineHeight: lineHeightBodySmall,
      marginTop: "16px",
      marginBottom: "16px",
    },
  },

  data: {
    fontSize: fontSizeUppercase,
    fontWeight: 400,
    textTransform: "uppercase",
    lineHeight: 1.7,
    letterSpacing: "0.05px",
  },

  dataLabel: {
    color: colors.accentGray,
    marginRight: "8px",
    textTransform: "none",
    fontStyle: "italic",
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
      top: 0,
      right: 0,
    },
  },

  socialLinkDesktop: {
    marginLeft: "16px",
    marginBottom: "16px",
    float: "right",
  },

  socialLinksMobile: {
    default: {
      paddingTop: gutter("static"),
      paddingBottom: gutter("static"),
      borderStyle: "solid",

      borderBottomWidth: "1px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",

      [`@media (min-width: ${media.min["480"]})`]: {
        display: "none",
      },
    },
    light: {
      borderTopWidth: "1px",
      borderColor: "rgb(228, 228, 228)",
    },
    dark: {
      borderColor: "#474747",
      borderTopWidth: "0px",
      marginBottom: gutter("static"),
    },
  },

  socialLinkMobile: {
    marginRight: "16px",
  },

  socialLinksText: {
    default: {
      fontSize: fontSizeUppercase,
      lineHeight: lineHeightUppercase,
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.05px",
      paddingBottom: gutter("static", 1, 0.5),
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
      marginLeft: gutter("static"),
      paddingLeft: gutter("static"),
      paddingRight: gutter("static"),

      [`@media (max-width: ${media.max["720"]})`]: {
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: gutter("static"),
        borderLeftWidth: "0px",
      },
    },
    light: {
    },
    dark: {
      borderLeftColor: "#474747",
      borderLeftStyle: "solid",
      borderLeftWidth: "1px",
    },
  },

};

class VideoInfo extends React.Component {

  constructor(props) {
    super(props);

    this.onClickFacebook = this.onClickFacebook.bind(this);
    this.onClickFacebookMessenger = this.onClickFacebookMessenger.bind(this);
    this.onClickTwitter = this.onClickTwitter.bind(this);
    this.onClickWhatsApp = this.onClickWhatsApp.bind(this);
  }

  onClickFacebook() {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const appId = "111537044496";
    const display = "popup";
    const href = encodeURIComponent(videoUrl);
    const url = `https://www.facebook.com/dialog/share?app_id=${appId}&display=${display}&href=${href}`;
    window.open(url, "_blank", "width=555,height=655");
  }

  onClickFacebookMessenger() {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const appId = "111537044496";
    const href = encodeURIComponent(videoUrl);
    const url = `fb-messenger://share?link=${href}&app_id=${appId}`;
    window.open(url);
  }

  onClickTwitter() {
    const { video } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const href = encodeURIComponent(videoUrl);
    const text = encodeURIComponent(video.name);
    const via = "lonelyplanet";
    const url = `https://twitter.com/share?url=${href}&via=${via}&text=${text}`;
    window.open(url, "_blank", "width=500,height=300");
  }

  onClickWhatsApp() {
    const { video, mobile } = this.props;
    const videoUrl = video.url.startsWith("http") ? video.url : `https://www.lonelyplanet.com${video.url}`;
    const text = encodeURIComponent(`${video.name} ${videoUrl}`);
    const url = mobile ? `whatsapp://send?text=${text}` : `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, "_blank");
  }

  render() {
    const { video, theme, mobile, headingLevel, visible } = this.props;

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
                    {video.host && <span>
                      <span style={styles.dataLabel}>Host:</span>
                        {video.host}
                      </span>
                    }
                    {video.director && video.host &&
                      <span style={styles.dataDivider}>|</span>
                    }
                    {video.director && <span>
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
  visible: PropTypes.bool,
};

VideoInfo.defaultProps = {
  theme: "light",
  headingLevel: 2,
  visible: true,
};

export default radium(VideoInfo);
