import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import { fontWeightMedium } from "../../styles/typography";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import NumberMarker from "../numberMarker/";
import createQAHook from "../../utils/createQAHook";

const styles = {
  linkContainer: {
    display: "flex",
    color: colors.textPrimary,
    alignItems: "stretch",
    textDecoration: "none",
    transition: `color ${timing.fast} ease`,
    ":hover": {
      color: colors.linkPrimary,
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
  },
  image: {
    width: "80px",
    height: "50px",
    backgroundSize: "cover",
    backgroundColor: colors.accentGray,
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  markerContianer: {
    transform: "translateX(-50%)",
  },
  reset: {
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: "16px",
    fontWeight: fontWeightMedium,
  },
  subtitle: {
    marginTop: "8px",
    fontWeight: fontWeightMedium,
    color: colors.accentGray,
    textTransform: "uppercase",
    fontSize: "11px",
  },
};

/**
 * SightsListItem component
 * @usage
 * <SightsListItem
 *   slug="/link"
 *   imgPath="/path"
 *   title="Text"
 *   subtitle="Text"
 *   markerNumber={1}
 *  />
 */
function SightsListItem({
  slug,
  imgPath,
  title,
  subtitle,
  markerNumber,
  onMouseEnter,
  onMouseLeave,
  qaHook,
}) {
  return (
    <a
      style={styles.linkContainer}
      href={slug}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid={qaHook ? createQAHook(title, "sight", "link") : null}
    >
      <div style={styles.imageContainer}>
        {imgPath && <div style={[styles.image, { backgroundImage: `url(${imgPath})` }]} />}
        <div style={styles.markerContianer}>
          <NumberMarker
            size="small"
            number={markerNumber}
          />
        </div>
      </div>

      <div style={styles.textContainer}>
        <h5 style={[styles.reset, styles.title]}>
          {title}
        </h5>

        <p style={[styles.reset, styles.subtitle]}>
          {subtitle}
        </p>
      </div>

    </a>
  );
}

SightsListItem.propTypes = {
  /**
   * Text label which is the Sight name
   */
  title: PropTypes.string.isRequired,

  /**
   * Text label which is the usually the Sights containing place
   */
  subtitle: PropTypes.string.isRequired,

  /**
   * Slug URL of the tag
   */
  slug: PropTypes.string.isRequired,

  /**
   *  URL of the image to display
   */
  imgPath: PropTypes.string,

  /**
   * Number to be displayed in the NumberMarker Component
   */
  markerNumber: PropTypes.number,
  /**
   * Function to fire on mouse enter
   */
  onMouseEnter: PropTypes.func,
  /**
   * Function to fire on mouse leave
   */
  onMouseLeave: PropTypes.func,
  /**
   * QA Hook
   */
  qaHook: PropTypes.bool,
};

SightsListItem.defaultProps = {
  title: "",

  subtitle: "",

  imgPath: "https://assets.staticlp.com/destinations-next/images/search-category-image-sights.jpg",

  style: null,

  qaHook: false,
};

SightsListItem.styles = styles;

export default radium(SightsListItem);
