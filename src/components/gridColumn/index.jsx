import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import { media } from "../../../settings.json";
import { add, gutter, span } from "../../utils/grid";

function outputStyles({
  columns,
  shift,
  fluid,
  includeGutter,
  gutterPosition,
  mq,
}) {
  const math = fluid ? "fluid" : "static";
  const query = `@media (min-width: ${media.min[mq]})`;
  const valuesToAdd = shift ? [span(shift, math), gutter(math)] : [];
  const shouldIncludeGutter = columns !== 12;
  const includeGutterBefore = shouldIncludeGutter && (includeGutter && gutterPosition === "before");
  const includeGutterAfter = shouldIncludeGutter && (includeGutter && gutterPosition === "after");
  const styles = {
    [query]: {},
  };

  if (shift && includeGutterBefore) {
    valuesToAdd.push(gutter(math));
    styles[query].marginLeft = add(valuesToAdd, math);
  }

  if (!shift && includeGutterBefore) {
    styles[query].marginLeft = gutter(math);
  }

  if (shift && !includeGutter) {
    styles[query].marginLeft = add(valuesToAdd, math);
  }

  if (includeGutterAfter) {
    styles[query].marginRight = gutter(math);
  }

  if (columns) {
    styles[query].width = span(columns, math);
  }

  return styles;
}

function GridColumn({
  children,
  className,
  id,
  style,
  fluid,
  sm,
  smShift,
  md,
  mdShift,
  lg,
  lgShift,
  includeGutter,
  gutterPosition,
}) {
  const styles = {
    base: {
      position: "relative",
      width: "100%",
    },

    sm: outputStyles({
      columns: sm,
      shift: smShift,
      fluid,
      includeGutter,
      gutterPosition,
      mq: "480",
    }),

    md: outputStyles({
      columns: md,
      shift: mdShift,
      fluid,
      includeGutter,
      gutterPosition,
      mq: "768",
    }),

    lg: outputStyles({
      columns: lg,
      shift: lgShift,
      fluid,
      includeGutter,
      gutterPosition,
      mq: "1024",
    }),
  };

  return (
    <div
      className={`${cn(className, "GridColumn")}`}
      id={id}
      style={[
        styles.base,
        (sm || smShift) && styles.sm,
        (md || mdShift) && styles.md,
        (lg || lgShift) && styles.lg,
        style,
      ]}
    >
      {children}
    </div>
  );
}

GridColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  fluid: PropTypes.bool,
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  smShift: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  mdShift: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lgShift: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  includeGutter: PropTypes.bool,
  gutterPosition: PropTypes.oneOf(["before", "after"]),
};

GridColumn.defaultProps = {
  children: null,
  className: null,
  id: null,
  style: null,
  fluid: false,
  sm: null,
  smShift: null,
  md: null,
  mdShift: null,
  lg: null,
  lgShift: null,
  includeGutter: false,
  gutterPosition: "before",
};

export default radium(GridColumn);
