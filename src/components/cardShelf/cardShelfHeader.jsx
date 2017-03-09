import React, { PropTypes } from "react";
import radium from "radium";
import Link from "../link";
import Heading from "../heading";
import MoreLink from "../moreLink";
import propTypes from "../../utils/propTypes";

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
      <Link to={href}>
        <MoreLink
          style={styles.moreLink}
          size="small"
          caps
        >
          View more
        </MoreLink>
      </Link>
    }
  </header>
);

CardShelfHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  href: PropTypes.string,
  adSlot: PropTypes.element,
  style: propTypes.style,
};

export default radium(CardShelfHeader);
