import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import SettingBlockWrapper from "../settingBlock/settingBlockWrapper";
import SettingBlockHeader from "../settingBlock/settingBlockHeader";
import propTypes from "../../utils/propTypes";

const SettingBlock = ({
  children,
  error,
  title,
  subtitle,
  htmlFor,
  style,
}) => (
  <SettingBlockWrapper style={style} error={error}>
    <SettingBlockHeader
      htmlFor={htmlFor}
      subtitle={subtitle}
    >
      {title}
    </SettingBlockHeader>

    {children}
  </SettingBlockWrapper>
);

SettingBlock.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
  subtitle: PropTypes.string,
  htmlFor: PropTypes.string,
  style: propTypes.style,
};

export default radium(SettingBlock);
