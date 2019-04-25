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

function ContentSectionList({ header, listItems, qaHook }) {
  const isListItemsString = typeof listItems === "string";

  return (
    <section className="ContentSection">
      {header && header.title &&
        <ContentHeader {...header} />
      }

      {listItems &&
        <ul data-qa={qaHook ? "content-section-list" : null} style={styles.list.base}>
          {!isListItemsString && listItems.map((item, index) => (
            <li data-qa={qaHook ? `${item}-list-item` : null} key={index}>{item}</li>
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

  /**
   * Custom data hook
   */
  qaHook: PropTypes.bool,
};

ContentSectionList.defaultProps = {
  header: {
    title: "",
    heading: {},
    border: "",
  },

  listItems: "",
  qaHook: false,
};

export default ContentSectionList;
