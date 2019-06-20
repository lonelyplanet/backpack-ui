import React, { Component } from "react";
import PropTypes from "prop-types";
import fuzzy from "fuzzy";
import { Style } from "radium";
import styles from "./styles";
import TypeaheadDropdown from "./typeaheadDropdown";
import TypeaheadStatus from "./typeaheadStatus";
import createClassList from "./utils/createClassList";
import Accessor from "./utils/accessor";
import KeyEvent from "./utils/keyEvent";

/**
 * A "typeahead", an auto-completing text input
 *
 * Renders an text input that shows options nearby that you can use the
 * keyboard or mouse to select. Requires CSS for MASSIVE DAMAGE.
 */
let count = 0;

class Typeahead extends Component {
  static getInstanceCount() {
    return ++count; // eslint-disable-line no-plusplus
  }

  constructor(props) {
    super(props);

    this.state = {
      // The options matching the entry value
      // searchResults: this.getOptionsForValue(props.initialValue, props.options),
      searchResults: [],

      // This should be called something else, "entryValue"
      entryValue: props.value || props.initialValue,

      // A valid typeahead value
      selection: props.value,

      // Index of the selection
      selectionIndex: null,

      // Keep track of the focus state of the input element, to determine
      // whether to show options when empty (if showOptionsWhenEmpty is true)
      isFocused: false,

      // true when focused, false onOptionSelected
      showResults: false,

      isDropdownVisible: false,
    };

    this.previousInputValue = null;

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
    this.onTab = this.onTab.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onOptionSelected = this.onOptionSelected.bind(this);
    this.onTextEntryUpdated = this.onTextEntryUpdated.bind(this);
    this.getOptionsForValue = this.getOptionsForValue.bind(this);
    this.setEntryText = this.setEntryText.bind(this);
    this.getSelection = this.getSelection.bind(this);
    this.getCustomValue = this.getCustomValue.bind(this);
    this.setSelectedIndex = this.setSelectedIndex.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.focus = this.focus.bind(this);
    this.hasCustomValue = this.hasCustomValue.bind(this);
    this.countTruncatedResults = this.countTruncatedResults.bind(this);
    this.areResultsTruncated = this.areResultsTruncated.bind(this);
    this.resultsTruncatedMessage = this.resultsTruncatedMessage.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.hasHint = this.hasHint.bind(this);
    this.generateSearchFunction = this.generateSearchFunction.bind(this);
    this.shouldSkipSearch = this.shouldSkipSearch.bind(this);
    this.eventMap = this.eventMap.bind(this);
    this.nav = this.nav.bind(this);
    this.navDown = this.navDown.bind(this);
    this.navUp = this.navUp.bind(this);
    this.renderIncrementalSearchResults = this.renderIncrementalSearchResults.bind(this);
    this.renderHiddenInput = this.renderHiddenInput.bind(this);
    this.renderAriaMessageForOptions = this.renderAriaMessageForOptions.bind(this);
    this.renderAriaMessageForIncomingOptions = this.renderAriaMessageForIncomingOptions.bind(this);
  }

