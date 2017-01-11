import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import assign from "object-assign";
import { color, timing } from "../../../settings.json";
import { rgb } from "../../utils/color";
import { blueLink, outline } from "../../utils/mixins";
import font from "../../utils/font";
import { ChevronRight } from "../icon";

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
    lineHeight: 1,
  },

  border: {
    backgroundColor: `rgba(${rgb(color.lightBlue)}, .3)`,
    height: "1px",
    marginBottom: "11px",
    width: "calc(100% + 64px)",
  },

  link: assign({}, blueLink(), {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06px",
    textDecoration: "none",
    textTransform: "uppercase",
  }),

  linkWhite: {
    color: `rgba(${rgb(color.white)}, 0.87)`,

    ":hover": { color: color.white },
    ":active": { color: color.white },
    ":focus": assign({}, outline(), { color: color.white }),
  },

  icon: {
    height: "5px",
    marginLeft: "8px",
    marginTop: "-2px",
    transition: `transform ${timing.fast} ease-in-out`,
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

const CalloutLink = ({ children, href, overlay, style }) => (
  <div className="CalloutLink" style={[styles.container, style]}>
    <Style rules={styles.scoped} />

    <div style={styles.border} />

    <a style={[styles.link, overlay && styles.linkWhite]} href={href}>
      {children} <ChevronRight style={styles.icon} />
    </a>
  </div>
);

CalloutLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  overlay: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.object),
};

CalloutLink.defaultProps = {
  overlay: false,
};

export default radium(CalloutLink);
