import React from "react";
import Token from "./token";
import { benton } from "../../src/styles/fonts";
import * as typography from "../../src/styles/typography";

const weight = Object.keys(typography)
  .filter(name => name.includes("fontWeight"));

const FontWeight = () => (
  <Token
    id="FontWeight"
    title="Font weight"
    description="Use font weight tokens to change the weight of Benton Sans. Miller Daily never changes weight and should not use these values."
    importPath={`import { fontWeight<Name> } from "styles/typography";`}
    hasExample
  >
    {weight.filter((w) => w !== "fontWeightBook").map((name) => (
      <tr key={name}>
        <td><code>{name}</code></td>
        <td><code>{typography[name]}</code></td>
        <td>
          <span
            style={{
              fontFamily: benton,
              fontSize: "24px",
              fontWeight: typography[name],
              lineHeight: 1,
            }}
          >
            {name.replace("fontWeight", "")}
          </span>
        </td>
      </tr>
    ))}
  </Token>
);

export default FontWeight;
