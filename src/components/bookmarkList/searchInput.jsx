import React from "react";
import PropTypes from "prop-types";
import Input from "../input";

class SearchInput extends React.Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  componentWillUnmount() {
    this.searchInput.blur();
    this.searchInput.value = "";
  }

  render() {
    let searchTimer;
    const { delay, onSearch, ...props } = this.props;

    const onChange = (event) => {
      const query = event.target.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        onSearch(query);
      },
      delay);
    };

    return (
      <Input
        {...props}
        innerRef={(node) => { this.searchInput = node; }}
        onChange={onChange}
      />
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

SearchInput.defaultProps = {
  onSearch: () => null,
  delay: 50,
};

export default SearchInput;
