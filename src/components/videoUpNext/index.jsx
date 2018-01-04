import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Link from "../link";
import CoverPhoto from "../coverPhoto";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontSizeUppercase,
  lineHeightUppercase,
  fontSizeBodySmall,
  lineHeightBodySmall,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const scopedStyles = {
  ".CoverPhoto": {
    transform: "scale(1.03) !important",
  },
};

const styles = {
  container: {
    backgroundColor: rgba("#2b2b2b", 0.7),
    maxWidth: "100%",
    opacity: 0,
    overflow: "hidden",
    textAlign: "left",
    transition: `opacity ${timing.fast} linear`,
    width: "300px",
  },

  link: {
    color: colors.textOverlay,
    display: "inline-block",
    padding: "8px",
    width: "100%",
  },

  imageContainer: {
    float: "left",
    height: "56px",
    marginRight: "8px",
    overflow: "hidden",
    width: "100px",
  },

  image: {
    transition: `transform ${timing.slow} ease-in-out`,
  },

  label: {
    color: colors.accentGray,
    fontSize: fontSizeUppercase,
    lineHeight: lineHeightUppercase,
    marginTop: "2px",
    textTransform: "uppercase",
  },

  title: {
    display: "-webkit-box",
    fontSize: fontSizeBodySmall,
    lineHeight: lineHeightBodySmall,
    marginTop: "4px",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },
};

class VideoUpNext extends Component {
  constructor(props) {
    super(props);

    this.container = null;

    this.state = {
      opacity: props.visible ? 1 : 0,
      height: props.visible ? "auto" : "0px",
    };
  }

  componentDidMount() {
    this.container.addEventListener("transitionEnd", this.onTransitionEnd.bind(this));
    this.container.addEventListener("webkitTransitionEnd", this.onTransitionEnd.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      opacity: nextProps.visible ? 1 : 0,
      height: nextProps.visible ? "auto" : this.state.height,
    });
  }

  onTransitionEnd() {
    if (this.container.style.opacity === "0") {
      this.setState({
        height: "0px",
      });
    }
  }

  render() {
    const { title, image, href, style } = this.props;
    const { opacity, height } = this.state;

    return (
      <div
        className="VideoUpNext"
        ref={(container) => { this.container = container; }}
        style={[
          styles.container,
          { opacity, height },
          style,
        ]}
      >
        <Style
          scopeSelector=".VideoUpNext:hover"
          rules={scopedStyles}
        />

        <Link
          to={href}
          style={styles.link}
        >
          <div style={styles.imageContainer}>
            <CoverPhoto
              src={image}
              alt={title}
              width={100}
              height={56}
              style={styles.image}
            />
          </div>

          <div>
            <div style={styles.label}>Up next</div>
            <div style={styles.title}>{title}</div>
          </div>
        </Link>
      </div>
    );
  }
}

VideoUpNext.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // recommended dimensions: 160x90
  href: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  style: propTypes.style,
};

VideoUpNext.defaultProps = {
  visible: false,
  style: null,
};

export default radium(VideoUpNext);
