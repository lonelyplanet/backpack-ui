import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import propTypes from "../../utils/propTypes";
import AccordionItem from "./accordionItem";
import createQAHook from "../../utils/createQAHook";

const styles = {
  container: {
    borderTop: `1px solid ${colors.borderPrimary}`,
    maxWidth: `${dimensions.maxWidth}px`,
  },
};

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedItemId: this.findExpandedChild(),
    };

    this.createItemId = this.createItemId.bind(this);
    this.findExpandedChild = this.findExpandedChild.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }

  createItemId(index) {
    return `${this.props.id}-accordionItem-${(index + 1)}`;
  }

  findExpandedChild() {
    const expandedChildren = [];

    React.Children.forEach(this.props.children, (child, index) => {
      if (child.props.expanded) {
        expandedChildren.push(this.createItemId(index));
      }
    });

    return expandedChildren.length && expandedChildren[0];
  }

  toggleItem(itemId) {
    this.setState({
      expandedItemId: this.state.expandedItemId === itemId ? null : itemId,
    });
  }

  render() {
    const { id, children, style, qahook } = this.props;
    const { expandedItemId } = this.state;

    return (
      <div
        className="Accordion"
        id={id}
        data-qa={qahook ? createQAHook(qahook, "accordion", "btn") : null}
        style={[styles.container, style]}
        role="tablist"
      >
        {React.Children.map(children, (child, index) => {
          const itemId = this.createItemId(index);

          return React.cloneElement(child, {
            key: index,
            id: itemId,
            expanded: expandedItemId === itemId,
            onClick: () => { this.toggleItem(itemId); },
          });
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== AccordionItem) {
        error = new Error(`${componentName} children should be of type "AccordionItem".`);
      }
    });

    return error;
  },
  style: propTypes.style,
  qahook: PropTypes.string,
};

Accordion.defaultProps = {
  qahook: null,
};

export default radium(Accordion);
