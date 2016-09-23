import React, { PropTypes } from "react";
import radium from "radium";
import Carousel from "react-slick";
import kebabCase from "lodash/kebabCase";
import { color } from "rizzo-next/sass/settings.json";
import PaginatorButton from "../paginatorButton";
import ExpandButton from "../expandButton";
import { rgb } from "../../utils/color";


const _ = { kebabCase };

const propTypes = {
  /**
   * Array of image paths
   */
  images: PropTypes.array.isRequired,

  /**
   * Width and height of the image
   */
  imageSize: PropTypes.array.isRequired,

  /**
   * Function called to go to the next slide; click handler is set via the
   * react-slick module
   * https://github.com/akiran/react-slick/blob/master/README.md#custom-nextprev-arrows
   */
  onNext: PropTypes.func.isRequired,

  /**
   * Function called to go to the previous slide; click handler is set via the
   * react-slick module
   * https://github.com/akiran/react-slick/blob/master/README.md#custom-nextprev-arrows
   */
  onPrev: PropTypes.func.isRequired,

  /**
   * Index of the starting slide; pass "null" to hide the buttonLabel
   */
  index: PropTypes.number.isRequired,

  /**
   * Options for react-slick module
   * https://github.com/akiran/react-slick/blob/master/README.md
   */
  options: PropTypes.object,

  /**
   * Function called to expand the full-screen gallery
   */
  onExpand: PropTypes.func,

  /**
   * Callback function called before the current index changes
   */
  beforeChange: PropTypes.func,

  /**
   * Callback function called after the current index changes
   */
  afterChange: PropTypes.func,

  /**
   * Whether or not to hide prev and next buttons
   */
  hideNavigation: PropTypes.bool,
};

const defaultProps = {
  images: [],

  imageSize: [],

  onNext: () => {},

  onPrev: () => {},

  index: 0,

  options: {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  },

  onExpand: null,

  beforeChange: null,

  afterChange: null,

  hideNavigation: false,
};

const styles = {
  container: {
    base: {
      backgroundColor: color.gray,
      position: "relative",
    },
  },

  image: {
    base: {
      display: "block",
      width: "100%",
    },

    hidden: {
      opacity: 0,
    },
  },

  expandButton: {
    base: {
      bottom: "12px",
      position: "absolute",
      right: "12px",
    },
  },

  paginationLabel: {
    base: {
      backgroundColor: `rgba(${rgb(color.black)}, .6)`,
      borderRadius: "1em",
      color: color.white,
      display: "block",
      fontSize: "8px",
      fontWeight: 600,
      lineHeight: 1,
      padding: `${5 / 8}em ${7.5 / 8}em ${3 / 8}em`,
      width: "auto",
    },
  },
};

function ImageCarousel({
  images,
  onNext,
  onPrev,
  index,
  options,
  imageSize,
  onExpand,
  beforeChange,
  afterChange,
  hideNavigation,
}) {
  const buttonLabel = index !== null && images.length > 1 ? (
    `${index + 1} / ${images.length}`
  ) : "";

  const parseImages = images.map((image) => {
    if (
      image.includes("lpbookingcom") ||
      image.includes("lphostelworld") ||
      image.includes("lpgadventures")
    ) {
      return (
        <div key={_.kebabCase(image)}>
          <div
            style={{
              backgroundImage: `url(${image.replace(/ /g, "%20")})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              paddingBottom: `${(imageSize[1] / imageSize[0]) * 100}%`,
              width: "100%",
            }}
          />
        </div>
      );
    }

    return (
      <img
        key={_.kebabCase(image)}
        src={image}
        alt=""
      />
    );
  });

  return images.length > 1 && (
    <div
      className="ImageCarousel"
      style={styles.container.base}
    >
      <Carousel
        {...options}
        beforeChange={beforeChange}
        afterChange={afterChange}
        prevArrow={!hideNavigation && <PaginatorButton
          direction="left"
          align="vertical"
          onClick={onPrev}
          offset
        />}
        nextArrow={!hideNavigation && <PaginatorButton
          direction="right"
          align="vertical"
          onClick={onNext}
          offset
        />}
      >
        {parseImages}
      </Carousel>

      {onExpand &&
        <div
          className="ImageCarousel-expandButton"
          style={styles.expandButton.base}
        >
          <ExpandButton
            onClick={onExpand}
            label={buttonLabel}
          />
        </div>
      }

      {!onExpand && buttonLabel &&
        <div
          className="ImageCarousel-expandButton"
          style={styles.expandButton.base}
        >
          <div style={styles.paginationLabel.base}>
            {buttonLabel}
          </div>
        </div>
      }
    </div>
  );
}

ImageCarousel.propTypes = propTypes;
ImageCarousel.defaultProps = defaultProps;
ImageCarousel.displayName = "ImageCarousel";
ImageCarousel.styles = styles;

export default radium(ImageCarousel);
