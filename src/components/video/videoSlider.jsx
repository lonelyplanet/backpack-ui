import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
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
    default: {
      overflow: "hidden",
      overflowX: "hidden",
      overflowY: "hidden",
    },
    draggable: {
      overflow: "initial",
      overflowX: "visible",
      overflowY: "hidden",
    },
  },

  children: {
    default: {
      overflow: "hidden",
      overflowX: "hidden",
      overflowY: "hidden",
      position: "relative",
      whiteSpace: "nowrap",
    },
    defaultCellSpacing: {
      marginRight: "-20px",

      [`@media (max-width: ${mq.max["480"]})`]: {
        marginRight: "-12px",
      },
    },
    draggable: {
      overflow: "initial",
      overflowX: "scroll",
      overflowY: "hidden",
      WebkitOverflowScrolling: "touch",
    },
  },

  child: {
    default: {
      display: "inline-block",
      left: 0,
      position: "relative",
      top: 0,
      transition: `transform ${timing.default} ease-out`,
      verticalAlign: "top",
      whiteSpace: "normal",
      width: "25%",
    },

    defaultCellSpacing: {
      paddingRight: "20px",

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

    this.scroller = null;

    this.state = {
      index: 0,
    };

    this.autoplayIntervalId = null;
    this.hovering = false;
  }

  componentDidMount() {
    this.setAutoplayInterval();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onWindowResize);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.draggable !== this.props.draggable) {
      // Issue: Setting scrollLeft doesn't always bring the slider back
      // to where we'd like (there is like a 20 pixel offset sometimes),
      // but this is simply here for convenience anyway, so leaving for now.
      this.scroller.scrollLeft = 0;

      this.setState({ index: 0 });
    }

    if (this.props.slidesToShow !== nextProps.slidesToShow) {
      // We rewind in this case to avoid situations where the new "current frame"
      // wouldn't have any children in it (specifically, if slidesToShow went
      // from a low number to a high number and the user was on the last frame
      // in the slider at the time)
      this.setState({ index: 0 });
    }

    if (nextProps.draggable) {
      clearInterval(this.autoplayIntervalId);
    }
  }

  componentDidUpdate(prevProps) {
    const shouldSetAutoplayInterval = (prevProps.draggable && !this.props.draggable) ||
      (this.props.autoplay !== prevProps.autoplay) ||
      (this.props.autoplaySpeed !== prevProps.autoplaySpeed);

    if (shouldSetAutoplayInterval) {
      this.setAutoplayInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplayIntervalId);

    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }

  onWindowResize = () => {
    // We rewind to avoid visual glitch where cards aren't evenly spaced
    if (this.state.index !== 0) {
      this.setState({ index: 0 });
    }
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
    const { mqSlidesToShow, slidesToShow } = this.props;

    if (slidesToShow) {
      return slidesToShow;
    }

    const width = typeof window === "undefined" ? null : window.innerWidth;

    // TODO: Use window.matchMedia
    if (width === null || width > 960) {
      return mqSlidesToShow;
    } else if (width > 720) {
      return mqSlidesToShow < 3 ? mqSlidesToShow : 3;
    } else if (width > 360) {
      return mqSlidesToShow < 2 ? mqSlidesToShow : 2;
    }

    return 1;
  }

  setAutoplayInterval = () => {
    const { autoplay, autoplaySpeed, draggable } = this.props;

    clearInterval(this.autoplayIntervalId);

    if (autoplay && !draggable) {
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
      mqSlidesToShow,
      slidesToShow,
      cellSpacing,
      infinite,
      draggable,
      arrows,
      arrowProps,
      childStyle,
      style,
    } = this.props;

    const { index } = this.state;

    const frameCount = this.getFrameCount();
    const showNextArrow = infinite || (index !== frameCount - 1);
    const showPrevArrow = infinite || (index !== 0);

    const translateXAmount = `-${index * 100 * this.getResponsiveSlidesToShow()}%`;

    return (
      <div
        className={`VideoSlider${draggable ? " VideoSlider-draggable" : ""}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={[
          styles.container,
          style,
        ]}
      >

        {draggable && (
          <Style
            scopeSelector=".VideoSlider-draggable"
            rules={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          />
        )}

        {arrows && !draggable &&
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

        {arrows && !draggable &&
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

        <div
          style={[
            styles.slider.default,
            draggable && styles.slider.draggable,
          ]}
        >
          <div
            ref={(ref) => { this.scroller = ref; }}
            style={[
              styles.children.default,
              draggable && styles.children.draggable,
              typeof cellSpacing === "number" && { marginRight: `-${cellSpacing}px` },
              typeof cellSpacing !== "number" && styles.children.defaultCellSpacing,
            ]}
          >
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                style={[
                  styles.child.default,
                  typeof slidesToShow === "number" && { width: `${100 / slidesToShow}%` },
                  typeof slidesToShow !== "number" && styles.child[mqSlidesToShow],
                  typeof cellSpacing === "number" && { paddingRight: `${cellSpacing}px` },
                  typeof cellSpacing !== "number" && styles.child.defaultCellSpacing,
                  childStyle,
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
  mqSlidesToShow: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  slidesToShow: PropTypes.number,
  cellSpacing: PropTypes.number,
  arrows: PropTypes.bool,
  arrowProps: PropTypes.shape({
    ...IconButton.propTypes,
    iconName: PropTypes.string,
    label: PropTypes.string,
  }),
  infinite: PropTypes.bool,
  draggable: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  childStyle: propTypes.style,
  style: propTypes.style,
};

VideoSlider.defaultProps = {
  mqSlidesToShow: 4,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true,
  arrowProps: {},
};

export default radium(VideoSlider);
