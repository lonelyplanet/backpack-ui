import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { color } from "../../../settings.json";
import { span } from "../../utils/grid";
import font from "../../utils/font";

const baseFontSize = 13;

const styles = {
  container: {
    base: {
      fontFamily: font("benton"),
      fontSize: `${baseFontSize}px`,
      lineHeight: (24 / baseFontSize),
    },
  },

  list: {
    base: {
      listStyle: "none",
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      padding: 0,
    },

    single: {
      marginTop: `${-5 / baseFontSize}em`, // bring top of text 30px from header
    },

    grouped: {
      marginBottom: `${-23 / baseFontSize}em`, // offset item.grouped bottom margin
    },
  },

  item: {
    base: {
      color: color.darkGray,
    },

    grouped: {
      base: {
        WebkitColumnBreakInside: "avoid",
        pageBreakInside: "avoid",
        breakInside: "avoid",
        display: "inline-block",
        marginBottom: `${23 / baseFontSize}em`,
        width: "100%",
      },
    },
  },

  heading: {
    base: {
      color: color.titleGray,
      fontSize: `${14 / baseFontSize}em`,
      fontWeight: 600,
      lineHeight: (24 / 14),
      margin: 0,
    },
  },
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}
const getListItems = (items, capitalize) => {
  const ListItems = items.map((item, index) => (
    <li
      key={index}
      dangerouslySetInnerHTML={markup(item)}
      style={[styles.item.base, capitalize && { textTransform: "capitalize" }]}
    />
  ));

  return ListItems;
};

const getGroupedItems = (items) => {
  const GroupedItems = items.map((group, index) => {
    const groupedItemStyle = [styles.item.grouped.base];

    return (
      <div
        style={groupedItemStyle}
        key={index}
      >
        <h5 style={styles.heading.base}>
          {group.title}
        </h5>

        <ul style={styles.list.base}>
          {getListItems(group.items, group.capitalize, "grouped")}
        </ul>
      </div>
    );
  });

  return GroupedItems;
};

/**
 * Amenities list component
 */
function Amenities({ columns, items = [], listType }) {
  const columnWidth = span(`${(6 / columns)} of 6`, "static");

  const style = {
    list: {
      single: [styles.list.base, styles.list.single],
      grouped: [styles.list.base, styles.list.single, styles.list.grouped],
    },
  };

  if (columns !== 1) {
    style.list[listType].push({
      columns: `${columnWidth} ${columns}`,
      columnGap: `${(24 / 13)}em`,
    });
  }

  const ListComponent = listType === "single" ? (
    <ul
      className="Amenities-list"
      style={style.list.single}
    >
      {getListItems(items)}
    </ul>
  ) : (
    <div
      className="Amenities-list"
      style={style.list.grouped}
    >
      {getGroupedItems(items)}
    </div>
  );

  return (
    <div
      className="Amenities"
      style={styles.container.base}
    >
      {ListComponent}
    </div>
  );
}

Amenities.propTypes = {
  /**
   * Data
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,

  /**
   * Number of columns to span
   */
  columns: PropTypes.oneOf([
    1,
    2,
    3,
  ]),

  /**
   * Type of list
   */
  listType: PropTypes.oneOf([
    "single",
    "grouped",
  ]),
};

Amenities.defaultProps = {
  items: [],

  columns: 1,

  listType: "single",
};

Amenities.styles = styles;

export default radium(Amenities);
