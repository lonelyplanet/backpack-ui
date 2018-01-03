import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { lighten } from "../../utils/color";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import { textHeading7 } from "../../utils/typography";
import Avatar from "../avatar";

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

  static strToTypedArray(str) {
    let byteString;
    if (str.split(",")[0].indexOf("base64") >= 0) {
      byteString = atob(str.split(",")[1]);
    } else {
      byteString = unescape(str.split(",")[1]);
    }

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    return ia;
  }

  static dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    const ia = AvatarUpload.strToTypedArray(dataURI);

    // separate out the mime component
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    return new Blob([ia], { type: mimeString });
  }

  static getOrientation(src) {
    const view = new DataView(AvatarUpload.strToTypedArray(src).buffer);
    if (view.getUint16(0, false) !== 0xFFD8) return -2;
    const length = view.byteLength;
    let offset = 2;
    while (offset < length) {
      const marker = view.getUint16(offset, false);
      offset += 2;
      if (marker === 0xFFE1) {
        offset += 2;
        if (view.getUint32(offset, false) !== 0x45786966) return -1;
        const little = view.getUint16(offset += 6, false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        const tags = view.getUint16(offset, little);
        offset += 2;
        for (let i = 0; i < tags; i += 1) {
          if (view.getUint16(offset + (i * 12), little) === 0x0112) {
            return view.getUint16(offset + (i * 12) + 8, little);
          }
        }
      } else if ((marker & 0xFF00) !== 0xFF00) break; // eslint-disable-line no-bitwise
      else offset += view.getUint16(offset, false);
    }
    return -1;
  }

  static resetOrientation(ctx, orientation) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // set proper canvas dimensions before transform
    if (orientation > 4 && orientation < 9) {
      ctx.canvas.width = height;
      ctx.canvas.height = width;
    }

    // transform context before drawing image
    switch (orientation) {
      case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
      case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
      case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
      case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
      case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
      case 7: ctx.transform(0, -1, -1, 0, height, width); break;
      case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
      default: break;
    }
  }

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
        const orientation = await AvatarUpload.getOrientation(e.target.result);

        converterImage.onload = async () => {
          const targetWidth = 160;
          ctx.canvas.width = targetWidth;
          ctx.canvas.height = converterImage.height * (targetWidth / converterImage.width);
          const originalCtxHeight = ctx.canvas.height;
          await AvatarUpload.resetOrientation(ctx, orientation);
          await ctx.drawImage(converterImage, 0, 0, targetWidth, originalCtxHeight);
          const convertedUrl = await converterCanvas.toDataURL("image/jpeg");
          const blobImage = await AvatarUpload.dataURItoBlob(convertedUrl);

          this.setState({
            src: convertedUrl,
            loading: false,
          });
          this.props.onChangeFiles(blobImage);
          if (typeof this.props.exposeImageOnChange === "function") {
            this.props.exposeImageOnChange(blobImage);
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
            accept="image/*"
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
