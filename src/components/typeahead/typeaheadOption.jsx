import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import defaultClassNames from "./utils/classNames";
import createClassList from "./utils/createClassList";

/**
 * A single option within the TypeaheadSelector
 */
class TypeaheadOption extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    return this.props.onClick(event);
  }

  onMouseOver(event) {
    event.preventDefault();

    return this.props.onMouseOver(event);
  }

  render() {
    const {
      customClasses,
      disableDefaultClassNames,
      customValue,
      children,
      hover,
      activeDescendantId,
    } = this.props;

    const classes = {
      [defaultClassNames.listItem]: !disableDefaultClassNames,
    };

    classes[customClasses.hover || defaultClassNames.hover] = !!hover;
    classes[customClasses.listItem] = !!customClasses.listItem;

    if (customValue) {
      classes[customClasses.customAdd || defaultClassNames.customAdd] = !!customClasses.customAdd;
    }

    const classList = cn(classes);

    const optionClassList = createClassList(
      customClasses.listAnchor,
      "listAnchor",
      disableDefaultClassNames,
    );

    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        id={hover ? activeDescendantId : null}
        className={classList}
        role="option"
        aria-selected={hover}
        onClick={this.onClick}
        onMouseDown={this.onClick} // https://github.com/fmoo/react-typeahead/pull/235
        onMouseOver={this.onMouseOver}
      >
        {/* <button
          tabIndex={-1}
          onClick={this.onClick}
          className={optionClassList}
          ref={node => (this.option = node)}
        >
          {children}
        </button> */}
        <div
          className={optionClassList}
          ref={node => (this.option = node)}
          style={{
            cursor: "default",
          }}
        >
          {children}
        </div>
      </li>
    );
  }
}

TypeaheadOption.propTypes = {
  customClasses: PropTypes.shape({
    customAdd: PropTypes.string,
    hover: PropTypes.string,
    listAnchor: PropTypes.string,
    listItem: PropTypes.string,
  }),
  customValue: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  children: PropTypes.string,
  hover: PropTypes.bool,
  activeDescendantId: PropTypes.string,
  disableDefaultClassNames: PropTypes.bool,
};

TypeaheadOption.defaultProps = {
  customClasses: null,
  customValue: null,
  onClick: (event) => {
    event.preventDefault();
  },
  onMouseOver: (event) => {
    event.preventDefault();
  },
  children: null,
  hover: false,
  activeDescendantId: "",
  disableDefaultClassNames: false,
};

export default TypeaheadOption;
