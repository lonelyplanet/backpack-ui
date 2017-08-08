import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import { color, media, timing } from "../../../settings.json";
import { Plus } from "../icon";

const mq = `@media (min-width: ${media.min["768"]})`;

const styles = {
  container: {
    borderBottom: `1px solid ${color.gray}`,
  },

  heading: {
    color: color.darkGray,
    backgroundColor: "transparent",
    display: "block",
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: (24 / 20),
    paddingBottom: "26px",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "29px",
    position: "relative",
    textAlign: "left",
    transition: `color ${timing.fast} ease-in-out`,
    width: "100%",

    ":hover": { color: color.blue },
    ":active": { color: color.blue },
    ":focus": { color: color.blue },

    [mq]: {
      fontSize: "28px",
      lineHeight: (34 / 28),
      paddingBottom: "39px",
      paddingTop: "44px",
    },
  },

  icon: {
    fontSize: "12px",
    float: "right",
    marginRight: "8px",
    marginTop: "4px",

    [mq]: {
      fontSize: "22px",
      marginRight: "30px",
      marginTop: "10px",
    },
  },

  content: {
    overflow: "hidden",
    maxHeight: 0,
  },

  contentPadding: {
    paddingBottom: "32px",

    [mq]: {
      paddingBottom: "48px",
    },
  },
};

const AccordionItem = ({ heading, content, id, expanded, onClick, style }) => (
  <div
    className="Accordion-item"
    id={id}
    style={[styles.container, style]}
  >
    <button
      className="Accordion-itemHeading"
      id={`${id}-heading`}
      aria-selected={expanded}
      aria-expanded={expanded}
      aria-controls={`${id}-content`}
      role="tab"
      onClick={onClick}
      style={styles.heading}
    >
      {heading}

      <div style={[styles.icon, expanded && { transform: "rotate(45deg)" }]}>
        <Plus label={expanded ? "Collapse" : "Expand"} />
      </div>
    </button>

    <div
      className="Accordion-itemContent"
      id={`${id}-content`}
      aria-labelledby={`${id}-heading`}
      aria-hidden={!expanded}
      role="tabpanel"
      style={[styles.content, expanded && {
        transition: `max-height ${timing.slow} ease-in-out`,
        maxHeight: "500vh",
      }]}
    >
      <div style={styles.contentPadding}>
        {content}
      </div>
    </div>
  </div>
);

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  style: propTypes.style,
};

AccordionItem.defaultProps = {
  id: "accordionItem",
  expanded: false,
};

export default radium(AccordionItem);
