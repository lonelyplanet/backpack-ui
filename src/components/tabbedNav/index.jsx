import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Sticky from "react-stickynode";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import spacing from "../../styles/spacing";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import createQAHook from "../../utils/createQAHook";

const navigationSubHeight = "80px";

const styles = {
  container: {
    backgroundColor: colors.bgPrimary,
    borderTop: `1px solid rgba(${rgb(colors.accentGray)}, 0.45)`,
    fontFamily: font("benton"),
    fontSize: 0,
    height: navigationSubHeight,
    lineHeight: 1,
    margin: 0,
    padding: 0,
    position: "relative",
    transform: "translateZ(0)", // force hardware acceleration for iOS
    transition: `opacity ${timing.default}, visibility ${timing.default}`,
    zIndex: zIndex.globalHeader,
  },

  innerContainer: {
    height: navigationSubHeight,
    overflow: "hidden",
    backgroundColor: `${colors.bgPrimary}`,
  },

  list: {
    animation: `fly-in ${timing.default}`,
    height: navigationSubHeight, // to push horizontal scrollbar out of view
    margin: 0,
    WebkitOverflowScrolling: "touch",
    overflowX: "auto",
    overflowY: "hidden",
    padding: 0,
    textAlign: "center",
    transition: `opacity ${timing.default}`,
    whiteSpace: "nowrap",
    width: "100%",
    borderBottom: `1px solid ${colors.accentGray}`,

    [`@media (min-width: ${mq.min[480]})`]: {
      animation: "none",
    },
  },

  listItem: {
    display: "inline-block",
    lineHeight: navigationSubHeight,
    margin: 0,
    padding: 0,
    height: "calc(100% - 2px)",

    active: {
      borderBottom: `5px solid ${colors.accentRed}`,
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
    button: {
      backgroundColor: "transparent",
      border: 0,
      color: colors.textPrimary,
      display: "block",
      fontSize: "16px",
      fontWeight: 500,
      padding: `2px calc(${spacing.gutter}px / 2) 0`,
      transition: "300ms color ease-in",
      cursor: "pointer",
      height: "100%",
    },
  },
};

function TabbedNav({ items, onClick, active, qaHook }) {
  return (
    <nav className="TabbedNav" data-testid={qaHook ? "tabbed-nav" : null} style={styles.container}>
      <Style
        scopeSelector=".TabbedNav"
        rules={styles.scoped}
      />

      <Sticky innerZ={zIndex.globalHeader} enabled>
        <div style={styles.innerContainer}>
          <ul style={styles.list} data-testid={qaHook ? "tabbed-nav-ul" : null}>
            {items && items.map((item, index) => (
              <li
                style={[
                  styles.listItem,
                  item === active ? styles.listItem.active : null,
                ]}
                key={index}
                data-testid={qaHook ? createQAHook(`${item}`, `tabbed-nav-li-${index}`, "li") : null}
              >
                <button onClick={onClick} >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Sticky>
    </nav>
  );
}

TabbedNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  active: PropTypes.string,
  qaHook: PropTypes.bool,
};

TabbedNav.defaultProps = {
  qaHook: false,
};

export default radium(TabbedNav);
