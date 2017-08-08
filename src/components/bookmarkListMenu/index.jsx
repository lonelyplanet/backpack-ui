import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Flyout from "../flyout";
import ListButton from "../listButton";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import propTypes from "../../utils/propTypes";
import clickOutside from "../../hoc/clickOutside";

const styles = {
  container: {
    display: "inline-block",
    position: "relative",
  },

  options: {
    default: {
      backfaceVisibility: "hidden",
      color: colors.textPrimary,
      display: "inline-block",
      opacity: 0,
      position: "absolute",
      right: 0,
      top: "70px",
      transform: "translate(0, 8px)",
      transition: `opacity ${timing.default},
        transform ${timing.default},
        visibility ${timing.default}`,
      visibility: "hidden",
      width: "160px",
    },

    visible: {
      opacity: 1,
      pointerEvents: "all",
      transform: "translate(0, 0)",
      visibility: "visible",
    },
  },

  flyout: {
    padding: "12px 16px 10px",
  },
};

class BookmarkListMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      menuVisible: false,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  toggleOptions() {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  }

  handleClickOutside() {
    this.setState({
      menuVisible: false,
    });
  }

  handleKeydown(event) {
    if (event.keyCode === 27 && !this.state.menuVisible) {
      this.toggleOptions();
    }
  }

  render() {
    const {
      innerRef,
      children,
      style,
    } = this.props;

    const optionsId = "bookmark-list-menu-options";

    return (
      <div
        className="BookmarkListMenu"
        style={[styles.container, style]}
        ref={innerRef}
      >
        <ListButton
          onClick={this.toggleOptions}
          icon="Ellipsis"
          label="View list options"
          owns={optionsId}
        />

        <div
          className="BookmarkListMenu-options"
          id={optionsId}
          aria-hidden={!this.state.menuVisible}
          style={[
            styles.options.default,
            this.state.menuVisible ? styles.options.visible : {},
          ]}
        >
          <Flyout
            arrow="up"
            arrowPosition="right"
            style={styles.flyout}
            fill
          >
            {React.Children.map(children, (child) => (
              <div style={styles.item} key={child.props.children}>
                {child}
              </div>
            ))}
          </Flyout>
        </div>
      </div>
    );
  }
}

BookmarkListMenu.propTypes = {
  innerRef: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: propTypes.style,
};

BookmarkListMenu.defaultProps = {
  style: null,
};

export default clickOutside(radium(BookmarkListMenu));
