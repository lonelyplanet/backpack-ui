import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import Container from "../container";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import font from "../../utils/font";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const styles = {
  backgroundColor: colors.accentYellow,
  boxSizing: "border-box",
  color: colors.textPrimary,
  fontFamily: font("benton"),
  fontSize: "14px",
  padding: "20px",
  textAlign: "center",
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const TravelAlert = ({ children, style }) => (
  <div className="TravelAlert" style={[styles, style]}>
    <Style
      scopeSelector=".TravelAlert"
      rules={{
        a: {
          color: "inherit",
          textDecoration: "underline",
          transition: `color ${timing.fast} ease-in-out`,
        },

        "a:hover": {
          color: colors.textSecondary,
        },

        "a:active": {
          color: colors.textSecondary,
        },

        "a:focus": Object.assign({}, {
          color: colors.textSecondary,
        }, outline(), {
          outlineColor: colors.textSecondary,
        }),
      }}
    />

    <Container>
      <div dangerouslySetInnerHTML={markup(children)} />
    </Container>
  </div>
);

TravelAlert.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TravelAlert);
