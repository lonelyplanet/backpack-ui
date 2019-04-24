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

function EditLink({ url, display, qahook }) {
  const Container = display === "block" ? "div" : "span";

  return (
    <Container
      className="EditLink"
      style={styles.container.base}
    >
      <a href={url} data-qa={qahook ? "suggest-an-edit-link" : null}>Suggest an edit</a>.
    </Container>
  );
}

EditLink.propTypes = {
  url: PropTypes.string.isRequired,

  display: PropTypes.oneOf([
    "inline",
    "block",
  ]),

  qahook: PropTypes.bool,
};

EditLink.defaultProps = {
  url: "",

  display: "block",

  qahook: false,
};

EditLink.styles = styles;

export default radium(EditLink);
