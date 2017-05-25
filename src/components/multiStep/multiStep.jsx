import React, { Children, PropTypes } from "react";
import radium from "radium";
import cn from "classnames";
import propTypes from "../../utils/propTypes";

const MultiStep = ({ children, currentStep, className, id, style }) => (
  <div
    className={cn("MultiStep", className)}
    id={id}
    style={style}
  >
    {Children.map(children, (child, index) => (index + 1) === currentStep && (
      <div className={`${className}-step-${index}`} key={`step-${index}`}>
        {child}
      </div>
    ))}
  </div>
);

MultiStep.propTypes = {
  children: PropTypes.node,
  currentStep: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  style: propTypes.style,
};

export default radium(MultiStep);
