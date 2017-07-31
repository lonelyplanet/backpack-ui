import React from "react";
import Token from "./token";
import dimensions from "../../src/styles/dimensions";

const Dimensions = () => (
  <Token
    id="Dimensions"
    title="Dimensions"
    description="Use dimension tokens to set the height and width of elements."
    importPath={`import dimensions from "styles/dimensions";`}
  >
    {Object.keys(dimensions).map((name) => (
      <tr key={name}>
        <td><code>dimensions.{name}</code></td>
        <td><code>{dimensions[name]}px</code></td>
      </tr>
    ))}
  </Token>
);

export default Dimensions;
