import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import mq from "../../styles/mq";
import colors from "../../styles/colors";

const styles = {
  ".ListItemContainer:not(:last-of-type)": {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    marginBottom: "40px",
    paddingBottom: "40px",
  },

  mediaQueries: {
    [`(min-width: ${mq.min[720]})`]: {
      ".ListItemContainer:not(:last-of-type)": {
        marginBottom: "48px",
        paddingBottom: "48px",
      },
    },
  },
};

const ListContainer = ({ items, className, adSlot }) => (
  <div className={`${cn("ListContainer", className)}`}>
    <Style
      scopeSelector=".ListContainer"
      rules={styles}
    />

    {adSlot}

    {items.map((item, index) =>
      <div className="ListItemContainer" key={index}>
        {item}
      </div>
    )}
  </div>
);

ListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  adSlot: PropTypes.element,
};

ListContainer.defaultProps = {
  className: null,
  adSlot: null,
};

export default radium(ListContainer);
