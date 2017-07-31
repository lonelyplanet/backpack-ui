import React from "react";
import Token from "./token";
import { benton } from "../../src/styles/fonts";
import * as typography from "../../src/styles/typography";

const lineHeight = Object.keys(typography)
  .filter(name => name.includes("lineHeight"));

const size = (name) => name.replace("lineHeight", "fontSize");

const LineHeight = () => (
  <Token
    id="LineHeight"
    title="Line height"
    description="Use line height tokens to adjust the leading."
    importPath={`import { lineHeight<Name> } from "styles/typography";`}
  >
    {lineHeight.map((name) => (
      <tr key={name}>
        <td><code>{name}</code></td>
        <td>
          <code>
            {name !== "lineHeightReset" &&
              `${(parseInt(typography[size(name)], 10) * parseFloat(typography[name], 10))}px`
            }
            {name !== "lineHeightReset" && <br />}
            {typography[name]}
          </code>
        </td>
      </tr>
    ))}
  </Token>
);

export default LineHeight;
