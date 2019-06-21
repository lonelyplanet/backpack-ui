import React from "react";
import PropTypes from "prop-types";

import colors from "../../styles/colors";
import { miller } from "../../styles/fonts";

const styles = {
  base: {
    color: colors.textSecondary,
    fontFamily: miller,
    fontSize: "1.6rem",
    fontStyle: "italic",
    lineHeight: 1,
  },
};

/**
 * LastUpdated component
 */
function LastUpdated({ date, editUrl, qaHook }) {
  return (
    <div
      className="LastUpdated"
      style={styles.base}
    >
      <p>
        Last updated {date}. {editUrl && <a data-testid={qaHook ? "suggest-an-edit-last-updated-link" : null} href={editUrl}>Suggest an edit.</a>}
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

  qaHook: PropTypes.bool,
};

LastUpdated.defaultProps = {
  content: "",

  editUrl: "",

  qaHook: false,
};

LastUpdated.styles = styles;

export default LastUpdated;
