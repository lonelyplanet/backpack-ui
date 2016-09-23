import React from "react";
import radium from "radium";
import truncate from "truncate";
import { color, media } from "rizzo-next/sass/settings.json";
import upperFirst from "lodash/upperFirst";
import { Link } from "react-router";
import Button from "../button";
import Price from "../price";
import Bookmark from "../bookmark";
import ReviewedBadge from "../reviewedBadge";
import Bullet from "../decoration/bullet";
import Placeholder from "../placeholder";
import Icon from "../icon";
import Tooltip from "../tooltip";
import { add, subtract, gutter, span, percentage } from "../../utils/grid";
import partnerActivityProviders
  from "../../../../../server/lib/open-planet/partnerActivityProviders";

const _ = { upperFirst };

const gridOffset = "1.8rem"; // the image is off the grid by this amount
const containerWidth = span(8, "static");
const imageWidth = add([span(1, "static"), gutter("static"), gridOffset], "static");
const contentWidth = subtract([span(7, "static"), gutter("static"), gridOffset], "static");
const infoWidth = subtract([span(6, "static"), gutter("static"), "1.8rem"], "static");
const priceWidth = add([span(1, "static"), gutter("static")], "static");

const styles = {
  container: {
    base: {
      position: "relative",
    },
  },

  image: {
    base: {
      float: "left",
      marginRight: percentage("15px", "335px"),
      overflow: "hidden",
      position: "relative",
      width: percentage("78px", "335px"),

      [`@media (min-width: ${media.min["768"]})`]: {
        marginRight: gutter("fluid", 8),
        width: percentage(imageWidth, containerWidth),
      },
    },

    img: {
      display: "block",
      width: "100%",
    },
  },

  content: {
    base: {
      float: "left",
      position: "relative",
      width: percentage("242px", "335px"),

      [`@media (min-width: ${media.min["768"]})`]: {
        width: percentage(contentWidth, containerWidth),
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        display: "flex",
      },
    },
  },

  info: {
    base: {
      [`@media (min-width: ${media.min["1024"]})`]: {
        float: "left",
        paddingRight: percentage(span(1, "static"), contentWidth),
        width: percentage(infoWidth, contentWidth),
      },
    },

    noFlexbox: {
      [`@media (min-width: ${media.min["1024"]}) and (max-width: ${1365 * 0.0625}em)`]: {
        float: "none",
        paddingRight: 0,
        width: "100%",
      },
    },
  },

  header: {
    base: {
      overflow: "hidden",
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
    },

    topChoice: {
      color: color.red,
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
      maxWidth: "90%",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "2.8rem",
        lineHeight: (34 / 28),
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

  location: {
    base: {
      fontSize: "1.4rem",
      lineHeight: 1.3,
      marginTop: ".9rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.8rem",
        marginTop: "2.1rem",
      },
    },
  },

  features: {
    base: {
      [`@media (max-width: ${media.max["768"]})`]: {
        display: "none",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        color: color.titleGray,
        fontSize: "1.4rem",
        lineHeight: 1,
        listStyle: "none",
        marginTop: "2.5rem",
      },
    },

    item: {
      display: "inline",
    },
  },

  description: {
    base: {
      color: color.titleGray,
      fontSize: "1.4rem",
      lineHeight: (24 / 14),
      marginBottom: "2.7rem",
      marginTop: ".9rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.8rem",
        lineHeight: (32 / 18),
        marginTop: "1.4rem",
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

  price: {
    base: {
      marginTop: "1.1rem",

      [`@media (max-width: ${media.max["768"]})`]: {
        display: "inline-block",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        marginTop: "2.5rem",
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        float: "left",
        textAlign: "right",
        width: priceWidth,
      },
    },

    noFlexbox: {
      [`@media (min-width: ${media.min["1024"]}) and (max-width: ${1365 * 0.0625}em)`]: {
        float: "none",
        textAlign: "left",
        width: "100%",
      },

      [`@media (min-width: ${1366 * 0.0625}em)`]: {
        textAlign: "right",
        width: percentage(priceWidth, contentWidth),
      },
    },

    callToBook: {
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: 1,
    },
  },
};

function ListItemBookable({
  title,
  slug,
  type,
  subtype,
  address,
  place,
  price,
  features,
  image,
  description,
  sponsored,
  topChoice,
  reviewed,
  bookmark,
  bookmarkSize,
  id,
  duration,
  durationInfo,
  provider,
  tourStart,
  tourEnd,
  tourMap,
  activityType,
  mobile,
  hidePrice,
  onShowPrices,
}) {
  let descriptionString;

  if (typeof description === "object") {
    descriptionString = () => {
      if (description.short_description) {
        return description.short_description;
      }
      return description.long_description;
    };
  }

  if (typeof description === "string") {
    descriptionString = truncate(description.replace(/(<([^>]+)>)/ig, ""), 115);
  }

  let durationString;

  if (typeof duration === "object" && durationInfo) {
    durationString = () => {
      if (duration.duration && duration.unit) {
        const unit = duration.duration === 1 ?
          duration.unit.replace(/s$/, "") :
          duration.unit;
        return `${duration.duration} ${unit}`;
      }
      return durationInfo;
    };
  }

  if (typeof description === "string") {
    descriptionString = truncate(description.replace(/(<([^>]+)>)/ig, ""), 115);
  }

  let hasFlexbox;

  if (typeof document !== "undefined") {
    hasFlexbox = document && document.documentElement.classList ?
      document.documentElement.classList.contains("flexbox") :
      new RegExp("(^| )flexbox( |$)", "gi").test(document.documentElement.className);
  }

  return (
    <div className="ListItem clearfix" id={id} style={styles.container.base}>
      <div className="ListItem-image" style={styles.image.base}>
        <Link to={slug} style={styles.image.img}>
          {image.path &&
            <img
              src={image.path}
              alt=""
              style={styles.image.img}
            />
          }

          {!image.path &&
            <Placeholder
              title={title}
              fontSize={50}
              aspectRatio={5 / 4}
            />
          }

          {reviewed &&
            <ReviewedBadge parent="listItem" />
          }
        </Link>
      </div>

      <div
        className="ListItem-content"
        style={styles.content.base}
      >
        <div
          className="ListItem-info"
          style={[
            styles.info.base,
            !hasFlexbox && styles.info.noFlexbox,
          ]}
        >
          <header className="ListItem-header" style={styles.header.base}>
            <div className="ListItem-category" style={styles.category.base}>
              {sponsored &&
                <span style={styles.category.sponsored}>
                  Sponsored
                </span>
              } {topChoice &&
                <span style={styles.category.topChoice}>
                  Top Choice
                </span>
              } {subtype} {place.name &&
                <span style={styles.category.location}> in {place.name}</span>
              }
            </div>

            <h2 className="ListItem-title" style={styles.title.base}>
              <Link to={slug} style={{ color: "inherit" }}>
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

          {description && !type === "sleeping" &&
            <div className="ListItem-description" style={styles.description.base}>
              <div
                style={styles.description.clamp}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          }

          {address.street && place.name &&
            <div className="ListItem-location" style={styles.location.base}>
              {address.street}
              <Bullet space="both" color={color.detailHeaderSmall} />
              {place.name}
            </div>
          }

          {activityType === "tours" && provider === partnerActivityProviders.gadventures.id &&
            <div className="ListItem-location" style={styles.location.base}>
              {(tourStart && tourEnd) &&
                <Link to={slug} style={{ color: "inherit" }}>
                  {!mobile &&
                    <Icon
                      name="pin"
                      style={{
                        height: "11px",
                        marginRight: `${7 / 18}em`,
                        marginTop: `${3 / 18}em`,
                        verticalAlign: "top",
                        width: "11px",
                      }}
                    />
                  }
                  {!mobile && tourMap &&
                    <Tooltip
                      label={`${tourStart} to ${tourEnd}`}
                      flyout={{
                        arrow: "down",
                        size: "medium",
                        removePadding: true,
                        shadow: "large",
                        style: {
                          bottom: "40px",
                          left: 0,
                          position: "absolute",
                        },
                      }}
                    >
                      <img
                        src={tourMap}
                        alt=""
                        width={290}
                        style={{ display: "block" }}
                      />
                    </Tooltip>
                  }
                  {(mobile || !tourMap) &&
                    <span>{tourStart} to {tourEnd}</span>
                  }
                </Link>
              }
            </div>
          }

          {!mobile && activityType === "activities" &&
            <div className="ListItem-description" style={styles.description.base}>
              <div style={styles.description.clamp}>
                {descriptionString()}
              </div>
            </div>
          }

          {features.length > 0 &&
            <ul className="ListItem-features" style={styles.features.base}>
              {features.map((item, i) => (
                <li style={styles.features.item} key={i}>
                  {_.upperFirst(item)}
                  {i !== features.length - 1 &&
                    <Bullet space="both" color={color.detailHeaderSmall} />
                  }
                </li>
              ))}
            </ul>
          }
        </div>

        {!hidePrice && price.amount &&
          <div
            className="ListItem-price"
            style={[styles.price.base, !hasFlexbox && styles.price.noFlexbox]}
          >
            <Price
              amount={price.amount}
              rate={type === "partner_activity" ? durationString() : price.rate}
              parent="listItem"
              emphasized
            />
          </div>
        }

        {hidePrice &&
          <div
            className="ListItem-price"
            style={[styles.price.base, !hasFlexbox && styles.price.noFlexbox]}
          >
            <Button
              color="white"
              size="small"
              onClick={onShowPrices}
              useBorder
            >
              Show price
            </Button>
          </div>
        }
      </div>
    </div>
  );
}

ListItemBookable.propTypes = {
  /**
   * The name of the POI
   * key: name
   */
  title: React.PropTypes.string.isRequired,

  /**
   * The URL slug of the POI; constructed via parent (pois/{id})
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * The type of POI
   * key: poi_type
   */
  type: React.PropTypes.string.isRequired,

  /**
   * The subtype of POI; i.e. Museum
   * key: subtypes[0]
   * partner-activities key: canonical_category
   */
  subtype: React.PropTypes.string.isRequired,

  /**
   * The address data for the POI
   * key: address.street
   */
  address: React.PropTypes.object.isRequired,

  /**
   * The place data for the POI; required keys are name and type
   */
  place: React.PropTypes.object.isRequired,

  /**
   * Price object for the POI; requires amount and rate keys
   * key: price_string
   * partner-activities key: minimum_price.formatted_amount
   */
  price: React.PropTypes.object,

  /**
   * A short list of features; limited to three
   */
  features: React.PropTypes.array,

  /**
   * Image src for the POI; required keys are path and orientation
   * partner-activities key: links.image
   */
  image: React.PropTypes.object,

  /**
   * Description for POI
   * key: review.essential, review.extension
   * partner-activities key: descriptions.short_description, descriptions.long_description
   */
  description: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),

  /**
   * Add a "sponsored" label
   */
  sponsored: React.PropTypes.bool,

  /**
   * Add a "top choice" label
   */
  topChoice: React.PropTypes.bool,

  /**
   * If the POI has been reviewed by Lonely Planet staff
   */
  reviewed: React.PropTypes.bool,

  /**
   * If list item is able to be bookmarked
   */
  bookmark: React.PropTypes.bool,

  /**
   * Size of bookmark component
   */
  bookmarkSize: React.PropTypes.oneOf([
    "small",
    "large",
  ]),

  /**
   * Unique ID for item
   * key: id
   */
  id: React.PropTypes.string,

  /**
   * The length of the tour or activity; partner activity only
   * partner-activities key: duration_string
   */
  duration: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),

  /**
   * Difficulty or skill level of the tour or activity; partner activity only
   * partner-activities key: difficulty.description
   */
  difficulty: React.PropTypes.string,

  /**
   * Minimum, maximum and average group size of the tour or activity; partner activity only
   * partner-activities key: group_size.minimum_size, group_size.average_size,
   * group_size.maximum_size
   */
  groupSize: React.PropTypes.object,

  /**
   * Provider name of the tour or activity; partner activity only
   * partner-activities key: provider
   */
  provider: React.PropTypes.string,

  /**
   * City name where the tour or activity begins; partner activity only
   * partner-activities key: departure_info
   */
  tourStart: React.PropTypes.string,

  /**
   * City name where the tour or activity begins; partner activity only
   * partner-activities key: return_info
   */
  tourEnd: React.PropTypes.string,

  /**
   * Image URL of the tour or activity; partner activity only
   * partner-activities key: links.map
   */
  tourMap: React.PropTypes.string,

  /**
   * Booking URL of the tour or activity; partner activity only
   * partner-activities key: links.booking
   */
  bookingUrl: React.PropTypes.string,

  /**
   * String to determine whether to show activity or tour info
   */
  activityType: React.PropTypes.string,

  /**
   * Default string for duration
   */
  durationInfo: React.PropTypes.string,

  /**
   * Is the mobile layout active?
   */
  mobile: React.PropTypes.bool,

  /**
   * Hide price and display "Show price" button instead; used with availability
   */
  hidePrice: React.PropTypes.bool,

  /**
   * Method to run to show price; used in tandem with `hidePrice`
   */
  onShowPrices: React.PropTypes.func,
};

ListItemBookable.defaultProps = {
  title: "",

  slug: "",

  type: "",

  subtype: "",

  address: {},

  place: {},

  price: {},

  features: [],

  image: {},

  description: "",

  sponsored: false,

  topChoice: false,

  reviewed: false,

  bookmark: false,

  bookmarkSize: "small",

  id: "",

  duration: "",

  difficulty: "",

  groupSize: {},

  provider: "",

  tourStart: "",

  tourEnd: "",

  tourMap: "",

  bookingUrl: "",

  activityType: "",

  durationInfo: "",

  mobile: false,

  hidePrice: false,

  onShowPrices: null,
};

ListItemBookable.styles = styles;

export default radium(ListItemBookable);
