import React from "react";
import styles from "../styles.json";
import Colors from "./colors";
import Dimensions from "./dimensions";
import Fonts from "./fonts";
import FontSize from "./fontSize";
import FontWeight from "./fontWeight";
import LineHeight from "./lineHeight";
import MediaQueries from "./mediaQueries";
import Spacing from "./spacing";
import Timing from "./timing";
import ZIndex from "./zIndex";

function DesignTokens() {
  return (
    <div
      style={Object.assign({}, styles.main, { maxWidth: "100%" })}
      id="DesignTokens"
    >
      <h1>Design tokens</h1>

      <p style={{ marginBottom: "1em", marginTop: "1em", maxWidth: "40vw" }}>
        Design tokens are the visual design atoms of the design system —
        specifically, they are named entities that store visual design
        attributes. We use them in place of hard-coded values (such as hex
        values for color or pixel values for spacing) in order to maintain
        a scalable and consistent visual system for UI development.
      </p>

      <ul style={{ listStyle: "none", marginTop: "1em" }}>
        <li><a href="#Colors">Colors</a></li>
        <li><a href="#Dimensions">Dimensions</a></li>
        <li><a href="#Fonts">Fonts</a></li>
        <li><a href="#FontSize">Font size</a></li>
        <li><a href="#FontWeight">Font weight</a></li>
        <li><a href="#LineHeight">Line height</a></li>
        <li><a href="#MediaQueries">Media queries</a></li>
        <li><a href="#Spacing">Spacing</a></li>
        <li><a href="#Timing">Timing</a></li>
        <li><a href="#ZIndex">Z-index</a></li>
      </ul>

      <Colors />
      <Dimensions />
      <Fonts />
      <FontSize />
      <FontWeight />
      <LineHeight />
      <MediaQueries />
      <Spacing />
      <Timing />
      <ZIndex />
    </div>
  );
}

export default DesignTokens;
