import React from "react";
import radium from "radium";
import NumberMarker from "../numberMarker/";
import { color, timing, typography } from "../../../settings.json";

const styles = {
  linkContainer: {
    display: "flex",
    color: color.titleGray,
    alignItems: "stretch",
    textDecoration: "none",
    transition: `color ${timing.fast} ease`,
    ":hover": {
      color: color.lpBlue,
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
    backgroundColor: color.subtitleGray,
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
    margin: 0,
  },
  title: {
    fontSize: "16px",
    fontWeight: typography.fontWeightBold,
  },
  subtitle: {
    marginTop: "8px",
    fontWeight: typography.fontWeightBold,
    color: color.subtitleGray,
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
}) {
  return (
    <a style={styles.linkContainer} href={`/${slug}`}>
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
  title: React.PropTypes.string.isRequired,

  /**
   * Text label which is the usually the Sights containing place
   */
  subtitle: React.PropTypes.string.isRequired,

  /**
   * Slug URL of the tag
   */
  slug: React.PropTypes.string.isRequired,

  /**
   *  URL of the image to display
   */
  imgPath: React.PropTypes.string,

  /**
   * Number to be displayed in the NumberMarker Component
   */
  markerNumber: React.PropTypes.number,
};

SightsListItem.defaultProps = {
  title: "",

  subtitle: "",

  imgPath: "https://assets.staticlp.com/destinations-next/images/search-category-image-sights.jpg",

  style: null,
};

SightsListItem.styles = styles;

export default radium(SightsListItem);
