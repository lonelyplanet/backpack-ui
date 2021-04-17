import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Modal from "../modal";
import ModalWrapper from "../modal/wrapper";
import { MultiStep, MultiStepWrapper } from "../multiStep";
import BookmarkListMenu from "../bookmarkListMenu";
import BookmarkListMenuOption from "../bookmarkListMenu/option";
import AddEditList from "./addEditList";
import ConfirmDelete from "./confirmDelete";
import ModalAction from "./modalAction";
import styles from "./styles";

class EditListModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.list.name,
      visibility: props.list.visibility || "public",
    };
  }

  onSaveHandler = () => {
    const { onUpdate, profile, list } = this.props;
    const { name, visibility } = this.state;

    this.initialState = this.state;

    onUpdate({
      userId: profile.id,
      listId: list.id,
      data: {
        name,
        visibility,
      },
    });
  }

  onDeleteHandler = () => {
    const { onDelete, profile, list } = this.props;

    onDelete({
      userId: profile.id,
      listId: list.id,
    });

    window.location = `/profile/${profile.username}/lists`;
  }

  resetInitialState = () => {
    this.setState({
      name: this.props.list.name,
      visibility: this.props.list.visibility || "public",
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
    const { listItems, profile, list, onUpdateBookmark } = this.props;
    const disableSaveButton = this.state.name === "";

    return (
      <ModalWrapper>
        {(isOpen, toggle) => (
          <MultiStepWrapper totalSteps={2}>
            {(currentStep, goToNextStep, goToPreviousStep, setCurrentStep) => (
              <div>
                <BookmarkListMenu
                  className="BookmarksMenuOptions"
                  iconName="Ellipsis"
                  iconLabel="View list options"
                >
                  <BookmarkListMenuOption
                    onClick={toggle}
                  >
                    Edit list
                  </BookmarkListMenuOption>
                  <BookmarkListMenuOption
                    onClick={() => {
                      setCurrentStep(2);
                      toggle();
                    }}
                  >
                    Delete list
                  </BookmarkListMenuOption>
                </BookmarkListMenu>

                <Modal
                  className={cn(
                    "BookmarkListModal",
                    currentStep === 1 && "EditListModal",
                    currentStep === 2 && "DeleteListModal",
                  )}
                  isOpen={isOpen}
                  rightAction={(currentStep === 1) ? () => {
                    this.onSaveHandler();
                    toggle();
                  } : null}
                  rightActionContent={(currentStep === 1) ?
                    <ModalAction disabled={disableSaveButton}>
                      Save
                    </ModalAction> : null
                  }
                  rightActionDisabled={disableSaveButton}
                  leftAction={() => {
                    if (currentStep === 1) {
                      toggle();
                      this.resetInitialState();
                      setCurrentStep(1);
                    } else {
                      goToPreviousStep();
                    }
                  }}
                  leftActionContent={(currentStep === 1) ?
                    <ModalAction>Cancel</ModalAction> :
                    null
                  }
                  closeModal={() => {
                    toggle();
                    this.resetInitialState();
                    setCurrentStep(1);
                  }}
                  title={(currentStep === 1) ? "Edit list" : ""}
                  disableContentPadding
                  showTitle
                >
                  <MultiStep currentStep={currentStep} style={styles.multiStepContainer}>
                    <AddEditList
                      title="Edit list"
                      nameOnChange={this.nameChangeHandler}
                      nameValue={this.state.name}
                      privacyToggle={this.privacyClickHandler}
                      privacyChecked={this.state.visibility === "public"}
                      onSave={() => {
                        this.onSaveHandler();
                        toggle();
                      }}
                      onCancel={() => {
                        toggle();
                        this.resetInitialState();
                        setCurrentStep(1);
                      }}
                      disableSaveButton={disableSaveButton}
                      listItems={listItems}
                      profile={profile}
                      list={list}
                      onUpdateBookmark={onUpdateBookmark}
                    />

                    <ConfirmDelete
                      heading="Permanently delete this list?"
                      onDelete={this.onDeleteHandler}
                      onCancel={() => {
                        toggle();
                        setCurrentStep(1);
                      }}
                    />
                  </MultiStep>
                </Modal>
              </div>
          )}
          </MultiStepWrapper>
        )}
      </ModalWrapper>
    );
  }
}

EditListModal.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateBookmark: PropTypes.func.isRequired,
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
  listItems: PropTypes.arrayOf({
    target: PropTypes.shape({
      name: PropTypes.string,
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
};

export default EditListModal;
