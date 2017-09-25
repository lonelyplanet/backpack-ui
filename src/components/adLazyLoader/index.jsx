import React, { Component } from "react";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";
import Ad from "../ad";

class AdLazyLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adLoaded: false,
    };

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter() {
    if (!this.state.adLoaded) {
      this.setState({
        adLoaded: true,
      });

      window.googletag.cmd.push(() => {
        window.googletag.pubads()
          .refresh([window.lp.ads.lazyLoadAdSlots[this.props.id]]);
      });
    }
  }

  render() {
    const { id, framed, lazyLoadOffset, className, style } = this.props;

    return (
      <div
        className="Ad-container"
        style={{ minHeight: 1 }}
      >
        <Waypoint
          fireOnRapidScroll
          bottomOffset={lazyLoadOffset}
          onEnter={this.handleEnter}
        />

        <Ad
          id={id}
          framed={framed}
          className={className}
          style={style}
        />
      </div>
    );
  }
}

AdLazyLoader.propTypes = {
  id: PropTypes.string.isRequired,
  framed: PropTypes.bool,
  lazyLoadOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

AdLazyLoader.defaultProps = {
  framed: false,
  lazyLoadOffset: -700,
};

export default AdLazyLoader;
