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
      loading: false,
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
    if (this.input.files && this.input.files[0]) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        // We need to convert png to jpg and remove exif data
        // by writing the image data to a canvas element we can
        // achieve everything!
        const converterCanvas = await document.createElement("canvas");
        const ctx = await converterCanvas.getContext("2d");
        const converterImage = new Image();
        converterImage.src = e.target.result;

        converterImage.onload = async () => {
          ctx.canvas.width = converterImage.width;
          ctx.canvas.height = converterImage.height;
          await ctx.drawImage(converterImage, 0, 0);
          const convertedUrl = await converterCanvas.toDataURL("image/jpeg");

          this.setState({
            src: convertedUrl,
            loading: false,
          });
          this.props.onChangeFiles(convertedUrl);
          if (typeof this.props.exposeImageOnChange === "function") {
            this.props.exposeImageOnChange(convertedUrl);
          }
        };
      };

      this.setState({
        loading: true,
      });

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
          {this.state.loading ?
            <p
              style={styles.label}
            >
              Loading...
            </p> :
            <label
              htmlFor="avatarUploadInput"
              style={styles.label}
            >
              Change profile photo
            </label>
          }
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
