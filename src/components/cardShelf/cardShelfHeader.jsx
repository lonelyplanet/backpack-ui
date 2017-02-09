import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import MoreLink from "../moreLink";

const styles = {
  container: {
    marginBottom: "19px",
    position: "relative",
  },

  heading: {
    display: "inline-block",
    fontSize: "26px",
  },

  moreLink: {
    bottom: "15px",
    fontWeight: 400,
    position: "absolute",
    right: 0,
  },
};

const CardShelfHeader = ({ heading, href, adSlot, style }) => (
  <header
    className="CardShelf-header"
    style={[styles.container, style]}
  >
    <Heading
      level={2}
      weight="thin"
      override={styles.heading}
    >
      {heading}
    </Heading>

    {adSlot}

    {href &&
      <MoreLink
        href={href}
        style={styles.moreLink}
        size="small"
        caps
      >
        View more
      </MoreLink>
    }
  </header>
);

CardShelfHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  href: PropTypes.string,
  adSlot: PropTypes.element,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardShelfHeader);
