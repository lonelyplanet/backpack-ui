/*
  Slider (slider.jsx)

  Alternative slider to react-slick.

  Pros:
  - Maintains static cell padding independant of window size
  - Fully responsive cell widths
  - You shouldn't need a slew of scoped styles to override the CSS of inner HTML
    elements of the slider (like we often do with react-slick).

  Cons:
  - Overflow is hidden; Child components with overflowing UI
    (i.e. box shadow) will be clipped.
  - Infinite sliding is supported, but it only rewinds the slider.
  - State can be thrown off under certain circumstances of changes in
    window size (which is a problem with react-slick as well).  However,
    state fixes itself when the slider slides again.

*/
import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import IconButton from "../iconButton";
import media from "../../styles/mq";
import timing from "../../styles/timing";

const styles = {
  container: {
    position: "relative",
  },

  slider: {
    overflow: "hidden",
  },

  children: {
    position: "relative",

    whiteSpace: "nowrap",
    overflow: "hidden",
    marginRight: "-20px",

    [`@media (max-width: ${media.max["480"]})`]: {
      marginRight: "-12px",
    },
  },

  child: {
    default: {
      position: "relative",
      top: 0,
      left: 0,
      display: "inline-block",
      width: "25%",
      verticalAlign: "top",
      paddingRight: "20px",
      whiteSpace: "normal",
      transition: `transform ${timing.default} ease-out`,

      [`@media (max-width: ${media.max["480"]})`]: {
        paddingRight: "12px",
      },
    },

    1: {
      width: "100%",
    },

    2: {
      width: "50%",

      [`@media (max-width: ${media.max["360"]})`]: {
        width: "100%",
      },
    },

    3: {
      width: "33.333%",

      [`@media (max-width: ${media.max["720"]})`]: {
        width: "50%",
      },

      [`@media (max-width: ${media.max["360"]})`]: {
        width: "100%",
      },
    },

    4: {
      width: "25%",

      [`@media (max-width: ${media.max["960"]})`]: {
        width: "33.333%",
      },

      [`@media (max-width: ${media.max["720"]})`]: {
        width: "50%",
      },

      [`@media (max-width: ${media.max["360"]})`]: {
        width: "100%",
      },
    },
  },

  arrowContainer: {
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    zIndex: 1,
    transition: `opacity ${timing.fast}`,
    width: "0px",
  },

  arrow: {
    default: {
      position: "relative",
      width: "4.4444em",
      height: "4.4444em",
      fontSize: "9px",
      cursor: "inherit",
      ":focus": {
        outline: 0,
      },
    },
    next: {
      right: "2.2222em",
    },
    prev: {
      left: "-2.2222em",
    },
  },

  coverUp: {
    position: "absolute",
    top: 0,
    right: "-20px",
    width: "20px",
    height: "100%",

    [`@media (max-width: ${media.max["480"]})`]: {
      width: "12px",
      right: "-12px",
    },
  },
};

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.autoplayIntervalId = null;
    this.hovering = false;

    this.state = {
      index: 0,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClickPrevArrow = this.onClickPrevArrow.bind(this);
    this.onClickNextArrow = this.onClickNextArrow.bind(this);
  }

  componentDidMount() {
    this.setAutoplayInterval();
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.autoplay !== prevProps.autoplay) ||
      (this.props.autoplaySpeed !== prevProps.autoplaySpeed)
    ) {
      this.setAutoplayInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplayIntervalId);
  }

  onMouseEnter() {
    this.hovering = true;
  }

  onMouseLeave() {
    this.hovering = false;
  }

  onAutoplayInterval() {
    if (!this.props.pauseOnHover || !this.hovering) {
      this.next();
    }
  }

  onClickPrevArrow() {
    this.prev();
  }

  onClickNextArrow() {
    this.next();
  }

  getFrameCount() {
    const responsiveSlidesToShow = this.getResponsiveSlidesToShow();
    return Math.ceil(React.Children.count(this.props.children) / responsiveSlidesToShow);
  }

  getResponsiveSlidesToShow() {
    const { slidesToShow } = this.props;
    const width = typeof window === "undefined" ? null : window.innerWidth;
    if (width === null || width > 960) {
      return slidesToShow;
    } else if (width > 720) {
      return slidesToShow < 3 ? slidesToShow : 3;
    } else if (width > 360) {
      return slidesToShow < 2 ? slidesToShow : 2;
    }
    return 1;
  }

  setAutoplayInterval() {
    clearInterval(this.autoplayIntervalId);
    if (this.props.autoplay) {
      this.autoplayIntervalId = setInterval(
        this.onAutoplayInterval.bind(this),
        this.props.autoplaySpeed
      );
    }
  }

  prev() {
    const { infinite } = this.props;
    const { index } = this.state;
    const frameCount = this.getFrameCount();
    const endValue = infinite ? frameCount - 1 : index;
    const prevIndex = index - 1 < 0 ? endValue : index - 1;
    this.setState({ index: prevIndex });
  }

  next() {
    const { infinite } = this.props;
    const { index } = this.state;
    const frameCount = this.getFrameCount();
    const endValue = infinite ? 0 : index;
    const nextIndex = index + 1 >= frameCount ? endValue : index + 1;
    this.setState({ index: nextIndex });
  }

  render() {
    const {
      children,
      slidesToShow,
      coverupColor,
      infinite,
      arrows,
      arrowProps,
    } = this.props;

    const { index } = this.state;

    const frameCount = this.getFrameCount();
    const showNextArrow = infinite || (index !== frameCount - 1);
    const showPrevArrow = infinite || (index !== 0);

    const translateXAmount = `-${index * 100 * this.getResponsiveSlidesToShow()}%`;

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={styles.container}
      >
        {arrows &&
          <div
            style={[
              styles.arrowContainer,
              { left: 0 },
              { opacity: showPrevArrow ? 1 : 0 },
            ]}
          >
            <IconButton
              shadow
              {...arrowProps}
              iconName="ChevronLeft"
              label="Previous"
              onClick={this.onClickPrevArrow}
              style={[
                styles.arrow.default,
                styles.arrow.prev,
                { cursor: showPrevArrow ? "pointer" : "default" },
                arrowProps.style,
              ]}
            />
          </div>
        }
        {arrows &&
          <div
            style={[
              styles.arrowContainer,
              { right: 0 },
              { opacity: showNextArrow ? 1 : 0 },
            ]}
          >
            <IconButton
              shadow
              {...arrowProps}
              iconName="ChevronRight"
              label="Next"
              onClick={this.onClickNextArrow}
              style={[
                styles.arrow.default,
                styles.arrow.next,
                { cursor: showNextArrow ? "pointer" : "default" },
                arrowProps.style,
              ]}
            />
          </div>
        }
        <div style={styles.slider}>
          <div style={styles.children}>
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                style={[
                  styles.child.default,
                  styles.child[slidesToShow],
                  { transform: `translateX(${translateXAmount})` },
                ]}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <div
          style={[
            styles.coverUp,
            { backgroundColor: coverupColor },
          ]}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  slidesToShow: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  coverupColor: PropTypes.string.isRequired,
  arrows: PropTypes.bool,
  arrowProps: PropTypes.shape({
    ...IconButton.propTypes,
    iconName: PropTypes.string,
    label: PropTypes.string,
  }),
  infinite: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number.isRequired,
  pauseOnHover: PropTypes.bool,
};

Slider.defaultProps = {
  slidesToShow: 4,
  coverupColor: "transparent",
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true,
  arrowProps: {},
};

export default radium(Slider);
