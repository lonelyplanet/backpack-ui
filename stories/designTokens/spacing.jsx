import React from "react";
import Token from "./token";
import spacing from "../../src/styles/spacing";

const Spacing = () => (
  <Token
    id="Spacing"
    title="Spacing"
    description="Use spacing tokens for padding, margins and position coordinates."
    importPath={`import spacing from "styles/spacing";`}
  >
    {Object.keys(spacing).map((name) => (
      <tr key={name}>
        <td><code>spacing.{name}</code></td>
        <td><code>{spacing[name]}px</code></td>
      </tr>
    ))}
  </Token>
);

export default Spacing;
