import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import Container from "../container";
import { color } from "../../../settings.json";
import font from "../../utils/font";
import { rgb } from "../../utils/color";

const styles = {
  backgroundColor: color.orange,
  boxSizing: "border-box",
  color: color.titleGray,
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
        },

        "a:focus": {
          outline: `1px rgba(${rgb(color.black)}, .3) dotted`,
          outlineOffset: "2px",
        },
      }}
    />

    <Container>
      <div dangerouslySetInnerHTML={markup(children)} />
    </Container>
  </div>
);

TravelAlert.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(TravelAlert);
