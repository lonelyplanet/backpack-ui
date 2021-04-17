import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Button from "../button";
import Textarea from "../textarea";
import Switch from "../switch";
import { Heading } from "../text";
import ListItemBookmarkEntry from "../listItemBookmarkEntry";
import { Delete as DeleteIcon } from "../icon";
import styles from "./styles";

class AddEditList extends React.Component {
  onUpdateBookmarkHandler = (entry) => {
    const { onUpdateBookmark, profile, list } = this.props;

    const entries = list.entries.filter(e => e.checked)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const currentEntry = entries.filter(e => entry.id === e.target.id)[0];

    onUpdateBookmark({
      userId: profile.id,
      listId: list.id,
      entryId: currentEntry.id,
      data: {
        checked: false,
        target: currentEntry.target,
      },
    });
  }

  render() {
    const {
      title,
      nameOnChange,
      nameValue,
      privacyChecked,
      privacyToggle,
      listItems,
      onSave,
      onCancel,
      disableSaveButton,
      saveButtonLabel,
    } = this.props;

    const hasListItems = listItems && listItems.length > 0;

    return (
      <div>
        <Heading
          level={2}
          size={4}
          weight="medium"
          style={styles.desktopModalHeading}
        >
          {title}
        </Heading>

        <div style={styles.fieldset}>
          <div style={styles.field}>
            <label
              style={styles.label}
              htmlFor="list-name"
            >
              List name
            </label>

            <Textarea
              id="list-name"
              name="list_name"
              onChange={nameOnChange}
              value={nameValue}
              maxLines={3}
              autofocus
              autogrow
            />
          </div>

          <div style={styles.field}>
            <div style={styles.label}>Privacy</div>

            <div style={styles.switch}>
              <label htmlFor="privacy-control">
                Appears in your public profile
              </label>

              <Switch
                id="privacy-control"
                name="privacy_control"
                value="private"
                checked={privacyChecked}
                onClick={privacyToggle}
              />
            </div>
          </div>

          {hasListItems &&
            <div style={styles.editListItemsContainer}>
              {listItems.map((entry, index) => (
                <div
                  key={entry.id}
                  style={[
                    styles.listItemEdit,
                    index && styles.listItemEditNotFirst,
                  ]}
                >
                  <ListItemBookmarkEntry
                    {...entry}
                    priceRange={null}
                    note={null}
                    style={[
                      styles.listItem,
                      styles.listItemEditEntry,
                    ]}
                  />

                  <button
                    key={`Delete button ${entry.id}`}
                    style={styles.listItemEditDeleteButton}
                    onClick={() => {
                      this.onUpdateBookmarkHandler(entry);
                    }}
                  >
                    <DeleteIcon label="Delete" />
                  </button>
                </div>
              ))}
            </div>
          }
        </div>

        <footer style={styles.desktopModalFooter}>
          <Button
            onClick={onCancel}
            customStyles={styles.desktopSaveButton}
            color="gray"
            rounded
            border
          >
            Cancel
          </Button>

          <Button
            onClick={onSave}
            disabled={disableSaveButton}
            customStyles={styles.desktopSaveButton}
            rounded
          >
            {saveButtonLabel}
          </Button>
        </footer>
      </div>
    );
  }
}

AddEditList.propTypes = {
  title: PropTypes.string.isRequired,
  nameOnChange: PropTypes.func.isRequired,
  privacyToggle: PropTypes.func.isRequired,
  privacyChecked: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  disableSaveButton: PropTypes.bool.isRequired,
  nameValue: PropTypes.string,
  saveButtonLabel: PropTypes.string,
  onUpdateBookmark: PropTypes.func,
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
  }),
  listItems: PropTypes.arrayOf({
    target: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

AddEditList.defaultProps = {
  nameValue: "",
  saveButtonLabel: "Save",
  onUpdateBookmark: null,
  list: {},
  profile: {},
  listItems: [],
};

export default radium(AddEditList);
