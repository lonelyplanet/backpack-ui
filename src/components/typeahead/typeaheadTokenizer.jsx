import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Typeahead from "./typeahead";
import TypeaheadToken from "./typeaheadToken";
import Accessor from "./utils/accessor";
import KeyEvent from "./utils/keyEvent";
import defaultClassNames from "./utils/classNames";

/**
 * A typeahead that, when an option is selected, instead of simply filling
 * the text entry widget, prepends a renderable "token", that may be deleted
 * by pressing backspace on the beginning of the line with the keyboard.
 */
class TypeaheadTokenizer extends Component {
  static arraysAreDifferent(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
      return true;
    }

    for (let index = secondArray.length - 1; index >= 0; index -= 1) {
      if (secondArray[index] !== firstArray[index]) {
        return true;
      }
    }

    return false;
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: props.defaultSelected.slice(0),
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.getSelectedTokens = this.getSelectedTokens.bind(this);
    this.getOptionsForTypeahead = this.getOptionsForTypeahead.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.removeTokenForValue = this.removeTokenForValue.bind(this);
    this.addTokenForValue = this.addTokenForValue.bind(this);
    this.renderTokens = this.renderTokens.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const arraysAreDifferent = TypeaheadTokenizer.arraysAreDifferent(
      this.props.defaultSelected,
      nextProps.defaultSelected,
    );

    if (arraysAreDifferent) {
      this.setState({
        selected: nextProps.defaultSelected.slice(0),
      });
    }
  }

  onKeyDown(event) {
    // We only care about intercepting backspaces
    if (event.keyCode === KeyEvent.DOM_VK_BACKSPACE) {
      return this.handleBackspace(event);
    }

    this.props.onKeyDown(event);

    return null;
  }

  getSelectedTokens() {
    return this.state.selected;
  }

  getOptionsForTypeahead() {
    // return this.props.options without this.selected
    return this.props.options;
  }

  focus() {
    this.typeahead.focus();
  }

  handleBackspace(event) {
    const { selected } = this.state;

    // No tokens
    if (!selected.length) {
      return;
    }

    // Remove token ONLY when backspace pressed at
    // beginning of line without a selection
    const inputElement = this.typeahead.inputElement;

    if (
      inputElement.selectionStart === inputElement.selectionEnd &&
      inputElement.selectionStart === 0
    ) {
      this.removeTokenForValue(selected[selected.length - 1]);
      event.preventDefault();
    }
  }

  removeTokenForValue(value) {
    const { selected } = this.state;

    const index = selected.indexOf(value);

    if (index === -1) {
      return;
    }

    // TODO: not sure we should be doing this to state
    selected.splice(index, 1);

    this.setState({
      selected,
    });

    this.props.onTokenRemove(value);
  }

  addTokenForValue(event, value) {
    const { selected } = this.state;

    if (selected.indexOf(value) !== -1) {
      return;
    }

    // TODO: not sure we should be doing this to state
    selected.push(value);

    this.setState({
      selected,
    });

    this.typeahead.setEntryText("");
    this.props.onTokenAdd(value);
  }

  // TODO: Support initialized tokens
  renderTokens() {
    const {
      customClasses,
      disableDefaultClassNames,
      displayOption,
      formInputOption,
      name,
    } = this.props;

    const tokenClasses = {
      [defaultClassNames.token]: !disableDefaultClassNames,
    };

    tokenClasses[customClasses.token] = !!customClasses.token;

    const result = this.state.selected.map((selected) => {
      const displayString = Accessor.valueForOption(
        displayOption,
        selected,
      );

      const value = Accessor.valueForOption(
        formInputOption || displayOption,
        selected,
      );

      return (
        <TypeaheadToken
          className={cn(tokenClasses)}
          key={displayString}
          onRemove={this.removeTokenForValue}
          object={selected}
          value={value}
          name={name}
        >
          {displayString}
        </TypeaheadToken>
      );
    });

    return result;
  }

  render() {
    const classes = {};
    classes[this.props.customClasses.typeahead] = !!this.props.customClasses.typeahead;
    const classList = cn(classes);
    const tokenizerClasses = [!this.props.disableDefaultClassNames && defaultClassNames.tokenizer];
    tokenizerClasses[this.props.className] = !!this.props.className;
    const tokenizerClassList = cn(tokenizerClasses);

    return (
      <div className={tokenizerClassList}>
        {this.renderTokens()}

        <Typeahead
          ref={node => (this.typeahead = node)}
          className={classList}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          inputProps={this.props.inputProps}
          allowCustomValues={this.props.allowCustomValues}
          customClasses={this.props.customClasses}
          options={this.getOptionsForTypeahead()}
          initialValue={this.props.initialValue}
          maxVisible={this.props.maxVisible}
          resultsTruncatedMessage={this.props.resultsTruncatedMessage}
          onOptionSelected={this.addTokenForValue}
          onKeyDown={this.onKeyDown}
          onKeyPress={this.props.onKeyPress}
          onKeyUp={this.props.onKeyUp}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          displayOption={this.props.displayOption}
          disableDefaultClassNames={this.props.disableDefaultClassNames}
          filterOption={this.props.filterOption}
          searchOptions={this.props.searchOptions}
        />
      </div>
    );
  }
}

TypeaheadTokenizer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  customClasses: PropTypes.objectOf(PropTypes.string),
  allowCustomValues: PropTypes.number,
  defaultSelected: PropTypes.arrayOf(PropTypes.string),
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.string),
  onTokenRemove: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onTokenAdd: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  filterOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  searchOptions: PropTypes.func,
  displayOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  formInputOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  maxVisible: PropTypes.number,
  resultsTruncatedMessage: PropTypes.string,
  disableDefaultClassNames: PropTypes.bool,
};

TypeaheadTokenizer.defaultProps = {
  className: "",
  name: null,
  options: [],
  defaultSelected: [],
  customClasses: {},
  allowCustomValues: 0,
  initialValue: "",
  placeholder: "",
  disabled: false,
  inputProps: {},
  disableDefaultClassNames: false,
  filterOption: null,
  searchOptions: null,
  displayOption: (token) => token,
  formInputOption: null,
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onTokenAdd: () => {},
  onTokenRemove: () => {},
  maxVisible: 0,
  resultsTruncatedMessage: "",
};

export default TypeaheadTokenizer;
