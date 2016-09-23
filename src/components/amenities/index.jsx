/* @flow */
import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import { span } from "../../utils/grid";

export type Group = {
  title: string,
  items: Array<Object>,
  capitalize: boolean
};

export type AmenitiesProps = {
  columns: number,
  items: Array<Group>,
  listType: string,
};

const styles = {
  container: {
    base: {
      fontSize: "13px",
      lineHeight: (24 / 13),
    },
  },

  list: {
    base: {
      marginTop: `${-5 / 13}em`, // bring top of text 30px from header
    },

    single: {
      listStyle: "none",
    },

    grouped: {},
  },

  item: {
    base: {
      color: color.darkGray,
    },

    single: {},

    grouped: {
      base: {
        WebkitColumnBreakInside: "avoid",
        pageBreakInside: "avoid",
        breakInside: "avoid",
      },

      notFirst: {
        marginTop: `${23 / 13}em`,
      },
    },
  },

  heading: {
    base: {},

    single: {},

    grouped: {
      fontSize: `${14 / 13}em`,
      lineHeight: (24 / 14),
      fontWeight: 600,
    },
  },
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const getListItems = (items: Array<Group>, capitalize: boolean = false) => {
  const ListItems = items.map((item, index) => (
    <li
      key={index}
      dangerouslySetInnerHTML={markup(item)}
      style={[styles.item.base, capitalize && { textTransform: "capitalize" }]}
    />
  ));

  return ListItems;
};

const getGroupedItems = (items: Array<Group>) => {
  const GroupedItems = items.map((group, index) => {
    const groupedItemStyle = [styles.item.grouped.base];

    if (index !== 0) {
      groupedItemStyle.push(styles.item.grouped.notFirst);
    }

    return (
      <div
        style={groupedItemStyle}
        key={index}
      >
        <h5 style={styles.heading.grouped}>
          {group.title}
        </h5>

        <ul style={styles.list.single}>
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
function Amenities({ columns, items = [], listType }: AmenitiesProps) {
  const columnWidth = span(`${(6 / columns)} of 6`, "static");

  const style = {
    list: {
      single: [styles.list.base, styles.list.single],
      grouped: [styles.list.base, styles.list.grouped],
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
  items: React.PropTypes.array.isRequired,

  /**
   * Number of columns to span
   */
  columns: React.PropTypes.oneOf([
    1,
    2,
    3,
  ]),

  /**
   * Type of list
   */
  listType: React.PropTypes.oneOf([
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
