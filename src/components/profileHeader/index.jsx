import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import MarkdownRenderer from "react-markdown-renderer";
import cn from "classnames";
import Avatar from "../avatar";
import LocationLabel from "../locationLabel";
import Tag from "../tag";
import TagList from "../tagList";
import MoreLink from "../moreLink";
import { Heading } from "../text";
import colors from "../../styles/colors";
import {
  fontSizeHeading7,
  fontSizeBodySmall,
  lineHeightHeading7,
  lineHeightReset,
} from "../../styles/typography";
import { textBodySmall } from "../../utils/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      showReadMore: false,
    };

    this.maxLines = 3;
    this.paragraphLineHeight = 24;
    this.maxHeight = (this.paragraphLineHeight * this.maxLines);

    this.toggleReadMoreLink = this.toggleReadMoreLink.bind(this);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  componentDidMount() {
    if (this.props.intro) {
      window.addEventListener("resize", () => {
        setTimeout(() => {
          this.toggleReadMoreLink();
        }, 100);
      });

      this.toggleReadMoreLink();
    }
  }

  componentWillUnmount() {
    if (this.props.intro) {
      window.removeEventListener("resize", this.toggleReadMoreLink);
    }
  }

  toggleReadMoreLink() {
    // MarkdownRenderer wraps `props.intro` with `p` element, which is
    // needed to calculate the height of the text. If you remove
    // MarkdownRenderer, make sure to wrap `props.intro` with a `p`
    // element.
    const height = this.clampedText.querySelector("p").offsetHeight;

    this.setState({
      showReadMore: (height / this.paragraphLineHeight) > this.maxLines,
    });
  }

  toggleExpandedState() {
    this.setState({
      expanded: !this.state.expanded,
    });
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
      alignment,
      style,
    } = this.props;

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
          marginBottom: "10px",
        },

        left: {
          marginBottom: "7px",
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

      bio: {
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

    const lineHeight = (alignment === "center" && (this.paragraphLineHeight / fontSizeBodySmall)) ||
      (alignment === "left" && lineHeightHeading7);

    const markup = (htmlContent) => ({ __html: htmlContent });

    const dangerousStyles = `
      .ProfileHeader .ClampedText img,
      .ProfileHeader .ClampedText video,
      .ProfileHeader .ClampedText iframe {
        display: none !important;
      }

      .ProfileHeader .ClampedText:not(.expanded) {
        display: block;
        display: -webkit-box;
        height: calc(1em * ${lineHeight} * ${this.maxLines});
        line-height: ${lineHeight};
        overflow: hidden;
        padding: 0;
        position: relative;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${this.maxLines};
      }

      .ProfileHeader .ClampedText:not(.expanded)::after {
        background: linear-gradient(to right, ${rgba(colors.bgPrimary, 0)}, ${rgba(colors.bgPrimary, 1)} 75%);
        bottom: 0;
        content: "…";
        display: block;
        height: calc(1em * ${lineHeight});
        position: absolute;
        right: 0;
        text-align: right;
        width: 10%;
      }

      @supports (-webkit-line-clamp: ${this.maxLines}) {
        .ProfileHeader .ClampedText:not(.expanded)::after {
          display: none !important;
        }
      }
    `;

    return (
      <header
        className="ProfileHeader"
        style={[
          styles.header[alignment],
          style,
        ]}
      >
        <style
          dangerouslySetInnerHTML={markup(dangerousStyles)}
        />

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
            {location &&
              <LocationLabel style={styles.locationLabel[alignment]}>
                {location}
              </LocationLabel>
            }

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

            {website &&
              <p
                style={[
                  styles.textBodySmall,
                  styles.website.default,
                  styles.website[alignment],
                ]}
              >
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website
                    .replace("https://", "")
                    .replace("http://", "")
                    .replace("www.", "")
                  }
                </a>
              </p>
            }
          </div>
        </div>

        {intro &&
          <div
            style={[
              styles.textBodySmall,
              styles.bio.default,
              styles.bio[alignment],
            ]}
          >
            <div
              className={cn("ClampedText", this.state.expanded && "expanded")}
              ref={node => { this.clampedText = node; }}
            >
              {/*
                Wrap {intro} with `p` and delete this comment
                **if** MarkdownRenderer is removed
              */}
              <MarkdownRenderer
                markdown={intro}
              />
            </div>

            {this.state.showReadMore &&
              <MoreLink
                caps
                size="small"
                hideIcon
                onClick={this.toggleExpandedState}
              >
                {this.state.expanded ? "Read less" : "Read more"}
              </MoreLink>
            }
          </div>
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
  alignment: PropTypes.oneOf(["center", "left"]),
  style: propTypes.style,
};

ProfileHeader.defaultProps = {
  intro: "",
  website: "",
  avatarSrc: "",
  location: "",
  interests: [],
  alignment: "center",
  style: null,
};

export default radium(ProfileHeader);