  componentWillMount() {
    const uniqueId = Typeahead.getInstanceCount();

    this.activeDescendantId = `typeaheadActiveDescendant-${uniqueId}`;
    this.optionsId = `typeaheadOptions-${uniqueId}`;
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      // The `focus` event does not bubble, so we must capture it instead.
      // This closes Typeahead's dropdown whenever something else gains focus.
      window.addEventListener("focus", this.handleWindowClose, true);

      // If we click anywhere outside of Typeahead, close the dropdown.
      window.addEventListener("click", this.handleWindowClose, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { options } = nextProps;
    const { entryValue } = this.state;

    this.setState({
      searchResults: this.getOptionsForValue(entryValue, options),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { entryValue } = this.state;

    if (entryValue !== prevState.entryValue && !prevState.isDropdownVisible) {
      this.showDropdown();
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("focus", this.handleWindowClose, true);
      window.removeEventListener("click", this.handleWindowClose, false);
    }
  }

  onMouseOver(event, index) {
    this.setState({
      selectionIndex: index,
    });
  }

  onMouseOut() {
    this.setState({
      selectionIndex: null,
    });
  }

  onKeyUp(e) {
    const query = e.target.value;
    clearTimeout(this.searchTimer);

    if (this.props.validate) {
      this.props.validate(query, this.state.searchResults);
    }

    if (e.key === "Backspace" && query === "") {
      return;
    }

    if (e.key !== "Enter" && e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      this.searchTimer = setTimeout(() => {
        this.props.dataSource(query)
          .then((json) => {
            let results = [];
            if (this.props.filterResults) {
              results = this.props.filterResults(json);
            } else {
              results = json.places.map(place => place.attributes.name);
            }

            if (this.props.validate) {
              this.props.validate(query, results);
            }
            this.props.onKeyUp(json.places);
            this.setState({ searchResults: results });
          });
      }, 200);
    }
  }

  onEnter(event) {
    const selection = this.getSelection();

    if (!selection) {
      return this.props.onKeyDown(event);
    }

    return this.onOptionSelected(event, selection);
  }

  onEscape() {
    this.setState({
      isDropdownVisible: false,
      selectionIndex: null,
    });
  }

  onBackspace() {
    if (this.state.selectionIndex !== null) {
      this.setState({
        selectionIndex: null,
      });
    }
  }

  onTab(event) {
    let option = this.getSelection();

    if (!option && this.hasCustomValue()) {
      option = this.getCustomValue();
    }

    if (option) {
      return this.onOptionSelected(event, option);
    }

    return null;
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    this.onTextEntryUpdated();
  }

  onKeyDown(event) {
    /**
     * If there are no visible elements, don't perform selector
     * navigation. Just pass this up to the upstream onKeydown handler.
     * Also skip if the user is pressing the shift key, since none of
     * our handlers are looking for shift
     */
    if (!this.hasHint() || event.shiftKey) {
      return this.props.onKeyDown(event);
    }

    const handler = this.eventMap()[event.keyCode];

    if (handler) {
      handler(event);
    } else {
      return this.props.onKeyDown(event);
    }

    // Don't propagate the keystroke back to the DOM/browser
    if (
      event.keyCode !== KeyEvent.DOM_VK_BACKSPACE &&
      event.keyCode !== KeyEvent.DOM_VK_TAB
    ) {
      event.preventDefault();
    }

    return null;
  }

  onFocus(event) {
    this.setState({
      isFocused: true,
      showResults: true,
      isDropdownVisible: true,
    }, () => {
      this.onTextEntryUpdated();
    });

    if (this.props.onFocus) {
      return this.props.onFocus(event);
    }

    return null;
  }

  async onBlur(event) {
    this.setState({
      isFocused: false,
    }, () => {
      this.onTextEntryUpdated();
    });

    const thereAreSearchResults = this.state.searchResults.length > 0;
    const thereIsInput = event.target.value !== "";
    /**
     * If the user is not hovering or arrow-keying over any particular option, we may safely
     * select the topmost option among the search results. It'll either be the one
     * that they've already selected, or they otherwise are not disclosing any specific preference.
     */
    const noSpecificSelectionIsPending = [null, -1].includes(this.state.selectionIndex);
    const insertFirstSearchResult = [
      this.props.forceSelection,
      noSpecificSelectionIsPending,
      thereAreSearchResults,
      thereIsInput,
    ].every(Boolean);

    if (insertFirstSearchResult) {
      // Force selection of the first search result.
      const [option] = this.state.searchResults;
      const optionString = this.displayOption(option, 0);
      await this.setSelectedOption(option);
      if (this.props.validate) {
        this.props.validate(optionString, this.state.searchResults);
      }
      this.props.onOptionSelected(event, option);
    }

    if (this.props.onBlur) {
      return this.props.onBlur(event);
    }

    return null;
  }

  onOptionSelected(event, option) {
    const optionString = this.displayOption(option, 0);
    this.inputElement.focus();
    this.setSelectedOption(option);
    this.inputElement.blur();
    if (this.props.validate) {
      this.props.validate(optionString, this.state.searchResults);
    }
    return this.props.onOptionSelected(event, option);
  }

  onTextEntryUpdated() {
    const { options } = this.props;
    const value = this.inputElement.value;

    this.setState({
      searchResults: this.getOptionsForValue(value, options),
      selection: "",
      entryValue: value,
    });
  }

  async setSelectedOption(option) {
    const optionString = this.displayOption(option, 0);
    const formInputOptionString = this.formInputOption(option);
    this.inputElement.value = optionString;
    const results = this.getOptionsForValue(optionString, this.props.options);
    await new Promise((resolve) => {
      this.setState({
        searchResults: results,
        selection: formInputOptionString,
        selectionIndex: results.indexOf(optionString),
        entryValue: optionString,
        showResults: false,
      }, resolve);
    });
  }

  getOptionsForValue(value, options) {
    if (this.shouldSkipSearch(value)) {
      return [];
    }

    const searchOptions = this.generateSearchFunction();
    return searchOptions(value, options);
  }

  setEntryText(value) {
    this.inputElement.value = value;
    this.onTextEntryUpdated();
  }

  getSelection() {
    let index = this.state.selectionIndex;

    if (this.hasCustomValue()) {
      if (index === 0) {
        return this.state.entryValue;
      }

      index -= 1;
    }

    return this.state.searchResults[index];
  }

  getCustomValue() {
    const { entryValue } = this.state;

    if (this.hasCustomValue()) {
      return entryValue;
    }

    return null;
  }

  setSelectedIndex(index, callback) {
    this.setState({
      selectionIndex: index,
    }, callback);
  }

  showDropdown() {
    this.setState({
      isDropdownVisible: true,
    });
  }

  hideDropdown() {
    this.setState({
      isDropdownVisible: false,
    });
  }

  focus() {
    this.inputElement.focus();
  }

  hasCustomValue() {
    const { allowCustomValues } = this.props;
    const { entryValue, searchResults } = this.state;

    if (
      allowCustomValues > 0 &&
      entryValue.length >= allowCustomValues &&
      searchResults.indexOf(entryValue) < 0
    ) {
      return true;
    }

    return false;
  }

  countTruncatedResults() {
    const { maxVisible } = this.props;
    const { searchResults } = this.state;

    return parseInt(searchResults.length, 10) - parseInt(maxVisible, 10);
  }

  areResultsTruncated() {
    const { maxVisible } = this.props;
    const { searchResults } = this.state;

    return !!maxVisible && (searchResults.length > maxVisible);
  }

  resultsTruncatedMessage() {
    const areResultsTruncated = this.areResultsTruncated();
    const countTruncatedResults = this.countTruncatedResults();

    const {
      resultsTruncatedMessage: message,
    } = this.props;

    return areResultsTruncated ? (
      message || `There are ${countTruncatedResults} more results.`
    ) : "";
  }

  get displayOption() {
    return Accessor.generateOptionToStringFor(
      this.props.inputDisplayOption || this.props.displayOption,
    );
  }

  get formInputOption() {
    return Accessor.generateOptionToStringFor(
      this.props.formInputOption || this.displayOption,
    );
  }

  handleWindowClose(event) {
    const target = event.target;

    if (target !== window && !this.typeahead.contains(target)) {
      this.hideDropdown();
    }
  }

  hasHint() {
    return this.state.searchResults.length > 0 || this.hasCustomValue();
  }

  generateSearchFunction() {
    const { searchOptions, filterOption } = this.props;

    if (typeof searchOptions === "function") {
      return searchOptions;
    } else if (typeof filterOption === "function") {
      return (value, options) => options.filter((o) => filterOption(value, o));
    }

    let mapper;

    if (typeof filterOption === "string") {
      mapper = Accessor.generateAccessor(filterOption);
    } else {
      mapper = Accessor.identityFunction;
    }

    return (value, options) => fuzzy
      .filter(value, options, { extract: mapper })
      .map((res) => options[res.index]);
  }

  shouldSkipSearch(input) {
    const { showOptionsWhenEmpty } = this.props;
    const { isFocused } = this.state;
    const emptyValue = !input || input.trim().length === 0;

    return !(showOptionsWhenEmpty && isFocused) && emptyValue;
  }

  eventMap() {
    const events = {};

    events[KeyEvent.DOM_VK_UP] = this.navUp;
    events[KeyEvent.DOM_VK_DOWN] = this.navDown;
    events[KeyEvent.DOM_VK_RETURN] = this.onEnter;
    events[KeyEvent.DOM_VK_ENTER] = this.onEnter;
    events[KeyEvent.DOM_VK_ESCAPE] = this.onEscape;
    events[KeyEvent.DOM_VK_BACKSPACE] = this.onBackspace;
    events[KeyEvent.DOM_VK_TAB] = this.onTab;

    return events;
  }

  nav(delta) {
    if (!this.hasHint()) {
      return;
    }

    const setIndex = delta === 1 ? 0 : delta;

    let newIndex = this.state.selectionIndex === null ?
      setIndex :
      this.state.selectionIndex + delta;

    let length = this.props.maxVisible ?
      this.state.searchResults.slice(0, this.props.maxVisible).length :
      this.state.searchResults.length;

    if (this.hasCustomValue()) {
      length += 1;
    }

    if (newIndex < 0) {
      newIndex += length;
    } else if (newIndex >= length) {
      newIndex -= length;
    }

    this.setState({
      selectionIndex: newIndex,
      entryValue: this.state.searchResults[newIndex],
    });
  }

  navDown() {
    if (this.state.isDropdownVisible) {
      this.nav(1);
    } else {
      this.showDropdown();
    }
  }

  navUp() {
    if (this.state.isDropdownVisible) {
      this.nav(-1);
    } else {
      this.showDropdown();
    }
  }

  renderIncrementalSearchResults() {
    // Nothing has been entered into the textbox
    if (this.shouldSkipSearch(this.state.entryValue)) {
      return "";
    }

    // Something was just selected
    if (this.state.selection) {
      return "";
    }

    const ListComponent = this.props.customListComponent;

    return (
      <ListComponent
        ref={node => (this.dropdown = node)}
        id={this.optionsId}
        isVisible={this.state.isDropdownVisible}
        activeDescendantId={this.activeDescendantId}
        options={this.props.maxVisible ?
          this.state.searchResults.slice(0, this.props.maxVisible) :
          this.state.searchResults
        }
        areResultsTruncated={this.areResultsTruncated()}
        resultsTruncatedMessage={this.resultsTruncatedMessage()}
        onOptionSelected={this.onOptionSelected}
        allowCustomValues={this.props.allowCustomValues}
        customValue={this.getCustomValue()}
        customClasses={this.props.customClasses}
        selectionIndex={this.state.selectionIndex}
        disableDefaultClassNames={this.props.disableDefaultClassNames}
        displayOption={Accessor.generateOptionToStringFor(this.props.displayOption)}
        onMouseOver={this.onMouseOver}
      />
    );
  }

  renderHiddenInput() {
    const { name } = this.props;
    const { selection } = this.state;

    if (!name) {
      return null;
    }

    return (
      <input
        type="hidden"
        name={name}
        value={selection}
      />
    );
  }

  renderAriaMessageForOptions() {
    const inputValue = this.state.entryValue;
    const options = this.state.searchResults;
    const selectedOption = options[this.state.selectionIndex];

    return (
      <TypeaheadStatus>
        {selectedOption || inputValue}
      </TypeaheadStatus>
    );
  }

  renderAriaMessageForIncomingOptions() {
    const { maxVisible } = this.props;
    const { searchResults } = this.state;
    const options = searchResults || [];
    const totalOptions = options.length ? options.length : 0;
    const numberOfSuggestions = maxVisible && (maxVisible < options.length) ?
      maxVisible : totalOptions;
    const suggestionText = `${numberOfSuggestions} suggestion${numberOfSuggestions !== 1 ? "s are" : " is"} available.`;
    const instructionText = numberOfSuggestions > 0 ? "Use up and down arrows to select." : "";

    return (
      <TypeaheadStatus>
        {`${suggestionText} ${instructionText}`}
      </TypeaheadStatus>
    );
  }

  render() {
    const {
      className,
      customClasses,
      disableDefaultClassNames,
      textarea,
      disabled,
      placeholder,
      onKeyPress,
      autoFocus,
      required,
      inputId,
      inputName,
    } = this.props;

    const InputElement = textarea ? "textarea" : "input";

    const containerClassList = createClassList(
      className,
      "typeahead",
      disableDefaultClassNames,
    );

    const inputClassList = createClassList(
      customClasses.input,
      "input",
      disableDefaultClassNames,
    );

    let value = this.props.value;

    if (this.props.forceSelection &&
        this.props.value !== this.props.initialValue &&
        (this.state.searchResults.indexOf(this.props.value) === -1) &&
        this.state.selectionIndex === null) {
      value = this.state.entryValue;
    }

    return (
      <div
        className={containerClassList}
        ref={node => (this.typeahead = node)}
        onMouseOut={this.onMouseOut}
        style={this.props.style}
      >
        <Style rules={styles} />

        {this.renderHiddenInput()}

        <InputElement
          ref={node => (this.inputElement = node)}
          className={inputClassList}
          type="text"
          role="combobox"
          aria-owns={this.optionsId}
          aria-controls={this.optionsId}
          aria-expanded={this.state.isDropdownVisible}
          aria-autocomplete="both"
          aria-activedescendant={this.activeDescendantId}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          autoFocus={autoFocus}
          required={required}
          spellCheck={false}
          id={inputId}
          name={inputName}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={this.onKeyUp} // eslint-disable-line react/jsx-no-bind
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />

        {this.state.showResults && this.renderIncrementalSearchResults()}

        {this.renderAriaMessageForOptions()}
        {this.renderAriaMessageForIncomingOptions()}
      </div>
    );
  }
}

Typeahead.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  customClasses: PropTypes.shape({
    hover: PropTypes.string,
    input: PropTypes.string,
    listAnchor: PropTypes.string,
    listItem: PropTypes.string,
    results: PropTypes.string,
    resultsTruncated: PropTypes.string,
    customAdd: PropTypes.string,
  }),
  dataSource: PropTypes.func,
  maxVisible: PropTypes.number,
  resultsTruncatedMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  allowCustomValues: PropTypes.number,
  initialValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  textarea: PropTypes.bool,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  onOptionSelected: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  filterResults: PropTypes.func,
  validate: PropTypes.func,
  forceSelection: PropTypes.bool,
  filterOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  searchOptions: PropTypes.func,
  displayOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  inputDisplayOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  formInputOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  disableDefaultClassNames: PropTypes.bool,
  customListComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  showOptionsWhenEmpty: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Typeahead.defaultProps = {
  options: [],
  className: null,
  customClasses: {},
  allowCustomValues: 0,
  initialValue: "",
  value: "",
  placeholder: "",
  disabled: false,
  textarea: false,
  inputId: "typeaheadInput",
  inputName: "typeaheadInput",
  autoFocus: false,
  required: false,
  onOptionSelected: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onBlur: () => {},
  filterResults: null,
  validate: null,
  forceSelection: false,
  filterOption: null,
  searchOptions: null,
  inputDisplayOption: null,
  disableDefaultClassNames: false,
  customListComponent: TypeaheadDropdown,
  showOptionsWhenEmpty: false,
  maxVisible: 0,
  displayOption: null,
  formInputOption: null,
  name: null,
  resultsTruncatedMessage: null,
  style: null,
  dataSource: () => new Promise((resolve) => resolve([])),
};

export default Typeahead;
