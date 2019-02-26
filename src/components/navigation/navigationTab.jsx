import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontWeightMedium } from "../../styles/typography";
import propTypes from "../../utils/propTypes";
import { outline } from "../../utils/mixins";
import { textUppercase } from "../../utils/typography";
import createQAHook from "../../utils/createQAHook";

const styles = Object.assign({}, {
  backgroundColor: colors.bgPrimary,
  borderBottomColor: colors.bgPrimary,
  borderBottomStyle: "solid",
  borderBottomWidth: "4px",
  color: colors.textPrimary,
  cursor: "pointer",
  display: "inline-block",
  fontWeight: fontWeightMedium,
  height: "100%",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "4px", // offset border width, keep text centered
  textAlign: "center",
  transition: `border-bottom-color ${timing.fast} ease-in-out,
    color ${timing.fast} ease-in-out`,
  verticalAlign: "middle",

  ":hover": {
    color: colors.textSecondary,
  },

  ":active": {
    color: colors.textSecondary,
  },

  ":focus": outline(),
}, textUppercase());

const NavigationTab = (props) => {
  const { children, onClick, active, style, label, ...properties } = props;

  return (
    <button
      className="NavigationTab"
      onClick={onClick}
      data-qa={createQAHook(label, "NavigationTab", "btn")}
      style={[
        styles,
        active && { borderBottomColor: colors.linkPrimary },
        style,
      ]}
      {...properties}
    >
      {children}
    </button>
  );
};

NavigationTab.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  style: propTypes.style,
  label: PropTypes.string,
};

export default radium(NavigationTab);
