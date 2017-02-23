import React, { PropTypes } from "react";
import radium from "radium";
import Tag from "../tag";

const rowHeight = 40;

const styles = {
  container: {
    overflow: "hidden",
  },

  tag: {
    marginBottom: "8px",
    marginRight: "8px",
  },
};

const TagList = ({ children, rows, style }) => (
  <div
    className="TagList"
    style={[
      styles.container,
      { maxHeight: `${rowHeight * rows}px` },
      style,
    ]}
  >
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        key: index,
        style: styles.tag,
      })
    ))}
  </div>
);

TagList.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== Tag) {
        error = new Error(`${componentName} children should be of type "Tag".`);
      }
    });

    return error;
  },
  rows: PropTypes.number,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

TagList.defaultProps = {
  rows: 3,
};

export default radium(TagList);
