import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { Link } from "react-router";

import { timing, zIndex } from "../../../settings.json";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import Flyout from "../flyout";
import Heading from "../heading";
import PaginatorButton from "../paginatorButton";

const styles = {
  container: {
    base: {
      display: "inline-block",
      cursor: "pointer",
      position: "relative",
      zIndex: zIndex.globalHeader,
    },
  },

  heading: {
    base: {
      display: "inline-block",
      marginRight: "10px",

      [`@media (min-width: ${mq.min["600"]})`]: {
        marginRight: "20px",
      },
    },
  },

  menu: {
    base: {
      backfaceVisibility: "hidden",
      position: "absolute",
      top: "70px",
      transition: `opacity ${timing.default},
        transform ${timing.default},
        visibility ${timing.default}`,
      width: "290px",
    },

    hidden: {
      opacity: 0,
      transform: "translateY(-1rem)",
      visibility: "hidden",
    },

    visible: {
      opacity: 1,
      pointerEvents: "all",
      transform: "translateY(0)",
      visibility: "visible",
    },
  },
};

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
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

  toggleMenu() {
    this.setState({
      menu: !this.state.menu,
    });
  }

  handleClickOutside(event) {
    const container = this._container;
    const menu = this._menu;

    if (container.contains(event.target)) {
      return;
    } else if (!menu.contains(event.target) && this.state.menu) {
      this.toggleMenu();
    }
  }

  handleKeydown(event) {
    if (event.keyCode === 27 && this.state.menu) {
      this.toggleMenu();
    }
  }

  render() {
    const {
      title,
      menuItems,
      onClick,
      mobile,
      style,
    } = this.props;

    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className="TypeSelector"
        style={[
          styles.container.base,
          mobile && { display: "block" },
          style,
        ]}
        onClick={this.toggleMenu}
        ref={(node) => { this._container = node; }}
      >
        {mobile &&
          <Style
            scopeSelector=".TypeSelector"
            rules={{
              ".Flyout-arrow span": {
                left: "auto !important",
                marginLeft: "44px !important",
              },
            }}
          />
        }

        <Heading
          level={1}
          size="large"
          weight="thin"
          override={styles.heading.base}
        >
          {title}
        </Heading>

        <PaginatorButton
          arrow="triangle"
          color="blue"
          direction="down"
          size="small"
          shadow="tight"
          align="vertical"
          iconLabel="Open menu"
          owns="type-selector-menu"
        />

        <div
          className="TypeSelector-menu"
          id="type-selector-menu"
          style={[
            styles.menu.base,
            !mobile && { right: "-125px" },
            mobile && { maxWidth: "290px", width: "100%" },
            this.state.menu ? styles.menu.visible : styles.menu.hidden,
          ]}
          aria-hidden={!this.state.menu}
          ref={(node) => { this._menu = node; }}
        >
          <Flyout
            arrow="up"
            size="medium"
            displayType="dropdown"
            fill
          >
            <Style
              scopeSelector=".SubNavigation"
              rules={{
                listStyle: "none",

                ".TypeSelector-listItem": {
                  color: "#646c74",
                  display: "block",
                  fontSize: "20px",
                  fontWeight: 300,
                  marginLeft: `${-40 / 20}em`,
                  marginRight: `${-40 / 20}em`,
                  padding: `${17.5 / 20}em ${40 / 20}em`,
                  position: "relative",
                },

                ".TypeSelector-listItem:hover": {
                  backgroundColor: "#f4f8fc",
                },

                ".TypeSelector-listItem:active": {
                  backgroundColor: "#f4f8fc",
                },

                ".TypeSelector-listItem:focus": {
                  backgroundColor: "#f4f8fc",
                },

                ".TypeSelector-listItem--active .ActiveMarker": {
                  backgroundColor: colors.accentRed,
                  borderRadius: "100%",
                  bottom: 0,
                  display: "block",
                  height: ".4rem",
                  left: "2rem",
                  marginBottom: "auto",
                  marginTop: "auto",
                  position: "absolute",
                  top: 0,
                  width: ".4rem",
                  zIndex: 1,
                },
              }}
            />

            <ul className="SubNavigation">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={`${menuItem.slug}`}
                    key={`link ${index}`}
                    onClick={(e) => {
                      this.toggleMenu();

                      if (onClick) {
                        onClick(e);
                      }
                    }}
                    className="TypeSelector-listItem"
                    activeClassName="TypeSelector-listItem--active"
                  >
                    <span className="ActiveMarker" />
                    {menuItem.item}
                  </Link>
                </li>
              ))}
            </ul>
          </Flyout>
        </div>
      </div>
    );
  }
}

TypeSelector.propTypes = {
  /**
   * Title for Type Selector
   */
  title: PropTypes.string.isRequired,

  /**
   * Menu Items for Type Selector
   */
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * Method to run when the Link component is clicked
   */
  onClick: PropTypes.func,

  /**
   * Whether or not to use the mobile layout
   */
  mobile: PropTypes.bool,

  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

TypeSelector.defaultProps = {
  title: "",
  menuItems: [],
  onClick: null,
  mobile: false,
};

TypeSelector.styles = styles;

export default radium(TypeSelector);
