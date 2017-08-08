import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import AuthorName from "../authorName";
import ItalicText from "../italicText";

const styles = {
  container: {
    display: "inline-block",
  },

  italicText: {
    marginTop: "8px",
  },
};

const Author = ({ name, title, alignment, style }) => (
  <div
    className="Author"
    style={[
      styles.container,
      { textAlign: alignment },
      style,
    ]}
  >
    <AuthorName>
      {name}
    </AuthorName>

    <ItalicText style={styles.italicText}>
      {title}
    </ItalicText>
  </div>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  style: PropTypes.objectOf(PropTypes.object),
};

Author.defaultProps = {
  className: "Author",
  alignment: "left",
};

export default radium(Author);
