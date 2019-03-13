import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import { Plus } from "../icon";
import createQAHook from "../../utils/createQAHook";

const mediaQuery = `@media (min-width: ${mq.min[768]})`;

const styles = {
  container: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
  },

  heading: {
    color: colors.textPrimary,
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

    ":hover": { color: colors.linkPrimary },
    ":active": { color: colors.linkPrimary },
    ":focus": { color: colors.linkPrimary },

    [mediaQuery]: {
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

    [mediaQuery]: {
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

    [mediaQuery]: {
      paddingBottom: "48px",
    },
  },
};

const AccordionItem = ({ heading, content, id, expanded, onClick, style, qaHook }) => (
  <div
    className="Accordion-item"
    id={id}
    style={[styles.container, style]}
  >
    <button
      className="Accordion-itemHeading"
      id={`${id}-heading`}
      data-qa={qaHook ? createQAHook(heading, "Accordion-itemHeading", "btn") : null}
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
      data-qa={qaHook ? createQAHook(id, "Accordion-itemContent", "content") : null}
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
  qaHook: PropTypes.bool,
};

AccordionItem.defaultProps = {
  id: "accordionItem",
  expanded: false,
  qaHook: false,
};

export default radium(AccordionItem);
