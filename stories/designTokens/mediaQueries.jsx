import React from "react";
import Token from "./token";
import mq from "../../src/styles/mq";

const minWidthQueries = mq.min;
const maxWidthQueries = mq.max;

const MediaQueries = () => (
  <Token
    id="MediaQueries"
    title="Media queries"
    description="Use media query tokens to set media query width ranges."
    importPath={`import mq from "styles/mq";`}
  >
    <tr>
      <th colSpan="2"><code>min-width</code> queries</th>
    </tr>

    {Object.keys(minWidthQueries).map((name) => (
      <tr key={name}>
        <td><code>mq.min["{name}"]</code></td>
        <td>
          <code>
            {name}px
            <br />
            {minWidthQueries[name]}
          </code>
        </td>
      </tr>
    ))}

    <tr>
      <th colSpan="2"><code>max-width</code> queries</th>
    </tr>

    {Object.keys(maxWidthQueries).map((name) => (
      <tr key={name}>
        <td><code>mq.max["{name}"]</code></td>
        <td>
          <code>
            {(parseInt(name, 10) - 1)}px
            <br />
            {maxWidthQueries[name]}
          </code>
        </td>
      </tr>
    ))}
  </Token>
);

export default MediaQueries;
