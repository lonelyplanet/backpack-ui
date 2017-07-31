import React from "react";
import Token from "./token";
import { benton, miller } from "../../src/styles/fonts";

const Fonts = () => (
  <Token
    id="Fonts"
    title="Fonts"
    description="Use font tokens to set the font stack of an element."
    importPath={`import { benton, miller } from "styles/fonts";`}
    hasExample
  >
    <tr>
      <td><code>benton</code></td>
      <td><code>{benton.toString()}</code></td>
      <td>
        <span
          style={{
            fontFamily: benton,
            fontSize: "24px",
          }}
        >
          Benton Sans
        </span>
      </td>
    </tr>

    <tr>
      <td><code>miller</code></td>
      <td><code>{miller.toString()}</code></td>
      <td>
        <span
          style={{
            fontFamily: miller,
            fontSize: "24px",
          }}
        >
          Miller Daily
        </span>
      </td>
    </tr>
  </Token>
);

export default Fonts;
