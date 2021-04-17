import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  Search as SearchIcon,
  Loading as LoadingIcon,
} from "../icon";
import colors from "../../styles/colors";
import {
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading7,
  fontWeightBook,
  fontWeightMedium,
  lineHeightReset,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import SearchInput from "./searchInput";

const spinKeyframes = radium.keyframes({
  "0%": {
    transform: "rotate(0)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
}, "spin");

const styles = {
  search: {
    backgroundColor: colors.bgPrimary,
    borderBottom: `1px solid ${colors.borderPrimary}`,
    display: "flex",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
  },

  searchIcon: {
    alignItems: "center",
    display: "flex",
    fontSize: `${fontSizeHeading5}px`,
    lineHeight: lineHeightReset,
    paddingLeft: "16px",
    paddingRight: "16px",
  },

  searchInput: {
    borderBottom: 0,
    fontWeight: fontWeightBook,
  },

  button: {
    backgroundColor: colors.bgPrimary,
    color: colors.linkPrimary,
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,
    textAlign: "center",
  },

  cancelButton: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },

  loadingIcon: {
    alignSelf: "center",
    animation: "spin 500ms linear infinite",
    animationName: spinKeyframes,
    color: rgba(colors.textPrimary, 0.5),
    fontSize: `${fontSizeHeading4}px`,
  },
};

const AddBookmarkSearch = ({ onSearch, onCancel, isLoading }) => (
  <div style={styles.search}>
    <label
      htmlFor="lookup-place"
      style={styles.searchIcon}
    >
      <SearchIcon title="Add place" />
    </label>

    <SearchInput
      onSearch={onSearch}
      delay={300}
      id="lookup-place"
      placeholder="Add place"
      style={styles.searchInput}
    />

    {isLoading &&
      <LoadingIcon
        style={styles.loadingIcon}
      />
    }

    <button
      onClick={() => onCancel()}
      style={Object.assign({},
        styles.button,
        styles.cancelButton,
      )}
    >
      Cancel
    </button>
  </div>
);

AddBookmarkSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default radium(AddBookmarkSearch);
