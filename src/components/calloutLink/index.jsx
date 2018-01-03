import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import assign from "object-assign";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import { blueLink, outline } from "../../utils/mixins";
import { ChevronRight } from "../icon";

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
    lineHeight: 1,
  },

  border: {
    backgroundColor: `${colors.borderPrimary}`,
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
    color: `rgba(${rgb(colors.bgPrimary)}, 0.87)`,

    ":hover": { color: colors.bgPrimary },
    ":active": { color: colors.bgPrimary },
    ":focus": assign({}, outline(), { color: colors.bgPrimary }),
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
