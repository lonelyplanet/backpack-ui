import React from "react";
import styles from "./styles.json";
import { rgba } from "../src/utils/color";
import colors from "../src/styles/colors";

function Colors() {
  const colorsArray = [];
  const borderColor = rgba(colors.textSecondary, 0.2);

  Object.keys(colors).forEach((name) => {
    if (colors[name]) {
      colorsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }
  });

  return (
    <div style={styles.main}>
      <h1>Colors</h1>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {colorsArray.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${borderColor}` }}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
