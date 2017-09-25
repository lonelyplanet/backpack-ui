import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";

const styles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const GridRow = ({ children, className, id, alignItems, style }) => (
  <div
    className={`${cn(className, "GridRow")}`}
    id={id}
    style={[styles, { alignItems }, style]}
  >
    {children}
  </div>
);

GridRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]),
};

GridRow.defaultProps = {
  children: null,
  className: null,
  id: null,
  style: null,
  alignItems: null,
};

export default radium(GridRow);
