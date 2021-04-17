import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Modal from "../modal";
import ModalWrapper from "../modal/wrapper";
import ListItemBookmarkEntry from "../listItemBookmarkEntry";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import {
  fontSizeHeading6,
  fontSizeHeading7,
  fontWeightMedium,
  lineHeightHeading6,
  lineHeightHeading7,
} from "../../styles/typography";
import globalStyles from "./styles";
import AddBookmarkSearch from "./addBookmarkSearch";

const styles = {
  searchItem: {
    backgroundColor: colors.bgPrimary,
    cursor: "pointer",
    display: "block",
    textAlign: "left",
    width: "100%",
  },

  button: {
    backgroundColor: colors.bgPrimary,
    color: colors.linkPrimary,
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,
    textAlign: "center",
  },

  addPlaceButton: {
    display: "flex",
    height: "72px",
    justifyContent: "center",
    lineHeight: lineHeightHeading7,
    width: "100%",

    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
      height: "92px",
      justifyContent: "flex-start",
      lineHeight: lineHeightHeading6,
      textAlign: "left",
    },
  },
};

class SearchBookmarkModal extends React.Component {
  static scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }
  constructor(props) {
    super(props);

    this.addBookmark = this.addBookmark.bind(this);
  }

  addBookmark(entry) {
    const { list, profile, onUpdateBookmark, onAddToList } = this.props;
    const entryExistsAndIsChecked = list.entries.some(
      item => item.target.id === entry.id && item.checked === true,
    );
    const entryExistsAndIsNotChecked = list.entries.some(
      item => item.target.id === entry.id && item.checked === false,
    );

    if (entryExistsAndIsNotChecked) {
      const currentEntry = list.entries.filter(item => item.target.id === entry.id)[0];

      onUpdateBookmark({
        userId: profile.id,
        listId: list.id,
        entryId: currentEntry.id,
        data: {
          checked: true,
          target: currentEntry.target,
        },
      });

      return;
    }

    if (entryExistsAndIsChecked) {
      return;
    }

    onAddToList({
      userId: profile.id,
      listId: list.id,
      data: {
        target: entry,
      },
    });
  }

  render() {
    const {
      open,
      onSearch,
      onCancel,
      results,
      isLoading,
    } = this.props;

    return (
      <ModalWrapper>
        {(isOpen, toggle) => (
          <div>
            <button
              style={[
                styles.button,
                styles.addPlaceButton,
              ]}
              onClick={() => {
                toggle();
                SearchBookmarkModal.scrollToTop();
              }}
            >
              + Add place
            </button>

            <Modal
              className="BookmarkListModal SearchBookmarkModal"
              isOpen={open || isOpen}
              closeModal={() => {
                toggle();
              }}
              disableContentPadding
              showTitle
            >
              <AddBookmarkSearch
                isLoading={isLoading}
                onSearch={onSearch}
                onCancel={() => {
                  toggle();
                  onCancel();
                }}
              />

              {Object.keys(results).length > 0 && Object.keys(results)
                .sort((a, b) => {
                  if (results[a].name < results[b].name) return -1;
                  if (results[a].name > results[b].name) return 1;
                  return 0;
                })
                .map(id => (
                  <button
                    key={`${results[id].name}-${id}`}
                    onClick={() => {
                      this.addBookmark(results[id]);
                      toggle();
                    }}
                    style={styles.searchItem}
                  >
                    <ListItemBookmarkEntry
                      name={results[id].name}
                      category={results[id].subtypes[0]}
                      city={results[id].containingCityName || results[id].containingCountryName}
                      priceRange={null}
                      topChoice={false}
                      style={[
                        globalStyles.listItem,
                        globalStyles.listItemNotFirst,
                      ]}
                    />
                  </button>
                ))
              }
            </Modal>
          </div>
        )}
      </ModalWrapper>
    );
  }
}

SearchBookmarkModal.propTypes = {
  onAddToList: PropTypes.func.isRequired,
  onUpdateBookmark: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  results: PropTypes.objectOf({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    visibility: PropTypes.oneOf(["public", "private"]),
    entries: PropTypes.arrayOf({
      target: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool,
};

SearchBookmarkModal.defaultProps = {
  open: false,
};

export default radium(SearchBookmarkModal);
