import React, { PropTypes } from "react";
import radium from "radium";
import ReactDOM from "react-dom";
import styles from "./styles";
import IconButton from "../iconButton";
import Flyout from "../flyout";
import ShareMenuItem from "./item";

class ShareMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      optionsHidden: true,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
  }

  toggleOptions() {
    this.setState({
      optionsHidden: !this.state.optionsHidden,
    });
  }

  handleClickOutside(event) {
    /* eslint-disable */
    const button = ReactDOM.findDOMNode(this._button);
    const menu = ReactDOM.findDOMNode(this._menu);
    /* eslint-enable */

    if (button.contains(event.target)) {
      return;
    } else if (!menu.contains(event.target) && !this.state.optionsHidden) {
      this.toggleOptions();
    }
  }

  handleKeydown(event) {
    if (event.keyCode === 27 && !this.state.optionsHidden) {
      this.toggleOptions();
    }
  }

  render() {
    const { networks, onClick, menuPosition } = this.props;

    const style = {
      container: [styles.container.base],
      options: [styles.options.base],
    };

    const position = {
      up: "below",
      down: "above",
      left: "right",
      right: "left",
    };

    const visibility = {
      true: "hidden",
      false: "visible",
    };

    const flyoutArrow = (menuPosition === "bottom") ? "up" : "right";

    style.options.push(styles.options.position[position[flyoutArrow]]);

    style.options.push(
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .base,
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .position[position[flyoutArrow]]
    );

    return (
      <div
        className="ShareMenu"
        style={style.container}
      >
        <IconButton
          className="ShareMenu-button"
          iconName="share"
          label="Share this article on Twitter, Facebook, or email"
          owns="share-menu-options"
          onClick={this.toggleOptions}
          ref={(node) => { this._button = node; }}
        />

        <div
          className="ShareMenu-options"
          id="share-menu-options"
          style={style.options}
          aria-hidden={this.state.optionsHidden}
          ref={(node) => { this._menu = node; }}
        >
          <Flyout arrow={flyoutArrow} fill>
            {Object.keys(networks).map((network, index) => (
              <ShareMenuItem
                network={networks[network].name}
                href={networks[network].href}
                label={networks[network].label}
                onClick={onClick}
                key={index}
              />
            ))}
          </Flyout>
        </div>
      </div>
    );
  }
}

ShareMenu.propTypes = {
  networks: PropTypes.objectOf(PropTypes.object),
  onClick: PropTypes.func,
  menuPosition: PropTypes.oneOf([
    "",
    "bottom",
    "left",
  ]),
};

ShareMenu.defaultProps = {
  networks: null,
  onClick: null,
  menuPosition: "bottom",
};

ShareMenu.styles = styles;

export default radium(ShareMenu);
