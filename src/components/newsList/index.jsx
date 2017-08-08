import React from "react";
import PropTypes from "prop-types";
import ListContainer from "../listContainer";
import ListItemNews from "../listItemNews";

const NewsList = ({ newsItems, adSlot }) => (
  <ListContainer
    className="NewsList"
    adSlot={adSlot}
    items={newsItems.map((item, index) =>
      <ListItemNews
        key={index}
        {...item}
      />
    )}
  />
);

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape(ListItemNews.propTypes)
  ).isRequired,
  adSlot: PropTypes.element,
};

NewsList.defaultProps = {
  newsItems: null,
  adSlot: null,
};

export default NewsList;
