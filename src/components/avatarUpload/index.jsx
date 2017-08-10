import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Avatar from "../avatar";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import propTypes from "../../utils/propTypes";
import { lighten } from "../../utils/color";
import { textHeading7 } from "../../utils/typography";
import { outline } from "../../utils/mixins";

const styles = {
  container: {
    textAlign: "center",
  },

  innerContainer: {
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    verticalAlign: "middle",
  },

  input: {
    cursor: "pointer",
    display: "block",
    height: "100%",
    left: 0,
    opacity: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: (zIndex.default),

    ":focus": outline(),
  },

  label: Object.assign({}, textHeading7("medium"), {
    color: colors.linkPrimary,
    display: "block",
    lineHeight: 1,
    marginTop: "16px",
    transition: `color ${timing.fast} ease-in-out`,
  }),
};

const scopedStyles = {
  "input:focus ~ img": outline(),

  "input:hover ~ label": {
    color: `${lighten(colors.linkPrimary, 25)} !important`,
  },
  "input:active ~ label": {
    color: `${lighten(colors.linkPrimary, 25)} !important`,
  },
  "input:focus ~ label": {
    color: `${lighten(colors.linkPrimary, 25)} !important`,
  },
};

class AvatarUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.state = {
        src: nextProps.src,
      };
    }
  }

  onChange(event) {
    event.preventDefault();

    if (this.input.files && this.props.onChangeFiles) {
      this.props.onChangeFiles(this.input.files);
    }

    if (this.input.files && this.input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.setState({
          src: e.target.result,
        });
        if (typeof this.props.exposeImageOnChange === "function") {
          this.props.exposeImageOnChange(e.target.result);
        }
      };

      reader.readAsDataURL(this.input.files[0]);
    }
  }

  render() {
    const { style } = this.props;

    return (
      <div
        className="AvatarUpload"
        style={[styles.container, style]}
      >
        <Style
          scopeSelector=".AvatarUpload"
          rules={scopedStyles}
        />

        <div style={[styles.innerContainer]}>
          <input
            id="avatarUploadInput"
            type="file"
            ref={node => (this.input = node)}
            onChange={this.onChange}
            style={styles.input}
          />

          <Avatar
            src={this.state.src}
            size={80}
            alt="Avatar image upload preview"
          />

          <label
            htmlFor="avatarUploadInput"
            style={styles.label}
          >
            Change profile photo
          </label>
        </div>
      </div>
    );
  }
}

AvatarUpload.propTypes = {
  src: PropTypes.string.isRequired,
  style: propTypes.style,
  exposeImageOnChange: PropTypes.func,
  onChangeFiles: PropTypes.func,
};

export default radium(AvatarUpload);
