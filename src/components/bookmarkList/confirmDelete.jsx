import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { TextHeading } from "../text";
import Button from "../button";
import {
  fontSizeHeading7,
  lineHeightHeading7,
} from "../../styles/typography";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  description: {
    fontSize: `${fontSizeHeading7}px`,
    lineHeight: lineHeightHeading7,
    marginTop: "16px",
  },

  delete: {
    marginTop: "48px",
  },

  cancel: {
    marginTop: "16px",
  },

  button: {
    width: "128px",
  },
};

const ConfirmDelete = ({ heading, description, onDelete, onCancel }) => (
  <div style={styles.container}>
    <TextHeading level={4} size={6} weight="medium">
      {heading}
    </TextHeading>

    {description &&
      <p style={styles.description}>
        {description}
      </p>
    }

    <div style={styles.delete}>
      <Button
        onClick={onDelete}
        customStyles={styles.button}
        rounded
      >
        Yes
      </Button>
    </div>

    <div style={styles.cancel}>
      <Button
        color="gray"
        onClick={onCancel}
        customStyles={styles.button}
        rounded
        border
      >
        No
      </Button>
    </div>
  </div>
);

ConfirmDelete.propTypes = {
  heading: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  description: PropTypes.string,
};

ConfirmDelete.defaultProps = {
  description: "",
};

export default radium(ConfirmDelete);
