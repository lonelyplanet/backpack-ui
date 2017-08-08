import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import truncate from "truncate";
import moment from "moment";
import { Link } from "react-router";
import { color, media } from "../../../settings.json";
import Bookmark from "../bookmark";
import MoreLink from "../moreLink";
import { gutter, span, percentage } from "../../utils/grid";

const containerWidth = span(8, "static");
const imageWidth = span(2, "static");
const contentWidth = span(6, "static");

const styles = {
  image: {
    base: {
      position: "relative",
      width: percentage("78px", "335px"),

      [`@media (max-width: ${media.max["768"]})`]: {
        float: "right",
        marginTop: ".9rem",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        position: "absolute",
        right: 0,
        top: 0,
        width: percentage(imageWidth, containerWidth),
      },
    },

    img: {
      display: "block",
      float: "right",
    },
  },

  content: {
    base: {
      position: "relative",
    },
  },

  info: {
    base: {
      overflow: "hidden",
    },
  },

  header: {
    base: {
      overflow: "hidden",

      [`@media (min-width: ${media.min["768"]})`]: {
        marginRight: percentage(gutter("static"), containerWidth),
        width: percentage(contentWidth, containerWidth),
      },
    },
  },

  category: {
    base: {
      color: color.detailHeaderSmall,
      fontSize: "1rem",
      lineHeight: 1,
      marginBottom: ".5rem",
      textTransform: "uppercase",

      [`@media (max-width: ${media.max["768"]})`]: {
        letterSpacing: ".4px",
        marginTop: ".1rem",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.2rem",
        marginBottom: "1rem",
      },
    },

    sponsored: {
      color: color.orange,
      fontWeight: 600,
    },

    topChoice: {
      color: color.red,
      fontWeight: 600,
    },

    location: {
      [`@media (max-width: ${media.max["768"]})`]: {
        display: "none",
      },
    },
  },

  title: {
    base: {
      color: color.darkGray,
      float: "left",
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-1px",
      lineHeight: (24 / 20),
      margin: 0,
      maxWidth: "76%",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "2.8rem",
        lineHeight: (34 / 28),
        maxWidth: "100%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
    },
  },

  bookmark: {
    base: {
      [`@media (max-width: ${media.max["768"]})`]: {
        bottom: "-2rem",
        position: "absolute",
        right: "-.4rem",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        display: "inline-block",
        marginLeft: ".5rem",
        marginTop: ".3rem",
      },
    },
  },

  description: {
    base: {
      color: color.titleGray,
      float: "left",
      fontSize: "1.4rem",
      lineHeight: (24 / 14),
      marginTop: ".9rem",
      width: percentage("242px", "335px"),
      fontWeight: 300,

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.8rem",
        lineHeight: (32 / 18),
        marginRight: percentage(gutter("static"), containerWidth),
        marginTop: "1.4rem",
        width: percentage(contentWidth, containerWidth),
      },
    },

    clamp: {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
    },
  },

  link: {
    image: {
      [`@media (max-width: ${media.max["1024"]})`]: {
        display: "none",
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        marginTop: "2rem",
      },
    },

    description: {
      [`@media (max-width: ${media.max["768"]})`]: {
        marginTop: "1.2rem",
      },

      [`@media (min-width: ${media.min["768"]}) and (max-width: ${media.max["1024"]})`]: {
        marginTop: "1.9rem",
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        display: "none",
      },
    },
  },
};

