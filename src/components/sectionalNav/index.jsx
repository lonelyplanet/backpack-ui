import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";

import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import mq from "../../styles/mq";
import spacing from "../../styles/spacing";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgb } from "../../utils/color";
import font from "../../utils/font";

const navigationSubHeight = "80px";
const navigationSubHeightMobile = `${dimensions.headerHeightMobile}px`;

const styles = {
  container: {
    backgroundColor: colors.bgPrimary,
    borderTop: `1px solid rgba(${rgb(colors.accentGray)}, 0.45)`,
    fontFamily: font("benton"),
    fontSize: 0,
    height: navigationSubHeightMobile,
    lineHeight: 1,
    margin: 0,
    padding: 0,
    position: "relative",
    transform: "translateZ(0)", // force hardware acceleration for iOS
    transition: `opacity ${timing.default}, visibility ${timing.default}`,
    zIndex: zIndex.globalHeader,

    [`@media (min-width: ${mq.min[768]})`]: {
      height: navigationSubHeight,
    },
  },

  innerContainer: {
    height: navigationSubHeightMobile,
    overflow: "hidden",

    [`@media (min-width: ${mq.min[768]})`]: {
      height: navigationSubHeight,
    },
  },

  list: {
    animation: `fly-in ${timing.default}`,
    height: (navigationSubHeightMobile + 2), // to push horizontal scrollbar out of view
    margin: 0,
    "-webkit-overflow-scrolling": "touch",
    overflowX: "auto",
    overflowY: "hidden",
    padding: 0,
    textAlign: "center",
    transition: `opacity ${timing.default}`,
    whiteSpace: "nowrap",
    width: "100%",

    [`@media (min-width: ${mq.min[480]})`]: {
      animation: "none",
    },

    [`@media (min-width: ${mq.min[768]})`]: {
      height: navigationSubHeight,
    },
  },

  listItem: {
    display: "inline-block",
    lineHeight: navigationSubHeightMobile,
    margin: 0,
    padding: 0,

    [`@media (min-width: ${mq.min[768]})`]: {
      height: "100%",
      lineHeight: navigationSubHeight,
    },

    active: {
      borderBottom: `5px solid ${colors.linkPrimary}`,
    },
  },

  // to be used as rules for style component
  scoped: {
    ".sticky-inner-wrapper": {
      left: 0,
      right: 0,
      width: "100% !important",
    },
    ".active nav ul": {
      borderBottom: `1px solid rgba(${rgb(colors.accentGray)}, 0.45)`,
    },
    a: {
      color: colors.textPrimary,
      display: "block",
      fontSize: "11px",
      fontWeight: 600,
      padding: `2px calc(${spacing.gutter}px / 2) 0`,
      textTransform: "uppercase",
      transition: "300ms color ease-in",
      cursor: "pointer",
    },
    mediaQueries: {
      [`(min-width: ${mq.min[768]})`]: {
        a: {
          fontSize: "12px",
          height: "100%",
        },
      },
    },
  },
};

function SectionalNav({ items, active, linkToOffset }) {
  return (
    <nav className="SectionalNav" style={styles.container}>
      <Style
        scopeSelector=".SectionalNav"
        rules={styles.scoped}
      />

      <Sticky innerZ={zIndex.globalHeader} enabled>
        <div style={styles.innerContainer}>
          <ul style={styles.list}>
            {items && items.map((item, index) => (
              <li
                style={[
                  styles.listItem,
                  item === active ? styles.listItem.active : null,
                ]}
                key={index}
              >
                <Link
                  to={item}
                  offset={linkToOffset}
                  smooth
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Sticky>
    </nav>
  );
}

SectionalNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string,
  linkToOffset: PropTypes.number,
};

export default radium(SectionalNav);
