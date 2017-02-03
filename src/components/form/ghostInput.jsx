import React, { Component } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import { rgb } from "../../utils/color";
import { outline } from "../../utils/mixins";

const styles = {
  input: {
    width: "100%",
    fontSize: "16px",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    backgroundImage: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingTop: "16px",
    paddingBottom: "16px",
    borderBottom: `1px solid rgba(${rgb(color.lightBlue)}, 0.30)`,
    ":focus": outline(),
  },
  inputError: {
    borderBottom: `1px solid ${color.red}`,
  },
  errorMessage: {
    color: color.red,
    marginTop: "16px",
    fontSize: "12px",
    textAlign: "center",
  },
};

class GhostInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { value } = this.state;
    const { error, errorMessages } = this.props;
    return (
      <div>
        <input
          {...this.props}
          style={[styles.input, error && styles.inputError]}
          value={value}
          onChange={this.handleChange}
        />
        {error &&
          <div style={styles.errorMessage}>
            {errorMessages.map(errorMessage => <p>{errorMessage}</p>)}
          </div>
        }
      </div>
    );
  }
}

GhostInput.propTypes = {
  value: React.PropTypes.string,
  error: React.PropTypes.bool,
  errorMessages: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default radium(GhostInput);
