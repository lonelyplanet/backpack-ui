import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { pulseOpacity } from "../../utils/keyframes";

/* eslint-disable */
const desktop = (
  <svg width="402px" height="131px" viewBox="0 0 402 131" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Desktop-wireframe">
        <rect id="Rectangle" fill="#EFEFEF" x="0" y="0" width="130" height="130" />
        <path d="M165.5,4.5 L257.047798,4.5" id="Line" stroke="#EFEFEF" strokeWidth="9" strokeLinecap="square" />
        <path d="M165.5,35 L396.008682,35" id="Line-Copy" stroke="#EFEFEF" strokeWidth="12" strokeLinecap="square" />
      </g>
    </g>
  </svg>
);

const mobile = (
  <svg width="375px" height="157px" viewBox="0 0 435 157" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="mobile-wire">
        <path d="M194.5,4.5 L286.047798,4.5" id="Line" stroke="#EFEFEF" strokeWidth="9" strokeLinecap="square" />
        <path d="M194.5,44 L425.008682,44" id="Line-Copy" stroke="#EFEFEF" strokeWidth="12" strokeLinecap="square" />
        <rect id="Rectangle" fill="#EFEFEF" x="-3" y="0" width="160" height="160" />
      </g>
    </g>
  </svg>
);
/* eslint-enable */

const wireframes = { mobile, desktop };

const style = {
  wireframe: {
    base: {
      animationDuration: "1s",
      animationIterationCount: "infinite",
      animationName: pulseOpacity,
      animationTimingFunction: "ease-in-out",
    },
  },
};

function ListItemWireframe({ type }) {
  const Wireframe = wireframes[type];

  return (
    <div className="ListItemWireframe-container">
      <div
        className={`ListItemWireframe -${type}`}
        style={style.wireframe.base}
      >
        {Wireframe}
      </div>
    </div>
  );
}

ListItemWireframe.propTypes = {
  type: PropTypes.string.isRequired,
};

ListItemWireframe.defaultProps = {
  type: "desktop",
};

export default radium(ListItemWireframe);
