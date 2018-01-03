import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import capitalize from "lodash/capitalize";
import colors from "../../styles/colors";
import Link from "../link";
import mq from "../../styles/mq";
import { fontSizeHeading3, lineHeightHeading3 } from "../../styles/typography";
import { Heading, TextUppercase } from "../text";
import Strapline from "../strapline";
import { gutter, span } from "../../utils/grid";
import { blueLink } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

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

  heading: {
    base: {
      letterSpacing: "-1px",
      [`@media (max-width: ${mq.max[600]})`]: {
        fontSize: `${fontSizeHeading3}px`,
        lineHeight: lineHeightHeading3,
      },
    },
  },

  title: {
    base: {
      color: colors.accentRed,
      marginBottom: "14px",

      [`@media (min-width: ${mq.min[560]})`]: {
        display: "inline-block",
      },

      [`@media (min-width: ${mq.min[600]})`]: {
        marginBottom: "21px",
      },
    },
  },

  topChoice: {
    base: {
      color: colors.accentRed,
    },
  },

  strapline: {
    base: {
      marginTop: "13px",

      [`@media (max-width: ${mq.max[600]})`]: {
        paddingLeft: gutter("static"),
        paddingRight: gutter("static"),
      },

      [`@media (min-width: ${mq.min[600]})`]: {
        marginTop: "14px",
      },
    },
  },
};

const PageHeader = ({
  alignment,
  contained,
  topChoice,
  neighborhood,
  place,
  strapline,
  titleHref,
  title,
  heading,
  type,
  stars,
  style,
}) => {
  const TopChoiceText = topChoice && (
    <span key="topChoice">
      <em style={styles.topChoice.base}>Top choice</em>
    </span>
  );

  const TypeText = topChoice || stars > 0 ? type.toLowerCase() : _.capitalize(type);

  const PlaceText = (
    <span key="placeText">
      {neighborhood
        ? `${TypeText} in the ${neighborhood} neighbourhood`
        : `${TypeText} in ${place}`}
    </span>
  );

  const StarText = stars > 0 && <span key="starRating">{stars} star</span>;

  const straplineText = strapline || [TopChoiceText, " ", StarText, " ", PlaceText];

  const TitleContent = titleHref ? (
    <Link to={titleHref} style={blueLink()}>
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <header
      className="PageHeader"
      style={[
        styles.container.base,
        alignment && styles.container.alignment[alignment],
        contained && styles.container.contained,
        style,
      ]}
    >
      {title && <TextUppercase style={styles.title.base}>{TitleContent}</TextUppercase>}

      <Heading level={1} size={1} weight="medium" style={styles.heading.base}>
        {heading}
      </Heading>

      {(type || strapline) && (
        <div className="PageHeader-strapline" style={styles.strapline.base}>
          <Strapline size="small" parent="pageHeader">
            {straplineText}
          </Strapline>
        </div>
      )}
    </header>
  );
};

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
  alignment: PropTypes.oneOf(["", "center"]),

  /**
   * Whether or not to set a max width on the header
   */
  contained: PropTypes.bool,

  /**
   * Number of stars a poi has
   */
  stars: PropTypes.number,

  /**
   * Apply custom styles
   */
  style: propTypes.style,
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
  stars: 0,
  style: null,
};

export default radium(PageHeader);
