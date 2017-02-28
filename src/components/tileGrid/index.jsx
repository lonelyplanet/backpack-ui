import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import cn from "classnames";
import { grid, media } from "../../../settings.json";
import { percentage } from "../../utils/grid";
import propTypes from "../../utils/propTypes";

const styles = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: grid.container,
  width: "100%",
};

const scopedStyles = {
  ".Tile": {
    flex: "0 0 auto",
    width: "100%",
  },

  mediaQueries: {
    [`(min-width: ${media.min["480"]})`]: {
      ".Tile": {
        width: "calc(50% - 15px)",
      },
    },

    [`(min-width: ${media.min["840"]})`]: {
      ".Tile": {
        width: percentage("410px", grid.container),
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
