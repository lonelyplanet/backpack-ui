import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Container from "../container";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import propTypes from "../../utils/propTypes";

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
  const { children, height, sticky, style, ...properties } = props;

  return (
    <nav
      className="Navigation"
      style={[
        styles.nav,
        sticky && { position: "sticky", position: "-webkit-sticky", top: 0 }, // eslint-disable-line no-dupe-keys
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
};

Navigation.defaultProps = {
  height: 80,
};

export default radium(Navigation);
