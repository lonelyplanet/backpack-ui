import React, { PropTypes } from "react";
import radium from "radium";
import { media } from "../../../settings.json";

// @TODO: Replace grid settings with unitless values in settings.json
const containerWidth = 1290;
const gutterWidth = 30;
const maxWidth = (containerWidth + (gutterWidth * 4));
const mediaQuery = `${(maxWidth * 0.0625)}em`;

const styles = `
  .container {
    box-sizing: border-box;
    max-width: ${containerWidth}px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .container::after {
    content: " ";
    display: block;
    clear: both;
  }

  @media (max-width: ${media.max[480]}) {
    .container {
      padding-left: ${(gutterWidth / 2)}px;
      padding-right: ${(gutterWidth / 2)}px;
    }
  }

  @media (min-width: ${media.min[480]}) {
    .container {
      margin-left: ${gutterWidth}px;
      margin-right: ${gutterWidth}px;
    }
  }

  @media (min-width: ${media.min[1080]}) {
    .container {
      margin-left: ${(gutterWidth * 2)}px;
      margin-right: ${(gutterWidth * 2)}px;
    }
  }

  @media(min-width: ${mediaQuery}) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const Container = ({ children, style }) => (
  <div className="container" style={style}>
    <style dangerouslySetInnerHTML={markup(styles)} />

    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(Container);
