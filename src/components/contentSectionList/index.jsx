import React from "react";
import PropTypes from "prop-types";
import font from "../../utils/font";
import ContentHeader from "../contentHeader";
import Heading from "../heading";

const styles = {
  list: {
    base: {
      fontFamily: font("miller"),
      fontSize: "20px",
      lineHeight: (36 / 20),
      marginLeft: "20px",
    },
  },
};

function ContentSectionList({ header, listItems }) {
  const isListItemsString = typeof listItems === "string";

  return (
    <section className="ContentSection">
      {header && header.title &&
        <ContentHeader {...header} />
      }

      {listItems &&
        <ul data-qa="content-section-list" style={styles.list.base}>
          {!isListItemsString && listItems.map((item, index) => (
            <li data-qa={`${item}-list-item`} key={index}>{item}</li>
          ))}

          {isListItemsString &&
            <li>{listItems}</li>
          }
        </ul>
      }
    </section>
  );
}

ContentSectionList.propTypes = {
  /**
   * Props for ContentHeader
   */
  header: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.shape(Heading.propTypes),
    border: PropTypes.oneOf([
      "",
      "top",
      "bottom",
    ]),
  }).isRequired,

  /**
   * List item(s) to display
   */
  listItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

ContentSectionList.defaultProps = {
  header: {
    title: "",
    heading: {},
    border: "",
  },

  listItems: "",
};

export default ContentSectionList;
