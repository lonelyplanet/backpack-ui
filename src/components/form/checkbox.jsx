import React from "react";
import radium from "radium";
import { color, timing, zIndex } from "rizzo-next/sass/settings.json";
import kebabCase from "lodash/kebabCase";
import svgDataUri from "../../utils/svgDataUri";

const _ = { kebabCase };

const icons = {
  checkmark: {
    light: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.white}"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path></svg>`,
  },
};

const styles = {
  button: {
    base: {
      backgroundColor: color.white,
      border: 0,
      color: color.darkGray,
      cursor: "pointer",
      display: "inline-block",
      fontSize: "13px",
      lineHeight: 1,
      paddingLeft: `${28 / 13}em`,
      paddingRight: `${12 / 13}em`,
      paddingTop: `${3 / 13}em`,
      position: "relative",
      textAlign: "left",
      verticalAlign: "middle",
    },

    size: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
      third: {
        width: "33%",
      },
    },
  },

  span: {
    base: {
      backgroundColor: color.white,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: `${8 / 13}em`,
      borderColor: color.gray,
      borderStyle: "solid",
      borderWidth: "1px",
      display: "block",
      height: `${16 / 13}em`,
      left: 0,
      position: "absolute",
      textAlign: "center",
      top: 0,
      transition: `background-color ${timing.fast},
        border-color ${timing.fast}`,
      userSelect: "none",
      width: `${16 / 13}em`,
      zIndex: zIndex.default,
    },

    checked: {
      backgroundColor: color.blue,
      backgroundImage: `url("${svgDataUri(icons.checkmark.light)}")`,
      borderColor: color.blue,
    },
  },

  checkbox: {
    hide: {
      backgroundColor: color.white,
      border: 0,
      height: `${20 / 13}em`,
      left: "-2px",
      position: "absolute",
      top: "-2px",
      WebkitAppearance: "none",
      width: `${20 / 13}em`,
    },
  },
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked,
    });
  }

  onClick(event, value, name) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick({ value, name, checked: !this.state.checked });
    }
  }

  render() {
    const {
      id,
      value,
      size,
      name,
    } = this.props;

    /* eslint-disable */
    return (
      <label
        className="Checkbox"
        id={_.kebabCase(id)}
        ref={_.kebabCase(id)}
        value={value}
        name={name}
        style={[
          styles.button.base,
          styles.button.size[size],
        ]}
      >
        <span
          style={[
            styles.span.base,
            this.state.checked && styles.span.checked,
          ]}
        />

      {name}

        <input
          type="checkbox"
          style={styles.checkbox.hide}
          value={value}
          name={name}
          onClick={(e) => this.onClick(e, value, name)}
        />
      </label>
    );
    /* eslint-enable */
  }
}

Checkbox.propTypes = {
  /**
   * ID for the checkbox
   */
  id: React.PropTypes.string.isRequired,

  /**
   * Value of the checkbox
   */
  value: React.PropTypes.string,

  /**
   * Name of the checkbox
   */
  name: React.PropTypes.string,

  /**
   * Whether or not the checkbox is checked
   */
  checked: React.PropTypes.bool,

  /**
   * Click handler for checkbox
   */
  onClick: React.PropTypes.func,

  /**
   * Set the checkbox size
   */
  size: React.PropTypes.string,
};

Checkbox.defaultProps = {
  id: "",

  value: "",

  checked: false,

  onClick: null,

  size: "",
};

Checkbox.styles = styles;

export default radium(Checkbox);
