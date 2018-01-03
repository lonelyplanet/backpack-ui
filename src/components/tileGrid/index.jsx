import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

import dimensions from "../../styles/dimensions";
import mq from "../../styles/mq";
import { percentage } from "../../utils/grid";
import propTypes from "../../utils/propTypes";

const styles = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: `${dimensions.maxWidth}px`,
  width: "100%",
};

const scopedStyles = {
  ".Tile": {
    flex: "0 0 auto",
    width: "100%",
  },

  mediaQueries: {
    [`(min-width: ${mq.min[480]})`]: {
      ".Tile": {
        width: "calc(50% - 15px)",
      },
    },

    [`(min-width: ${mq.min[840]})`]: {
      ".Tile": {
        width: percentage("410px", `${dimensions.maxWidth}px`),
      },
    },
  },
};

function TileGrid({ children, className, style }) {
  return (
    <section
      className={cn("TileGrid", className)}
      style={[styles, style]}
    >
      <Style
        scopeSelector=".TileGrid"
        rules={scopedStyles}
      />

      {children}
    </section>
  );
}

TileGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: propTypes.style,
};

export default radium(TileGrid);
