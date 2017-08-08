import React from "react";
import PropTypes from "prop-types";
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

class TagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.expand = this.expand.bind(this);
    this.shouldShowExpand = this.shouldShowExpand.bind(this);
  }

  expand() {
    this.setState({ expanded: true });
  }

  shouldShowExpand() {
    return this.props.children.length - this.props.limit > 0 &&
          !this.state.expanded;
  }

  render() {
    const { children, rows, style } = this.props;
    return (
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
        )).slice(0, this.state.expanded
          ? this.props.children.length
          : this.props.limit
        )}
        {this.shouldShowExpand() &&
          <Tag onClick={this.expand}>
            {`+${this.props.children.length - this.props.limit}`}
          </Tag>
        }
      </div>
    );
  }
}

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
  limit: PropTypes.number,
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
