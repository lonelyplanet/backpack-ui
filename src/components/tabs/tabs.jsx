import React, { Children, Component, PropTypes, cloneElement, createElement, isValidElement } from "react";
import radium from "radium";
import { Navigation } from "../navigation";
import Tab from "./tab";
import TabPanel from "./tabPanel";
import propTypes from "../../utils/propTypes";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.findSelectedTab(),
    };

    this.setSelectedIndex = this.setSelectedIndex.bind(this);
    this.findSelectedTab = this.findSelectedTab.bind(this);
    this.getTabs = this.getTabs.bind(this);
  }

  setSelectedIndex(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  getTabs() {
    const tabs = [];

    Children.forEach(this.props.children, (tab) => {
      if (isValidElement(tab)) {
        tabs.push(tab);
      }
    });

    return tabs;
  }

  findSelectedTab() {
    let selectedIndex = 0;

    if (!this.props.children) {
      return null;
    }

    Children.forEach(this.props.children, (child, index) => {
      if (child.props.active) {
        selectedIndex = index;
      }
    });

    return selectedIndex;
  }

  render() {
    const { id, navigationHeight, navigationSticky, style } = this.props;
    const { selectedIndex } = this.state;
    const tabContent = [];

    const tabs = this.getTabs().map((tab, index) => {
      tabContent.push(tab.props.children ?
        createElement(TabPanel, {
          key: index,
          id: `${id}-content-${(index + 1)}`,
          "aria-labelledby": `${id}-tab-${(index + 1)}`,
          "aria-hidden": !(index === selectedIndex),
          style: {
            display: (index === selectedIndex) ? "block" : "none",
          },
        }, tab.props.children) : null);

      return cloneElement(tab, {
        key: index,
        id: `${id}-tab-${(index + 1)}`,
        role: "tab",
        "aria-controls": `${id}-content-${(index + 1)}`,
        "aria-expanded": (selectedIndex === index),
        "aria-selected": (selectedIndex === index),
        active: (selectedIndex === index),
        onClick: () => { this.setSelectedIndex(index); },
      });
    });

    return (
      <div
        className="Tabs"
        id={id}
        role="tablist"
        style={style}
      >
        <Navigation
          height={navigationHeight}
          sticky={navigationSticky}
        >
          {tabs}
        </Navigation>

        <div style={{ marginTop: "80px" }}>
          {tabContent}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    Children.forEach(prop, (child) => {
      if (child.type !== Tab) {
        error = new Error(`${componentName} children should be of type "Tab".`);
      }
    });

    return error;
  },
  navigationHeight: PropTypes.number,
  navigationSticky: PropTypes.bool,
  style: propTypes.style,
};

export default radium(Tabs);
