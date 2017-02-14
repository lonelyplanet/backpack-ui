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

class CardShelfVideoSwiper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextPagination: false,
      prevPagination: false,
    };

    this.slideRefs = [];
    this.hasEnoughSlides = this.hasEnoughSlides.bind(this);
    this.checkAcitveSlide = this.checkAcitveSlide.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }

  componentDidMount() {
    this.renderPagination();
  }

  getPagination(direction) {
    return <PaginatorButton direction={direction} />;
  }

  checkAcitveSlide(index) {
    return this.slideRefs[index] && this.slideRefs[index].classList.contains("slick-active");
  }

  hasEnoughSlides() {
    return this.props.children.length >= this.props.slidesVisible;
  }

  renderPagination() {
    const { children } = this.props;
    if (this.hasEnoughSlides()) {
      this.setState({
        prevPagination: !this.checkAcitveSlide(0),
        nextPagination: !this.checkAcitveSlide(children.length - 1),
      });
    }
  }

  render() {
    const {
      children,
      heading,
      href,
      slidesVisible,
      sliderOptions,
      style,
    } = this.props;
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

          <Slider
            {...sliderOptions}
            afterChange={this.renderPagination}
            slidesToShow={slidesVisible}
            nextArrow={this.state.nextPagination && this.getPagination("right")}
            prevArrow={this.state.prevPagination && this.getPagination("left")}
          >
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                ref={node => this.slideRefs[i] = node}
              >
                {child}
              </div>
            ))}
          </Slider>
        </div>
      </CardShelf>
    );
  }
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
  sliderOptions: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.element,
      PropTypes.object,
    ]),
  ),
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
  sliderOptions: {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    swipe: false,
    speed: 400,
  },
};

export default radium(CardShelfVideoSwiper);
