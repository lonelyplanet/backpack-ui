import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal";
import { MultiStep } from "../multiStep";
import ListItemBookmark from "../listItemBookmark";
import AddEditList from "./addEditList";
import ModalAction from "./modalAction";
import styles from "./styles";

class AddBookmarkModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      visibility: "public",
    };
  }

  onSaveList = () => {
    this.props.onSaveList({
      list: {
        name: this.state.name,
        visibility: this.state.visibility,
      },
      bookmark: {},
    });
    this.props.toggle();
    this.props.goToPreviousStep();
    this.clearListData();
  }

  onCreateBookmark = ({ list, bookmark }) => {
    this.props.onCreateBookmark({ list, bookmark });
    this.closeModal();
  }

  getListImage(list) {
    const { pois } = this.props;

    if (!pois) {
      return "";
    }

    const entry = list.entries
      .filter(en => en.checked)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .find(e =>
        pois[e.target.type] &&
        pois[e.target.type][e.target.id] &&
        pois[e.target.type][e.target.id].images &&
        pois[e.target.type][e.target.id].images.length);

    if (entry) {
      const images = pois[entry.target.type][entry.target.id].images;

      if (images) {
        const url = images[0].url
          .replace(/media.lonelyplanet.com/, "lonelyplanetimages.imgix.net");
        return `${url}?w=78&h=72&fit=crop`;
      }
    }
    return "";
  }

  leftAction = () => {
    if (this.props.currentStep === 1) {
      this.props.toggle();
    } else {
      this.props.goToPreviousStep();
      this.clearListData();
    }
  }

  rightAction = () => {
    if (this.props.currentStep === 1) {
      this.props.toggle();
    } else {
      this.props.onCreateBookmark({
        list: {
          name: this.state.name,
          visibility: this.state.visibility,
        },
        bookmark: {},
      });
      this.props.toggle();
      this.props.goToPreviousStep();
      this.clearListData();
    }
  }

  rightActionContent = () => {
    const disableSaveButton = this.state.name === "" || this.state.name.length < 2;

    if (this.props.currentStep === 1) {
      return null;
    }

    return (
      <ModalAction disabled={disableSaveButton}>
        Create
      </ModalAction>
    );
  }

  leftActionContent = () => {
    if (this.props.currentStep === 1) {
      return null;
    }

    return (
      <ModalAction>
        Cancel
      </ModalAction>
    );
  }

  modalStyle = () => this.props.mobile && Object.assign({}, {
    content: styles.modalContent.tall,
  }, this.props.currentStep === 1 ? {
    content: styles.modalContent.short,
  } : {});

  closeModal = () => {
    this.props.toggle();
    this.props.setCurrentStep(1);
    this.clearListData();
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

  clearListData = () => {
    this.setState({
      name: "",
      visibility: "public",
    });
  }

  render() {
    const {
      currentStep,
      goToNextStep,
      isOpen,
      lists,
      poi,
    } = this.props;

    const disableSaveButton = this.state.name === "" || this.state.name.length < 2;
    const hasLists = Object.keys(lists).length > 0;
    const visibility = {
      public: "Public",
      private: "Private",
    };
    const listIds = Object.keys(lists);
    const title = {
      step1: "Save to list",
      step2: "New list",
    };

    return (
      <Modal
        className={`BookmarkListModal modal-step-${currentStep}`}
        isOpen={isOpen}
        rightAction={this.rightAction}
        rightActionContent={this.rightActionContent()}
        rightActionDisabled={(currentStep === 1) ? false : disableSaveButton}
        leftAction={this.leftAction}
        leftActionContent={this.leftActionContent()}
        closeModal={this.closeModal}
        title={(currentStep === 1) ? title.step1 : title.step2}
        style={this.modalStyle()}
        disableContentPadding
      >
        <MultiStep currentStep={currentStep} style={styles.multiStepContainer}>
          <div style={{ height: "100%" }} key={title.step1}>
            {hasLists && listIds.map((listId, index) => {
              const list = this.props.lists[listId];
              let bookmark;

              if (list.entries.length > 0) {
                bookmark = list.entries.find(e => e.target.id === poi.id);
              }

              return (
                <ListItemBookmark
                  key={listId}
                  name={list.name}
                  thumbnail={this.getListImage(list)}
                  entriesCount={list.entries.filter(e => e.checked).length}
                  visibility={visibility[list.visibility]}
                  style={[
                    styles.listItemAnchor,
                    styles.listItem,
                    index && styles.listItemNotFirst,
                    styles.listItemAnchorHover.inline,
                  ]}
                  onClick={() => this.onCreateBookmark({ list, bookmark })}
                  checked={bookmark && bookmark.checked}
                />
              );
            })}

            <ListItemBookmark
              key="New list"
              name="New list"
              onClick={goToNextStep}
              style={[
                styles.listItemAnchor,
                styles.listItem,
                styles.listItemNotFirst,
                styles.listItemAnchorHover.inline,
              ]}
              hideDetail
              addItem
            />
          </div>

          <div style={{ height: "100%" }} key={title.step2}>
            <AddEditList
              title="New list"
              nameOnChange={this.nameChangeHandler}
              nameValue={this.state.name}
              privacyToggle={this.privacyClickHandler}
              privacyChecked={this.state.visibility === "public"}
              onSave={this.onSaveList}
              onCancel={this.leftAction}
              disableSaveButton={disableSaveButton}
            />
          </div>
        </MultiStep>
      </Modal>
    );
  }
}

AddBookmarkModal.propTypes = {
  currentStep: PropTypes.func,
  goToNextStep: PropTypes.func,
  goToPreviousStep: PropTypes.func,
  setCurrentStep: PropTypes.func,
  toggle: PropTypes.func,
  isOpen: PropTypes.func,
  onCreateBookmark: PropTypes.func,
  onSaveList: PropTypes.func,
  lists: PropTypes.arrayOf({}),
  poi: PropTypes.shape({}),
  pois: PropTypes.shape({}),
  mobile: PropTypes.bool,
};

export default AddBookmarkModal;
