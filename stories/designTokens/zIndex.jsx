import React from "react";
import Token from "./token";
import { values } from "../../src/styles/zIndex";

const ZIndex = () => (
  <Token
    id="ZIndex"
    title="Z-index"
    description="Use z-index tokens to set the z order layering of elements."
    importPath={`import zIndex from "styles/zIndex";`}
  >
    {Object.keys(values).map((name) => (
      <tr key={name}>
        <td><code>zIndex.{name}</code></td>
        <td><code>{values[name]}</code></td>
      </tr>
    ))}
  </Token>
);

export default ZIndex;
