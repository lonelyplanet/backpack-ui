import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import cn from "classnames";
import { color, media } from "../../../settings.json";
import { rgb } from "../../utils/color";

const styles = {
  ".ListItemContainer:not(:last-of-type)": {
    borderBottom: `1px solid rgba(${rgb(color.lightBlue)}, .3)`,
    marginBottom: "40px",
    paddingBottom: "40px",
  },

  mediaQueries: {
    [`(min-width: ${media.min["720"]})`]: {
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
