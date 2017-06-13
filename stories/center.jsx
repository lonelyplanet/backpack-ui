import React, { PropTypes } from "react";

const Center = ({ children, backgroundColor, grow, shrink, basis }) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor,
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      padding: "32px",
      width: "100%",
    }}
  >
    {React.cloneElement(children, {
      style: {
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        flexBasis: basis,
      },
    })}
  </div>
);

Center.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  basis: PropTypes.string,
};

Center.defaultProps = {
  backgroundColor: "#f4fbfe",
  grow: false,
  shrink: false,
  basis: "auto",
};

export default Center;
