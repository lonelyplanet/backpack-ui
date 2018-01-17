import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import IconButton from "../iconButton";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    position: "relative",
  },

  slider: {
    overflow: "hidden",
  },

  children: {
    marginRight: "-20px",
    overflow: "hidden",
    position: "relative",
    whiteSpace: "nowrap",

    [`@media (max-width: ${mq.max["480"]})`]: {
      marginRight: "-12px",
    },
  },

  child: {
    default: {
      display: "inline-block",
      left: 0,
      paddingRight: "20px",
      position: "relative",
      top: 0,
      transition: `transform ${timing.default} ease-out`,
      verticalAlign: "top",
      whiteSpace: "normal",
      width: "25%",

      [`@media (max-width: ${mq.max["480"]})`]: {
        paddingRight: "12px",
      },
    },

    1: {
      width: "100%",
    },

    2: {
      width: "50%",

      [`@media (max-width: ${mq.max["360"]})`]: {
        width: "100%",
      },
    },

    3: {
      width: "33.333%",

      [`@media (max-width: ${mq.max["720"]})`]: {
        width: "50%",
      },

      [`@media (max-width: ${mq.max["360"]})`]: {
        width: "100%",
      },
    },

    4: {
      width: "25%",

      [`@media (max-width: ${mq.max["960"]})`]: {
        width: "33.333%",
      },

      [`@media (max-width: ${mq.max["720"]})`]: {
        width: "50%",
      },

      [`@media (max-width: ${mq.max["360"]})`]: {
        width: "100%",
      },
    },
  },

  arrowContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    transition: `opacity ${timing.fast}`,
    width: 0,
    zIndex: zIndex.default,
  },

  arrow: {
    default: {
      cursor: "inherit",
      fontSize: "9px",
      height: "4.4444em",
      position: "relative",
      width: "4.4444em",
    },

    next: {
      right: "2.2222em",
    },

    prev: {
      left: "-2.2222em",
    },
  },
};

class VideoSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.autoplayIntervalId = null;
    this.hovering = false;
  }

  componentDidMount() {
    this.setAutoplayInterval();
  }

  componentDidUpdate(prevProps) {
    const shouldSetAutoplayInterval = (this.props.autoplay !== prevProps.autoplay) ||
      (this.props.autoplaySpeed !== prevProps.autoplaySpeed);

    if (shouldSetAutoplayInterval) {
      this.setAutoplayInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplayIntervalId);
  }

  onMouseEnter = () => {
    this.hovering = true;
  }

  onMouseLeave = () => {
    this.hovering = false;
  }

  onAutoplayInterval = () => {
    if (!this.props.pauseOnHover || !this.hovering) {
      this.next();
    }
  }

  onClickPrevArrow = () => {
    this.prev();
  }

  onClickNextArrow = () => {
    this.next();
  }

  getFrameCount = () => {
    const responsiveSlidesToShow = this.getResponsiveSlidesToShow();
    return Math.ceil(React.Children.count(this.props.children) / responsiveSlidesToShow);
  }

  getResponsiveSlidesToShow = () => {
    const { slidesToShow } = this.props;
    const width = typeof window === "undefined" ? null : window.innerWidth;

    // TODO: Use window.matchMedia
    if (width === null || width > 960) {
      return slidesToShow;
    } else if (width > 720) {
      return slidesToShow < 3 ? slidesToShow : 3;
    } else if (width > 360) {
      return slidesToShow < 2 ? slidesToShow : 2;
    }

    return 1;
  }

  setAutoplayInterval = () => {
    const { autoplay, autoplaySpeed } = this.props;

    clearInterval(this.autoplayIntervalId);

    if (autoplay) {
      this.autoplayIntervalId = setInterval(this.onAutoplayInterval.bind(this), autoplaySpeed);
    }
  }

  prev = () => {
    const { infinite } = this.props;
    const { index } = this.state;
    const frameCount = this.getFrameCount();
    const endValue = infinite ? (frameCount - 1) : index;
    const prevIndex = (index - 1) < 0 ? endValue : (index - 1);

    this.setState({
      index: prevIndex,
    });
  }

  next = () => {
    const { infinite } = this.props;
    const { index } = this.state;
    const frameCount = this.getFrameCount();
    const endValue = infinite ? 0 : index;
    const nextIndex = (index + 1) >= frameCount ? endValue : (index + 1);

    this.setState({
      index: nextIndex,
    });
  }

  render() {
    const {
      children,
      slidesToShow,
      infinite,
      arrows,
      arrowProps,
      style,
    } = this.props;

    const { index } = this.state;

    const frameCount = this.getFrameCount();
    const showNextArrow = infinite || (index !== frameCount - 1);
    const showPrevArrow = infinite || (index !== 0);

    const translateXAmount = `-${index * 100 * this.getResponsiveSlidesToShow()}%`;

    return (
      <div
        className="VideoSlider"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={[
          styles.container,
          style,
        ]}
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

      </div>
    );
  }
}

VideoSlider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  slidesToShow: PropTypes.oneOf([1, 2, 3, 4]),
  arrows: PropTypes.bool,
  arrowProps: PropTypes.shape({
    ...IconButton.propTypes,
    iconName: PropTypes.string,
    label: PropTypes.string,
  }),
  infinite: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  style: propTypes.style,
};

VideoSlider.defaultProps = {
  slidesToShow: 4,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true,
  arrowProps: {},
};

export default radium(VideoSlider);
