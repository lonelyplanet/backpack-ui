import React, { PropTypes } from "react";
import radium from "radium";
import { Heading } from "../../components/text";
import { textHeading7 } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: Object.assign({}, {
    maxWidth: "295px",
    width: "100%",
    marginBottom: "40px",
    textAlign: "center",
  }, textHeading7()),

  heading: {
    marginBottom: "16px",
  },

  text: {
    margin: 0,
    padding: 0,
  },
};

const AuthMessage = ({ children, title, style }) => (
  <div
    className="AuthMessage"
    style={[styles.container, style]}
  >
    {title &&
      <Heading
        level={6}
        size={6}
        weight="medium"
        style={styles.heading}
      >
        {title}
      </Heading>
    }

    <p style={styles.text}>
      {children}
    </p>
  </div>
);

AuthMessage.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: propTypes.style,
};

export default radium(AuthMessage);
