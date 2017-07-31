import React from "react";
import Token from "./token";
import { benton } from "../../src/styles/fonts";
import * as typography from "../../src/styles/typography";

const size = Object.keys(typography)
  .filter(name => name.includes("fontSize"));

const FontSize = () => (
  <Token
    id="FontSize"
    title="Font size"
    description="Use font size tokens to set the text size."
    importPath={`import { fontSize<Name> } from "styles/typography";`}
    hasExample
  >
    {size.map((name) => (
      <tr key={name}>
        <td><code>{name}</code></td>
        <td><code>{typography[name]}px</code></td>
        <td>
          <span
            style={{
              fontFamily: benton,
              fontSize: typography[name],
              lineHeight: 1,
            }}
          >
            {name.replace("fontSize", "")}
          </span>
        </td>
      </tr>
    ))}
  </Token>
);

export default FontSize;
