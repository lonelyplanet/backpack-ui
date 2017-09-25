import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { color, media } from "../../../settings.json";
import { darken, rgb } from "../../utils/color";
import Label from "../form/label";

const styles = {
  container: {
    base: {
      backgroundColor: color.white,
      borderColor: darken(color.white, 17),
      borderStyle: "solid",
      borderWidth: ".1rem",
      color: `rgba(${rgb(color.titleGray)}, .72)`,
      position: "relative",
    },

    size: {
      full: {
        width: "100%",
      },
      half: {
        float: "left",
        width: "50%",
      },
    },

    removeBorder: {
      borderLeft: 0,
    },
  },
};

function InputGroup({
  children,
  label,
  id,
  size,
  removeBorder,
}) {
  const style = {
    container: [styles.container.base],
  };

  if (size) {
    style.container.push(styles.container.size[size]);
  }

  if (removeBorder) {
    style.container.push(styles.container.removeBorder);
  }

  return (
    <div
      className="InputGroup"
      style={style.container}
    >
      <Style
        scopeSelector=".InputGroup"
        rules={{
          label: {
            position: "absolute",
            left: "2rem",
            top: "1.9rem",
            zIndex: 2,
          },

          mediaQueries: {
            [`(min-width: ${media.min["768"]})`]: {
              label: {
                left: "1.5rem",
                top: "1.4rem",
              },
            },
          },
        }}
      />

      <Label
        owns={id}
        orientation="vertical"
        size="small"
        uppercase
      >
        {label}
      </Label>

      {children}
    </div>
  );
}

InputGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      const component = child.type.displayName !== "Input" &&
        child.type.displayName !== "Select" &&
        child.type.displayName !== "NumberInput";

      if (component) {
        error = new Error(`${componentName} children should be of type "Input" or "Select".`);
      }
    });

    return error;
  },

  label: PropTypes.string.isRequired,

  id: PropTypes.string.isRequired,

  size: PropTypes.oneOf([
    "full",
    "half",
  ]),

  removeBorder: PropTypes.bool,
};

InputGroup.defaultProps = {
  label: "",

  type: "text",

  id: "",

  name: "",

  defaultValue: "",

  min: "",

  max: "",

  placeholder: "",

  required: false,

  size: "full",

  removeBorder: false,
};

InputGroup.styles = styles;

export default radium(InputGroup);
