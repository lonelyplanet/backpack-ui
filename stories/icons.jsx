import React from "react";
import styles from "./styles.json";
import Icon from "../src/components/icon";

function Icons() {
  const rows = [];

  Object.keys(Icon).forEach((iconName) => {
    rows.push(
      <tr key={iconName}>
        <td style={{ textAlign: "center" }}>
          <div style={{ fontSize: "128px" }}>
            {React.createElement(Icon[iconName])}
          </div>
          <div>{iconName}</div>
        </td>
      </tr>
    );
  });

  return (
    <div style={styles.main}>
      <h1>Iconography</h1>

      <table>
        <tbody>
          {rows}
        </tbody> 
      </table>
    </div>
  );
}

export default Icons;
