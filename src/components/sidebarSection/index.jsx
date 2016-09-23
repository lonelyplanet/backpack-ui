"use strict";

import React from "react";
import radium, { Style } from "radium";
import { color } from "rizzo-next/sass/settings.json";
import Heading from "../heading";
import Icon from "../icon";

const padding = `${20 / 13}em`;

const styles = {
  container: {
    base: {
      borderTop: `1px solid ${color.gray}`,
      fontSize: "13px",
      paddingBottom: padding,
      paddingTop: padding,
      position: "relative",
    },

    background: {
      backgroundColor: "#e9f2f8", // This color does not exist in settings
      borderTop: 0,
      paddingBottom: `${40 / 13}em`,
      paddingLeft: padding,
      paddingRight: padding,
    },

    collapsed: {
      paddingBottom: 0,
      paddingTop: 0,
    },
  },

  header: {
    base: {
      position: "relative",
    },

    background: {
      paddingBottom: `${12 / 13}em`,
    },
  },

  collapsibleHeading: {
    base: {
      backgroundColor: "transparent",
      display: "block",
      paddingBottom: padding,
      paddingTop: padding,
      textAlign: "left",
      width: "100%",
    },
  },

  content: {
    base: {
      marginTop: `${14 / 13}em`,
    },

    slider: {
      marginTop: `${36 / 13}em`,
    },

    indented: {
      marginLeft: padding,
    },

    collapsed: {
      display: "none",
      marginTop: `${-6 / 13}em`,
      paddingBottom: padding,
    },

    expanded: {
      display: "block",
    },
  },

  toggleIcon: {
    base: {
      backgroundColor: "transparent",
      color: color.blue,
      fontSize: `${9 / 13}em`,
      paddingBottom: padding,
      paddingTop: padding,
      position: "absolute",
      right: 0,
      top: `${6 / 13}em`,
    },
  },
};

class SidebarSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.collapsed,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      collapsed: !this.state.collapsed,
    });

    event.preventDefault();
  }

  render() {
    const {
      children,
      title,
      icon,
      collapsed,
      background,
      scopedStyles,
      modifier,
      contentType,
      noMargin,
    } = this.props;

    const style = {
      container: [styles.container.base],
      header: [styles.header.base],
      collapsibleHeading: [styles.collapsibleHeading.base],
      content: noMargin ? [] : [styles.content.base],
      toggleIcon: [styles.toggleIcon.base],
    };

    if (icon) {
      style.content.push(styles.content.indented);
    }

    if (collapsed) {
      style.container.push(styles.container.collapsed);
      style.content.push(styles.content.collapsed);
    }

    if (background) {
      style.container.push(styles.container.background);
      style.header.push(styles.header.background);
    }

    if (!this.state.collapsed) {
      style.content.push(styles.content.expanded);
    }

    if (contentType) {
      style.content.push(styles.content[contentType]);
    }

    const heading = (
      <Heading
        level={4}
        weight="thick"
        importance="normal"
        size="tiny"
        caps
      >
        {icon &&
          <Icon
            name={icon}
            size="small"
            inline="before"
            color={background ? "" : "gray"}
          />
        }

        {title}
      </Heading>
    );

    const collapsibleHeading = (
      <button
        style={style.collapsibleHeading}
        onClick={this.onClick}
      >
        {heading}

        <span
          style={style.toggleIcon}
          type="button"
        >
          <Icon
            name={this.state.collapsed ? "triangle-down" : "triangle-up"}
            label="Expand"
          />
        </span>
      </button>
    );

    const backgroundClassName = background ? " SidebarSection--background" : "";

    const modifierClassName = modifier ? ` SidebarSection--${modifier}` : "";

    return (
      <section
        className={`SidebarSection${backgroundClassName}${modifierClassName}`}
        style={style.container}
      >
        {scopedStyles &&
          <Style
            scopeSelector=".SidebarSection"
            rules={{
              ul: {
                listStyle: "none",
              },
              "li + li": {
                marginTop: `${8 / 13}em`,
              },
            }}
          />
        }

        {background &&
          <Style
            scopeSelector=".SidebarSection--background"
            rules={{
              "+ .SidebarSection": {
                borderTopWidth: "0 !important",
              },
            }}
          />
        }

        <header
          className="SidebarSection-header"
          style={style.header}
        >
          {collapsed && collapsibleHeading}

          {!collapsed && heading}
        </header>

        <div
          className="SidebarSection-content"
          style={style.content}
          aria-hidden={this.state.collapsed}
        >
          {children}
        </div>
      </section>
    );
  }
}

SidebarSection.propTypes = {
  /**
   * Content for the section
   */
  children: React.PropTypes.node.isRequired,

  /**
   * The name of the section
   */
  title: React.PropTypes.string.isRequired,

  /**
   * The name of an icon to be placed to the left of the title
   */
  icon: React.PropTypes.string,

  /**
   * Should the section be collapsed and expandable
   */
  collapsed: React.PropTypes.bool,

  /**
   * Should the section be boxed in with a blue background
   */
  background: React.PropTypes.bool,

  /**
   * Should the component include scoped styles (for user generated content)
   */
  scopedStyles: React.PropTypes.bool,

  /**
   * A modifier classname to be appended to base classname; usually this is used
   * as a layout styling hook within an SCSS file, so be careful when removing
   */
  modifier: React.PropTypes.string,

  /**
   * A keyword to define the type of content within `SidebarSection-content`,
   * used to provide additional styling
   */
  contentType: React.PropTypes.oneOf([
    "",
    "slider",
  ]),

  /**
   * Should the component have top margin
   */
  noMargin: React.PropTypes.bool,
};

SidebarSection.defaultProps = {
  children: null,

  title: "",

  icon: "",

  collapsed: false,

  background: false,

  scopedStyles: false,

  modifier: "",

  contentType: "",

  noMargin: false,
};

SidebarSection.styles = styles;

export default radium(SidebarSection);
