import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { color, timing, media } from "../../../settings.json";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import { ChevronRight } from "../icon";

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
  },

  border: {
    backgroundColor: `rgba(${rgb(color.lightBlue)}, .3)`,
    display: "inline-block",
    height: "1px",
    marginBottom: "8px",
    width: "150px",

    [`@media (min-width: ${media.min["560"]})`]: {
      marginBottom: "24px",
    },
  },

  link: {
    color: `rgba(${rgb(color.white)}, 0.87)`,
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06px",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: `color ${timing.fast} ease-out`,

    ":hover": {
      color: color.white,
    },
  },

  icon: {
    height: "5px",
    marginLeft: "8px",
    marginTop: "-2px",
    transition: `transform ${timing.fast} ease-out`,
    width: "5px",
  },

  scoped: {
    ".CalloutLink > a:hover .Icon": {
      transform: "translateX(-3px)",
    },
    ".CalloutLink > a:active .Icon": {
      transform: "translateX(-3px)",
    },
    ".CalloutLink > a:focus .Icon": {
      transform: "translateX(-3px)",
    },
  },
};

const CalloutLink = ({ text, href, style }) => (
  <div className="CalloutLink" style={[styles.container, style]}>
    <Style rules={styles.scoped} />

    <div style={styles.border} />

    <a style={styles.link} href={href}>
      {text}
      <ChevronRight style={styles.icon} />
    </a>
  </div>
);

CalloutLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(CalloutLink);
