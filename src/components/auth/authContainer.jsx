import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Logo from "../logo";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: "16px",
    width: "160px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const AuthContainer = ({ children, hasLogo, style }) => (
  <div
    className="AuthContainer"
    style={[styles.container, style]}
  >
    {hasLogo &&
      <Logo style={styles.logo} />
    }

    <div style={styles.content}>
      {children}
    </div>
  </div>
);

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
  hasLogo: PropTypes.bool,
  style: propTypes.style,
};

export default radium(AuthContainer);
