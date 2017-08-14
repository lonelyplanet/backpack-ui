import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { Link } from "react-router";
import capitalize from "lodash/capitalize";
import settings from "../../../settings.json";
import Heading from "../heading";
import Strapline from "../strapline";
import BookmarkButton from "../bookmarkButton";
import { gutter, span } from "../../utils/grid";
import { blueLink } from "../../utils/mixins";

const _ = { capitalize };

const styles = {
  container: {
    base: {
      position: "relative",
    },

    alignment: {
      center: {
        textAlign: "center",
      },
    },

    contained: {
      maxWidth: span(10, "static"),
    },
  },

  content: {
    base: {},

    bookmark: {
      display: "inline-block",
    },
  },

  title: {
    base: {
      marginBottom: "14px",

      [`@media (min-width: ${settings.media.min["560"]})`]: {
        display: "inline-block",
      },

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginBottom: "22px",
      },
    },
  },

  topChoice: {
    base: {
      color: settings.color.red,
    },
  },

  bookmark: {
    base: {
      display: "inline-block",
      marginLeft: "8px",
      verticalAlign: "4px",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginLeft: "10px",
        verticalAlign: "30px",
      },
    },
  },

  strapline: {
    base: {
      marginTop: "12px",

      [`@media (max-width: ${settings.media.max["600"]})`]: {
        paddingLeft: gutter("static"),
        paddingRight: gutter("static"),
      },

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginTop: "5px",
      },
    },
  },
};

/**
 * PageHeader component
 */
class PageHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      marked: false,
    };

    this._bookmarkOnClick = this._bookmarkOnClick.bind(this);
  }

  _bookmarkOnClick() {
    this.setState({
      marked: !this.state.marked,
    });
  }

  render() {
    const {
      alignment,
      contained,
      topChoice,
      neighborhood,
      place,
      strapline,
      titleHref,
      title,
      heading,
      bookmark,
      type,
      stars,
    } = this.props;

    const TopChoiceText = topChoice && (
      <span key="topChoice">
        <em style={styles.topChoice.base}>Top choice</em>
      </span>
    );

    const TypeText = (topChoice || stars > 0) ? type.toLowerCase() : _.capitalize(type);

    const PlaceText = (
      <span key="placeText">
        {neighborhood ?
          `${TypeText} in the ${neighborhood} neighbourhood` :
          `${TypeText} in ${place}`}
      </span>
    );

    const StarText = stars > 0 && (
      <span key="starRating">
        {stars} star
      </span>
    );

    const straplineText = strapline || [TopChoiceText, " ", StarText, " ", PlaceText];

    const TitleContent = titleHref ? (
      <Link to={titleHref} style={blueLink()}>
        {title}
      </Link>
    ) : title;

    return (
      <header
        className="PageHeader"
        style={[
          styles.container.base,
          alignment && styles.container.alignment[alignment],
          contained && styles.container.contained,
        ]}
      >
        {title &&
          <Heading
            level={6}
            size="tiny"
            weight="thick"
            importance="alert"
            override={styles.title.base}
            caps
          >
            {TitleContent}
          </Heading>
        }

        <Heading
          level={1}
          size="huge"
          weight="thick"
          importance="high"
        >
          {heading}

          {bookmark &&
            <div
              className="PageHeader-bookmark"
              style={styles.bookmark.base}
            >
              <BookmarkButton
                onClick={this._bookmarkOnClick}
                marked={this.state.marked}
                size="large"
              />
            </div>
          }
        </Heading>

        {(type || strapline) &&
          <div
            className="PageHeader-strapline"
            style={styles.strapline.base}
          >
            <Strapline
              size="small"
              parent="pageHeader"
            >
              {straplineText}
            </Strapline>
          </div>
        }
      </header>
    );
  }
}

PageHeader.propTypes = {
  /**
   * Text for the heading
   */
  heading: PropTypes.string.isRequired,

  /**
   * Small title
   */
  title: PropTypes.string,

  /**
   * URL for small title
   */
  titleHref: PropTypes.string,

  /**
   * Show the top choice text
   */
  topChoice: PropTypes.bool,

  /**
   * Override the strapline
   */
  strapline: PropTypes.string,

  /**
   * Type of POI
   */
  type: PropTypes.string,

  /**
   * Neighborhood where the POI is located
   */
  neighborhood: PropTypes.string,

  /**
   * Where the POI is located, if neighborhood is null
   */
  place: PropTypes.string,

  /**
   * Alignment for header text
   */
  alignment: PropTypes.oneOf([
    "",
    "center",
  ]),

  /**
   * Whether or not to set a max width on the header
   */
  contained: PropTypes.bool,

  /**
   * Whether or not to show the bookmark button
   */
  bookmark: PropTypes.bool,

  /**
   * Number of stars a poi has
   */
  stars: PropTypes.number,
};

PageHeader.defaultProps = {
  title: "",

  titleHref: "",

  topChoice: false,

  type: "",

  neighborhood: "",

  place: "",

  alignment: "",

  contained: false,

  bookmark: false,

  stars: 0,
};

PageHeader.styles = styles;

export default radium(PageHeader);
