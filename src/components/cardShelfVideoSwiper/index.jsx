import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import assign from "object-assign";
import Slider from "react-slick";
import { grid, timing, zIndex } from "../../../settings.json";
import {
  CardShelf,
  CardShelfHeader,
} from "../cardShelf";
import CardVideo from "../cardVideo";
import TileVideo from "../tileVideo";
import TileVideoPoster from "../tileVideoPoster";
import PaginatorButton from "../paginatorButton";

const styles = {
  slider: {
    width: "calc(100% + 100px)",
    padding: "30px 50px 80px",
    marginTop: "-30px",
    marginLeft: "-50px",
    marginBottom: "-80px",
    overflow: "hidden",
    position: "relative",
  },
};

const scopedStyles = {
  ".slick-list": {
    overflow: "visible",
    position: "relative",
    width: "100%",
    maxWidth: grid.container,
  },

  ".slick-track": {
    display: "flex",
  },

  ".slick-slide": {
    opacity: 0,
    transition: `opacity ${timing.default} ease`,
    float: "none !important",
    height: "auto",
  },

  ".slick-slide:not(.slick-active)": {
    pointerEvents: "none",
  },

  ".slick-active": {
    opacity: 1,
  },

  ".slick-slide + .slick-slide": {
    marginLeft: "27px",
  },

  ".PaginatorButton": {
    position: "absolute",
    top: "188px",
    zIndex: zIndex.middle,
  },

  ".PaginatorButton:first-of-type": {
    left: "-20px",
  },

  ".PaginatorButton:last-of-type": {
    right: "-20px",
  },
};

function CardShelfVideoSwiper({ children, heading, href, slidesVisible, style }) {
  const sliderOptions = {
    dots: false,
    infinite: false,
    slidesToShow: slidesVisible,
    slidesToScroll: 1,
    nextArrow: (<PaginatorButton direction="right" />),
    prevArrow: (<PaginatorButton direction="left" />),
    variableWidth: true,
    swipe: false,
    speed: 400,
  };

  return (
    <CardShelf
      className="CardShelf--video"
      style={style}
    >
      {heading &&
        <CardShelfHeader
          heading={heading}
          href={href}
        />
      }

      <div style={styles.slider}>
        <Style
          scopeSelector=".CardShelf--video"
          rules={assign(
            {},
            scopedStyles,
            slidesVisible === 3 && {
              ".slick-slide + .slick-slide": {
                marginLeft: "27px",
              },
            },
            slidesVisible === 4 && {
              ".slick-slide + .slick-slide": {
                marginLeft: "43px",
              },
            },
          )}
        />

        <Slider {...sliderOptions}>
          {React.Children.map(children, (child, i) => (
            <div key={i}>{child}</div>
          ))}
        </Slider>
      </div>
    </CardShelf>
  );
}

CardShelfVideoSwiper.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== CardVideo || child.type !== TileVideo || child.type !== TileVideoPoster) {
        error = new Error(`${componentName} children should be of type "CardVideo", "TileVideo" or "TileVideoPoster".`);
      }
    });

    return error;
  },
  heading: PropTypes.string,
  href: PropTypes.string,
  slidesVisible: PropTypes.oneOf([3, 4]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

CardShelfVideoSwiper.defaultProps = {
  slidesVisible: 3,
};

export default radium(CardShelfVideoSwiper);
