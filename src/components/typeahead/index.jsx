import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import TypeaheadComponent from "react-typeahead/dist/typeahead";
import TokenizerComponent from "react-typeahead/dist/tokenizer";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontWeightLight,
  fontWeightRegular,
  fontSizeBodySmall,
  fontSizeHeading7,
  lineHeightHeading7,
  lineHeightReset,
} from "../../styles/typography";
import { outline } from "../../utils/mixins";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";

const Typeahead = ({
  options,
  placeholder,
  useTokens,
  style,
}) => (
  <div>
    <Style
      rules={{
        ".Typeahead": {
          backgroundColor: colors.bgPrimary,
          color: colors.textPrimary,
          fontFamily: font("benton"),
          fontSize: `${fontSizeHeading7}px`,
          lineHeight: lineHeightReset,
          position: "relative",
        },

        ".Typeahead-dropdown": {
          boxShadow: `0 5px 10px 1px ${rgba("#99a9b3", 0.5)}`,
          left: 0,
          listStyle: "none",
          marginBottom: 0,
          marginTop: 0,
          overflow: "hidden",
          paddingLeft: 0,
          position: "absolute",
          top: "auto",
          width: "100%",
        },

        ".Typeahead-option": {
          fontWeight: fontWeightLight,
          padding: "12px 4px",
          whiteSpace: "nowrap",
        },

        ".Typeahead-option--hover": {
          backgroundColor: colors.bgSecondary,
        },

        ".Typeahead-value": {
          cursor: "default",
        },

        ".Typeahead-token": {
          alignItems: "center",
          backgroundColor: colors.bgPrimary,
          border: `1px solid ${colors.borderPrimary}`,
          borderRadius: "32px",
          display: "inline-flex",
          color: colors.textPrimary,
          fontFamily: font("benton"),
          fontSize: `${fontSizeBodySmall}px`,
          fontWeight: fontWeightRegular,
          height: "32px",
          justifyContent: "center",
          lineHeight: lineHeightReset,
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
        },

        ".Typeahead-tokenDelete": {
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer",
          display: "inline-block",
          fontSize: "8px",
          lineHeight: lineHeightReset,
          marginRight: "-8px",
          padding: "8px",
          transition: `color ${timing.fast} ease-in-out`,
        },

        ".Typeahead-tokenDelete:hover": {
          color: rgba(colors.textPrimary, 0.7),
        },

        ".Typeahead-tokenDelete:active": {
          color: rgba(colors.textPrimary, 0.7),
        },

        ".Typeahead-tokenDelete:focus": {
          color: rgba(colors.textPrimary, 0.7),
          outline: 0,
        },

        ".Typeahead-tokenDelete:focus > svg": outline(),

        ".Typeahead-token:not(:first-of-type)": {
          marginLeft: "8px",
        },

        ".Typeahead-input": {
          backgroundColor: colors.bgPrimary,
          border: 0,
          borderBottom: `1px solid ${colors.borderPrimary}`,
          color: "inherit",
          display: "block",
          fontFamily: "inherit",
          fontSize: "1em",
          lineHeight: lineHeightHeading7,
          position: "relative",
          padding: "16px 4px 15px",
          transition: `border-bottom-color ${timing.fast} ease-in-out`,
          width: "100%",
        },

        ".Typeahead-input:focus": {
          borderBottomColor: colors.textPrimary,
          outline: 0,
        },

        ".Typeahead-input::-webkit-input-placeholder": {
          color: rgba(colors.textPrimary, 0.3),
        },

        ".Typeahead-input::-moz-placeholder": {
          color: rgba(colors.textPrimary, 0.3),
        },

        ".Typeahead-input:-ms-input-placeholder": {
          color: rgba(colors.textPrimary, 0.3),
        },

        ".Typeahead-input:-moz-placeholder": {
          color: rgba(colors.textPrimary, 0.3),
        },
      }}
    />

    {useTokens &&
      <TokenizerComponent
        placeholder={placeholder}
        options={options}
        style={style}
      />
    }

    {!useTokens &&
      <TypeaheadComponent
        placeholder={placeholder}
        options={options}
        style={style}
      />
    }
  </div>
);

Typeahead.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  useTokens: PropTypes.bool,
  style: propTypes.style,
};

export default radium(Typeahead);
