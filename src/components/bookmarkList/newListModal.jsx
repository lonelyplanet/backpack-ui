import React from "react";
import PropTypes from "prop-types";
import ListItemBookmark from "../listItemBookmark";
import Modal from "../modal";
import ModalWrapper from "../modal/wrapper";
import AddEditList from "./addEditList";
import styles from "./styles";

class NewListModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      visibility: "",
    };
  }

  componentDidMount() {
    this.setDefaultVisibility();
  }

  onSaveHandler = () => {
    const { onCreate, profile, history } = this.props;
    const { name, visibility } = this.state;

    onCreate({
      userId: profile.id,
      data: {
        name,
        visibility,
      },
      onDone: id => history.push(`/profile/${profile.username}/lists/${id}`),
    });

    this.clearListData();
  }

  setDefaultVisibility = () => {
    if (!this.state.visibility) {
      this.setState({
        visibility: "public",
      });
    }
  }

  clearListData = () => {
    this.setState({
      name: "",
      visibility: "public",
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  privacyClickHandler = () => {
    this.setState({
      visibility: this.state.visibility === "public" ? "private" : "public",
    });
  }

  render() {
    const { name, visibility } = this.state;
    const disableSaveButton = name === "" || visibility === "";

    return (
      <ModalWrapper>
        {(isOpen, toggle) => (
          <div style={styles.listItemAnchor}>
            <ListItemBookmark
              key="New list"
              name="New list"
              onClick={toggle}
              style={[
                styles.listItem,
                styles.listItemNotFirst,
                styles.listItemAnchorHover,
              ]}
              hideDetail
              addItem
              large
            />

            <Modal
              className="BookmarkListModal"
              isOpen={isOpen}
              leftAction={() => {
                toggle();
                this.clearListData();
              }}
              leftActionContent={
                <span style={styles.mobileSaveButton}>
                  Cancel
                </span>
              }
              rightAction={() => {
                this.onSaveHandler();
                toggle();
              }}
              rightActionContent={
                <span
                  style={[
                    styles.mobileSaveButton,
                    disableSaveButton && { opacity: 0.5 },
                  ]}
                >
                  Create
                </span>
              }
              rightActionDisabled={disableSaveButton}
              closeModal={() => {
                toggle();
                this.clearListData();
              }}
              title="New list"
              showTitle
              disableContentPadding
            >
              <AddEditList
                title="New list"
                nameOnChange={this.nameChangeHandler}
                nameValue={name}
                privacyToggle={this.privacyClickHandler}
                privacyChecked={visibility === "public"}
                disableSaveButton={disableSaveButton}
                saveButtonLabel="Create"
                onSave={() => {
                  this.onSaveHandler();
                  toggle();
                }}
                onCancel={() => {
                  toggle();
                  this.clearListData();
                }}
              />
            </Modal>
          </div>
        )}
      </ModalWrapper>
    );
  }
}

NewListModal.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default NewListModal;
