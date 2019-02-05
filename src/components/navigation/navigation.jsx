import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Container from "../container";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import propTypes from "../../utils/propTypes";
import createQAHook from "../../utils/createQAHook";

const styles = {
  nav: {
    backgroundColor: colors.bgPrimary,
    position: "relative",
    textAlign: "center",
    transform: "translateZ(0)",
    zIndex: zIndex.globalHeader - 1,
  },

  container: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    overflow: "hidden",
  },

  scroller: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
};

const Navigation = (props) => {
  const { children, qaHook, height, sticky, style, ...properties } = props;

  return (
    <nav
      className="Navigation"
      data-qa={createQAHook(qaHook, "Navigation", "nav")}
      style={[
        styles.nav,
        sticky && { position: "sticky", top: 0 },
        style,
      ]}
      {...properties}
    >
      <Container
        style={[
          styles.container,
          { height: `${(height + 1)}px` },
        ]}
      >
        <div
          style={[
            styles.scroller,
            { height: `${(height + 15)}px` },
          ]}
        >
          <div style={{ height: `${height}px` }}>
            {children}
          </div>
        </div>
      </Container>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  height: PropTypes.number,
  sticky: PropTypes.bool,
  style: propTypes.style,
  qaHook: PropTypes.string,
};

Navigation.defaultProps = {
  height: 80,
  qaHook: null,
};

export default radium(Navigation);
