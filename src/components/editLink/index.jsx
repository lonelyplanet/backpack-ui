import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import settings from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  container: {
    base: {
      color: settings.color.lightText,
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
      <a href={url}>Suggest an edit</a>.
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
