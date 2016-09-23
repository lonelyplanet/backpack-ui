import React from "react";
import radium from "radium";
import font from "../../utils/font";

const styles = {
  container: {
    base: {
      backgroundColor: "#e3e5e9",
      color: "#c4c7cc",
      fontFamily: font("miller"),
      lineHeight: 1,
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
};

function Placeholder({ title, width, height, aspectRatio, fontSize, style }) {
  const createLetter = () => {
    let letter = "";
    const matches = title.split(/\b/);

    if (matches.length > 0) {
      if (matches[0] === "The") {
        letter = title.slice(4, 5);
      } else if (matches[0] === "A") {
        letter = title.slice(2, 3);
      } else {
        letter = title.slice(0, 1);
      }
    }

    return letter;
  };

  return (
    <div
      className="Placeholder"
      style={[
        styles.container.base,
        {
          fontSize: `${fontSize}px`,
        },
        (width && height) && {
          height: `${height}px`,
          lineHeight: `${(height + 1) / fontSize}`,
          width: `${width}px`,
        },
        aspectRatio && {
          paddingBottom: `${aspectRatio * 100}%`,
          width: "100%",
        },
        style,
      ]}
      aria-hidden="true"
    >
      {(width && height) && createLetter()}

      {aspectRatio &&
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
          }}
        >
          {createLetter()}
        </div>
      }
    </div>
  );
}

Placeholder.propTypes = {
  /**
   * Title of placeholder; will be truncated to first letter
   */
  title: React.PropTypes.string.isRequired,

  /**
   * Width in pixels
   */
  width: React.PropTypes.number,

  /**
   * Height in pixels
   */
  height: React.PropTypes.number,

  /**
   * Should be written in the form of `16 / 9`
   */
  aspectRatio: React.PropTypes.number,

  /**
   * Font size in pixels
   */
  fontSize: React.PropTypes.number,

  /**
   * Style object
   */
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
};

Placeholder.defaultProps = {
  title: "",

  width: null,

  height: null,

  aspectRatio: null,

  fontSize: 26,

  style: {},
};

Placeholder.styles = styles;

export default radium(Placeholder);
