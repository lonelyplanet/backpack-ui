import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import font from "../../utils/font";

const styles = {
  container: {
    base: {
      color: colors.textSecondary,
      fontFamily: font("miller"),
      fontSize: "1.6rem",
      fontStyle: "italic",
      lineHeight: 1,
    },
  },
};

function EditLink({ url, display }) {
  const Container = display === "block" ? "div" : "span";

  return (
    <Container
      className="EditLink"
      style={styles.container.base}
    >
      <a href={url} data-qa="suggest-an-edit-link">Suggest an edit</a>.
    </Container>
  );
}

EditLink.propTypes = {
  url: PropTypes.string.isRequired,

  display: PropTypes.oneOf([
    "inline",
    "block",
  ]),
};

EditLink.defaultProps = {
  url: "",

  display: "block",
};

EditLink.styles = styles;

export default radium(EditLink);
