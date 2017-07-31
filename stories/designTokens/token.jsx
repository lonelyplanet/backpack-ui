import React, { PropTypes } from "react";

function Token({
  id,
  title,
  description,
  importPath,
  hasExample,
  children,
}) {
  return (
    <div style={{ marginBottom: "4em", marginTop: "2em" }}>
      <h2><a id={id} name={id} href={`#${id}`}>{title}</a></h2>

      {description &&
        <p style={{ marginBottom: "1em", marginTop: "1em", maxWidth: "40vw" }}>
          {description}
        </p>
      }

      {importPath &&
        <p style={{ marginBottom: "1em", marginTop: "1em" }}>
          <code>{importPath}</code>
        </p>
      }

      <table className="design-token-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            {hasExample && <th>Example</th>}
          </tr>
        </thead>

        <tbody>
          {children}
        </tbody>
      </table>

      <br />
      <a href="#DesignTokens">Top</a>
    </div>
  );
}

Token.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  importPath: PropTypes.string,
  hasExample: PropTypes.bool,
  children: PropTypes.node,
};

export default Token;