function ListItem({
  title,
  slug,
  subtype,
  place,
  image,
  link,
  description,
  sponsored,
  topChoice,
  bookmark,
  bookmarkSize,
  ad,
  date,
  id,
  onClick,
}) {
  const shortDescription = typeof description === "string" &&
    truncate(description.replace(/(<([^>]+)>)/ig, ""), 215);

  const showLink = link.title && link.url;

  const ListItemLink = showLink && (
    <div className="ListItem-link" style={styles.link.image}>
      <MoreLink href={link.url} caps>
        {link.title}
      </MoreLink>
    </div>
  );

  return (
    <div className="ListItem" id={id}>
      <div className="ListItem-content" style={styles.content.base}>
        <header className="ListItem-header" style={styles.header.base}>
          <div className="ListItem-category" style={styles.category.base}>
            {date &&
              <time dateTime={moment(date).format("YYYY-MM-DD")}>
                {moment(date).format("D MMMM YYYY")}
              </time>
            }

            {!date && sponsored && ad &&
              <span style={styles.category.sponsored}>
                Sponsored
                {ad}
              </span>
            } {!date && topChoice &&
              <span style={styles.category.topChoice}>
                Top Choice
              </span>
            } {!date && subtype} {!date && place.name &&
              <span style={styles.category.location}> in {place.name}</span>
            }
          </div>

          <h2 className="ListItem-title" style={styles.title.base}>
            <Link to={`${slug}`} onClick={onClick} style={{ color: "currentColor" }}>
              {title}
            </Link>
          </h2>

          {bookmark &&
            <div className="ListItem-bookmark" style={styles.bookmark.base}>
              <Bookmark
                onClick={null}
                size={bookmarkSize}
              />
            </div>
          }
        </header>

        {description &&
          <div className="ListItem-info" style={styles.info.base}>
            <div className="ListItem-description" style={styles.description.base}>
              <div
                style={styles.description.clamp}
                dangerouslySetInnerHTML={{ __html: shortDescription }}
              />

              {showLink &&
                <div className="ListItem-link" style={styles.link.description}>
                  <MoreLink href={link.url} caps>
                    {link.title}
                  </MoreLink>
                </div>
              }
            </div>

            {image.path && showLink &&
              <div className="ListItem-image" style={styles.image.base}>
                <div style={styles.image.img}>
                  <Link to={`${slug}`} onClick={onClick} style={{ display: "block" }}>
                    <img
                      src={image.path}
                      alt=""
                    />
                  </Link>

                  {ListItemLink}
                </div>
              </div>
            }

            {image.path && !showLink &&
              <div className="ListItem-image" style={styles.image.base}>
                <Link to={`${slug}`} onClick={onClick} style={styles.image.img}>
                  <img src={image.path} alt="" />
                </Link>
              </div>
            }

            {!image.path && showLink &&
              <div
                className="ListItem-image"
                style={[
                  styles.image.base,
                  { paddingLeft: "20px" },
                ]}
              >
                {ListItemLink}
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

ListItem.propTypes = {
  /**
   * The name of the POI
   */
  title: PropTypes.string.isRequired,

  /**
   * The URL slug of the POI
   */
  slug: PropTypes.string.isRequired,

  /**
   * The subtype of POI; i.e. Museum
   */
  subtype: PropTypes.string.isRequired,

  /**
   * The place data for the POI; required keys are name and type
   */
  place: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,

  /**
   * Image src for the POI; required keys are path and orientation
   */
  image: PropTypes.shape({
    path: PropTypes.string,
    orientation: PropTypes.oneOf([
      "",
      "portrait",
      "landscape",
    ]),
  }),

  /**
   * Link to display under image; required keys are title and url
   */
  link: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),

  /**
   * Description for POI
   */
  description: PropTypes.string,

  /**
   * Add a "sponsored" label
   */
  sponsored: PropTypes.bool,

  /**
   * Add a "top choice" label
   */
  topChoice: PropTypes.bool,

  /**
   * If list item is able to be bookmarked
   */
  bookmark: PropTypes.bool,

  /**
   * Size of bookmark component
   */
  bookmarkSize: PropTypes.oneOf([
    "small",
    "large",
  ]),

  /**
   * Google DFP ad; sponsored must be true
   */
  ad: PropTypes.string,

  /**
   * Publish date for news article
   */
  date: PropTypes.string,

  /**
   * Unique ID for item
   */
  id: PropTypes.string,

  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  title: "",

  slug: "",

  type: "",

  subtype: "",

  place: {},

  image: {},

  link: {},

  description: "",

  sponsored: false,

  topChoice: false,

  bookmark: false,

  bookmarkSize: "small",

  ad: "",

  date: "",

  id: "",
};

ListItem.styles = styles;

export default radium(ListItem);
