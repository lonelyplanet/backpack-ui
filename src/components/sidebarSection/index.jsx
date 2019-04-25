import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import assign from "object-assign";
import colors from "../../styles/colors";
import Heading from "../heading";
import Icon from "../icon";

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
      first,
      qaHook,
    } = this.props;

    const styles = {
      container: {
        base: assign({}, {
          fontSize: "11px",
          paddingBottom: "35px",
          position: "relative",
        }, !first && {
          borderTop: `1px solid ${colors.borderPrimary}`,
          paddingTop: "20px",
        }),

        background: {
          backgroundColor: "#e9f2f8", // This color does not exist in settings
          borderTop: 0,
          marginLeft: "-20px",
          paddingBottom: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
          width: "calc(100% + 40px)",
        },

        booking: !background ? {
          paddingBottom: "62px",
        } : {},

        checkboxes: {
          paddingBottom: "54px",
        },

        map: {
          paddingBottom: 0,
          paddingTop: 0,
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
      },

      collapsibleHeading: {
        base: {
          backgroundColor: "transparent",
          display: "block",
          paddingBottom: "17px",
          paddingTop: "20px",
          position: "relative",
          textAlign: "left",
          width: "100%",
        },
      },

      content: {
        base: {
          marginTop: "14px",
        },

        booking: background ? {
          marginTop: "32px",
        } : {
          marginTop: "22px",
        },

        checkboxes: {
          marginTop: "16px",
        },

        map: {
          marginTop: 0,
        },

        slider: {
          marginTop: "36px",
        },

        indented: {
          marginLeft: "20px",
        },

        collapsed: {
          display: "none",
          marginTop: "-1px",
          paddingBottom: "57px",
        },

        expanded: {
          display: "block",
        },
      },

      toggleIcon: {
        base: {
          backgroundColor: "transparent",
          color: colors.linkPrimary,
          fontSize: "9px",
          marginTop: "-3px",
          position: "absolute",
          right: 0,
          top: "50%",
        },
      },
    };

    const heading = (
      <Heading
        level={4}
        weight="thick"
        importance="normal"
        size="small"
        caps
        qaHook={qaHook}
      >
        {icon &&
          <Icon
            name={icon}
            size="small"
            inline="before"
            color={background ? "" : "gray"}
            qaHook={qaHook}
          />
        }

        {title}
      </Heading>
    );

    const collapsibleHeading = (
      <button
        data-qa={qaHook ? "sidebar-section-collapsible-heading-btn" : null}
        style={styles.collapsibleHeading.base}
        onClick={this.onClick}
      >
        {heading}

        <Icon
          name={this.state.collapsed ? "triangle-down" : "triangle-up"}
          style={styles.toggleIcon.base}
          qaHook={qaHook}
          label="Expand"
        />
      </button>
    );

    return (
      <section
        className={cn(
          "SidebarSection",
          background && "SidebarSection--background",
          collapsed && "SidebarSection--expandable",
          modifier && `SidebarSection--${modifier}`
        )}
        style={[
          styles.container.base,
          collapsed && styles.container.collapsed,
          background && styles.container.background,
          contentType && styles.container[contentType],
        ]}
      >
        {scopedStyles &&
          <Style
            scopeSelector=".SidebarSection"
            rules={{
              ul: {
                listStyle: "none",
              },
            }}
          />
        }

        <header
          className="SidebarSection-header"
          style={styles.header.base}
        >
          {collapsed && collapsibleHeading}

          {!collapsed && heading}
        </header>

        <div
          className="SidebarSection-content"
          style={[
            !noMargin && styles.content.base,
            icon && styles.content.indented,
            collapsed && styles.content.collapsed,
            !this.state.collapsed && styles.content.expanded,
            contentType && styles.content[contentType],
          ]}
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
  children: PropTypes.node.isRequired,

  /**
   * The name of the section
   */
  title: PropTypes.string.isRequired,

  /**
   * The name of an icon to be placed to the left of the title
   */
  icon: PropTypes.string,

  /**
   * Should the section be collapsed and expandable
   */
  collapsed: PropTypes.bool,

  /**
   * Should the section be boxed in with a blue background
   */
  background: PropTypes.bool,

  /**
   * Should the component include scoped styles (for user generated content)
   */
  scopedStyles: PropTypes.bool,

  /**
   * A modifier classname to be appended to base classname; usually this is used
   * as a layout styling hook within an SCSS file, so be careful when removing
   */
  modifier: PropTypes.string,

  /**
   * A keyword to define the type of content within `SidebarSection-content`,
   * used to provide additional styling
   */
  contentType: PropTypes.oneOf([
    "",
    "booking",
    "checkboxes",
    "map",
    "slider",
  ]),

  /**
   * Should the component have top margin
   */
  noMargin: PropTypes.bool,

  /**
   * Denotes that this is the first section in the sidebar; removes the top
   * border and padding
   */
  first: PropTypes.bool,

  /**
   * QA Hook
   */
  qaHook: PropTypes.bool,
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

  first: false,

  qaHook: false,
};

export default radium(SidebarSection);
