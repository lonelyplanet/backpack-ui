import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";
import Flyout from "../flyout";
import IconButton from "../iconButton";
import IconRevealButton from "../iconRevealButton";
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
      top: "38px",
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
    if (event.keyCode === 27 && this.state.menuVisible) {
      this.toggleOptions();
    }
  }

  render() {
    const {
      innerRef,
      children,
      iconName,
      iconLabel,
      id,
      className,
      reveal,
      style,
      button,
    } = this.props;

    const optionsId = "bookmark-list-menu-options";

    return (
      <div
        id={id}
        className={cn("BookmarkListMenu", className)}
        style={[styles.container, style]}
        ref={innerRef}
      >
        {!button && reveal &&
          <IconRevealButton
            id={`${id}-IconRevealButton`}
            icon={iconFromString(iconName)}
            label={iconLabel}
            onClick={this.toggleOptions}
          />
        }

        {!button && !reveal &&
          <IconButton
            onClick={this.toggleOptions}
            iconName={iconName}
            label={iconLabel}
            size={40}
            owns={optionsId}
            color={colors.textPrimary}
            backgroundColor={colors.bgPrimary}
          />
        }

        {button && !reveal &&
          React.cloneElement(button, {
            onClick: () => {
              this.toggleOptions();
            },
          })
        }

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
  iconName: PropTypes.oneOf([
    "Ellipsis",
    "Share",
  ]).isRequired,
  iconLabel: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  reveal: PropTypes.bool,
  style: propTypes.style,
  button: PropTypes.element,
};

BookmarkListMenu.defaultProps = {
  id: null,
  className: null,
  reveal: false,
  style: null,
  button: null,
};

export default clickOutside(radium(BookmarkListMenu));
