import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Measure from "react-measure";
import Avatar from "../avatar";
import LocationLabel from "../locationLabel";
import Tag from "../tag";
import TagList from "../tagList";
import { Heading } from "../text";
import ProfileIntro from "../profileIntro";
import colors from "../../styles/colors";
import {
  fontSizeHeading7,
  fontSizeBodySmall,
  lineHeightHeading7,
  lineHeightReset,
} from "../../styles/typography";
import { textBodySmall } from "../../utils/typography";
import propTypes from "../../utils/propTypes";
import { urlRegex } from "../../utils/validations";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
      },
    };

    this.paragraphLineHeight = 24;
  }

  render() {
    const {
      name,
      intro,
      avatarSrc,
      website,
      location,
      interests,
      interestsLimit,
      style,
    } = this.props;

    const { width } = this.state.dimensions;

    // Change the layout based on the component's size
    const alignment = (width > 540) ? "left" : "center";

    const styles = {
      header: {
        center: {
          textAlign: "center",
        },

        left: {},
      },

      flexContainer: {
        center: {},

        left: {
          display: "flex",
          alignItems: "center",
        },
      },

      avatar: {
        center: {},

        left: {
          marginRight: "33px",
        },
      },

      textContainer: {
        center: {
          marginTop: "23px",
        },

        left: {},
      },

      locationLabel: {
        center: {
          marginTop: "10px",
        },

        left: {
          marginTop: "7px",
        },
      },

      heading: {
        lineHeight: lineHeightReset,
      },

      website: {
        default: {
          fontSize: `${fontSizeHeading7}px`,
          lineHeight: lineHeightReset,
        },

        center: {
          marginTop: "6px",
        },

        left: {
          marginTop: "8px",
        },
      },

      intro: {
        default: {
          marginTop: "37px",
        },

        center: {
          lineHeight: (this.paragraphLineHeight / fontSizeBodySmall),
        },

        left: {
          fontSize: `${fontSizeHeading7}px`,
          lineHeight: lineHeightHeading7,
        },
      },

      tagList: {
        center: {
          marginTop: "39px",
        },

        left: {
          marginTop: "31px",
        },
      },

      textBodySmall: Object.assign({}, {
        color: colors.textPrimary,
        marginBottom: 0,
        marginTop: 0,
      }, textBodySmall()),
    };

    const urlParser = (url) => {
      const parsed = urlRegex.exec(url);

      if (!parsed) return null;

      return {
        href: parsed[0],
        protocol: parsed[1],
        hostname: parsed[2],
        pathname: parsed[3],
      };
    };

    const websiteParser = urlParser(website);

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({
            dimensions: contentRect.bounds,
          });
        }}
      >
        {({ measureRef }) => (
          <header
            className="ProfileHeader"
            ref={measureRef}
            style={[
              styles.header[alignment],
              style,
            ]}
          >
            <div style={styles.flexContainer[alignment]}>
              {avatarSrc &&
                <Avatar
                  src={avatarSrc}
                  alt={`Avatar for user ${name}`}
                  size={80}
                  className="ProfileHeader-avatar"
                  style={styles.avatar[alignment]}
                />
              }

              <div style={styles.textContainer[alignment]}>
                {name &&
                  <Heading
                    level={1}
                    size={5}
                    weight="medium"
                    style={styles.heading}
                  >
                    {name}
                  </Heading>
                }

                {location &&
                  <LocationLabel style={styles.locationLabel[alignment]}>
                    {location}
                  </LocationLabel>
                }

                {websiteParser &&
                  <p
                    style={[
                      styles.textBodySmall,
                      styles.website.default,
                      styles.website[alignment],
                    ]}
                  >
                    <a
                      href={websiteParser.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`${websiteParser.hostname.replace("www.", "")}${websiteParser.pathname}`}
                    </a>
                  </p>
                }
              </div>
            </div>

            {intro &&
              <ProfileIntro
                maxLines={3}
                fontSize={
                  (alignment === "center" && fontSizeBodySmall) ||
                  (alignment === "left" && fontSizeHeading7)
                }
                lineHeight={this.paragraphLineHeight}
                style={[
                  styles.textBodySmall,
                  styles.intro.default,
                  styles.intro[alignment],
                ]}
              >
                {intro}
              </ProfileIntro>
            }

            {interests && interests.length > 0 &&
              <TagList
                style={styles.tagList[alignment]}
                limit={interestsLimit}
                rows={10}
              >
                {interests.map((interest) => (
                  <Tag key={interest}>{interest}</Tag>
                ))}
              </TagList>
            }
          </header>
        )}
      </Measure>
    );
  }
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  website: PropTypes.string,
  avatarSrc: PropTypes.string,
  location: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string),
  interestsLimit: PropTypes.number,
  style: propTypes.style,
};

ProfileHeader.defaultProps = {
  intro: "",
  website: "",
  avatarSrc: "",
  location: "",
  interests: [],
  style: null,
};

export default radium(ProfileHeader);
