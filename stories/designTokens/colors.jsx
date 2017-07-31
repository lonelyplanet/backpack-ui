import React from "react";
import Token from "./token";
import colors from "../../src/styles/colors";

const createColorGroup = (prefix) => Object.keys(colors)
  .filter(name => name.includes(prefix));

const colorSwatch = (colorName) => (
  <div
    style={{
      backgroundColor: colorName,
      borderColor: (colorName === "#fff") ? colors.borderPrimary : colorName,
      // borderRadius: "100%",
      borderStyle: "solid",
      borderWidth: "1px",
      height: "32px",
      width: "32px",
    }}
  />
);

const colorGroup = (colorName) => (
  <tr key={colorName}>
    <td><code>colors.{colorName}</code></td>
    <td><code>{colors[colorName]}</code></td>
    <td>
      {colorSwatch(colors[colorName])}
    </td>
  </tr>
);

const Colors = () => (
  <Token
    id="Colors"
    title="Colors"
    description="Use color tokens to change the color of backgrounds, borders, links and text. Make sure to use the correct token type for the corresponding property."
    importPath={`import colors from "styles/colors";`}
    hasExample
  >
    <tr>
      <th colSpan="3">Background colors</th>
    </tr>

    {createColorGroup("bg").map((name) => colorGroup(name))}

    <tr>
      <th colSpan="3">Link colors</th>
    </tr>

    {createColorGroup("link").map((name) => colorGroup(name))}

    <tr>
      <th colSpan="3">Border colors</th>
    </tr>

    {createColorGroup("border").map((name) => colorGroup(name))}

    <tr>
      <th colSpan="3">Text colors</th>
    </tr>

    {createColorGroup("text").map((name) => colorGroup(name))}

    <tr>
      <th colSpan="3">Accent colors</th>
    </tr>

    {createColorGroup("accent").map((name) => colorGroup(name))}

    <tr>
      <th colSpan="3">Social colors</th>
    </tr>

    {createColorGroup("social").map((name) => colorGroup(name))}
  </Token>
);

export default Colors;
