import React from "react";
import styles from "./styles.json";
import { textHeading1 } from "../src/utils/typography";
import font from "../src/utils/font";

function Fonts() {
  return (
    <div style={styles.main}>
      <h1>Fonts</h1>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Benton Sans</small></div>
        <div style={{ display: "inline-block" }}>
          <div style={Object.assign({}, textHeading1("light"), { fontFamily: font("benton") })}>Aa</div>
          <div style={styles.smallText}><small>Light</small></div>
        </div>
        <div style={{ display: "inline-block", marginLeft: "30px" }}>
          <div style={Object.assign({}, textHeading1(), { fontFamily: font("benton") })}>Aa</div>
          <div style={styles.smallText}><small>Book</small></div>
        </div>
        <div style={{ display: "inline-block", marginLeft: "30px" }}>
          <div style={Object.assign({}, textHeading1("medium"), { fontFamily: font("benton") })}>Aa</div>
          <div style={styles.smallText}><small>Medium</small></div>
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Miller Text</small></div>
        <div style={{ display: "inline-block" }}>
          <div style={Object.assign({}, textHeading1(), { fontFamily: font("miller") })}>Aa</div>
          <div style={styles.smallText}><small>Regular</small></div>
        </div>
        <div style={{ display: "inline-block", marginLeft: "30px" }}>
          <div style={Object.assign({}, textHeading1(), { fontFamily: font("miller"), fontStyle: "italic" })}>Aa</div>
          <div style={styles.smallText}><small>Regular italic</small></div>
        </div>
      </div>

      <br /><br />
    </div>
  );
}

export default Fonts;
