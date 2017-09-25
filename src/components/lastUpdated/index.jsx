import React from "react";
import PropTypes from "prop-types";
import settings from "../../../settings.json";

const styles = {
  base: {
    color: settings.color.lightText,
    fontFamily: settings.font.family.miller,
    fontSize: "1.6rem",
    fontStyle: "italic",
    lineHeight: 1,
  },
};

/**
 * LastUpdated component
 */
function LastUpdated({ date, editUrl }) {
  return (
    <div
      className="LastUpdated"
      style={styles.base}
    >
      <p>
        Last updated {date}. {editUrl && <a href={editUrl}>Suggest an edit.</a>}
      </p>
    </div>
  );
}

LastUpdated.propTypes = {
  /**
   * Date
   */
  date: PropTypes.string.isRequired,

  /**
   * Link to "suggest an edit" page
   */
  editUrl: PropTypes.string,
};

LastUpdated.defaultProps = {
  content: "",

  editUrl: "",
};

LastUpdated.styles = styles;

export default LastUpdated;
