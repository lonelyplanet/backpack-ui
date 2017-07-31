import React from "react";
import Token from "./token";
import timing from "../../src/styles/timing";

const Timing = () => (
  <Token
    id="Timing"
    title="Timing"
    description="Use timing tokens for animation durations."
    importPath={`import timing from "styles/timing";`}
  >
    {Object.keys(timing).map((name) => (
      <tr key={name}>
        <td><code>timing.{name}</code></td>
        <td><code>{timing[name]}</code></td>
      </tr>
    ))}
  </Token>
);

export default Timing;
