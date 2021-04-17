import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Modal from "../modal";
import ListItemBookmarkEntry from "../listItemBookmarkEntry";
import Textarea from "../textarea";
import { Heading } from "../text";
import ModalAction from "./modalAction";
import styles from "./styles";

class EditNoteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteValue: props.entry.note,
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      noteValue: newProps.entry.note,
    });
  }

  handleSave() {
    this.props.onSaveHandler(this.state.noteValue);
  }

  handleChange(event) {
    this.setState({
      noteValue: event.target.value,
    });
  }

  render() {
    return (
      <Modal
        className="BookmarkListModal BookmarkNoteModal"
        isOpen={this.props.isOpen}
        rightAction={this.handleSave}
        rightActionContent={
          <ModalAction>Save</ModalAction>
        }
        leftAction={this.props.leftAction}
        leftActionContent={
          <ModalAction>Cancel</ModalAction>
        }
        closeModal={this.props.handleClose}
        title="Note"
        disableContentPadding
        showTitle
      >
        <div>
          <Heading
            level={2}
            size={4}
            weight="medium"
            style={styles.desktopModalHeading}
          >
            Note
          </Heading>

          <div style={styles.editNote}>
            <ListItemBookmarkEntry
              {...this.props.entry}
              note={null}
            />

            <Textarea
              id="list-note"
              name="list_note"
              placeholder="Add note…"
              value={this.state.noteValue}
              onChange={this.handleChange}
              style={styles.editNoteTextArea}
              maxLines={10}
              autofocus
              autogrow
            />
          </div>

          <footer style={styles.desktopModalFooter}>
            <Button
              onClick={this.props.leftAction}
              customStyles={styles.desktopSaveButton}
              color="gray"
              rounded
              border
            >
              Cancel
            </Button>

            <Button
              onClick={this.handleSave}
              customStyles={styles.desktopSaveButton}
              rounded
            >
              Save
            </Button>
          </footer>
        </div>
      </Modal>
    );
  }
}

EditNoteModal.propTypes = {
  onSaveHandler: PropTypes.func.isRequired,
  leftAction: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    note: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool,
};

EditNoteModal.defaultProps = {
  isOpen: false,
};

export default EditNoteModal;
