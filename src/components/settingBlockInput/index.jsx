import React, { PropTypes } from "react";
import SettingBlock from "../settingBlock/";
import Input from "../form/input";


const SettingBlockInput = ({
  error,
  title,
  subtitle,

  placeholder,
}) => (
  <SettingBlock
    error={error}
    title={title}
    subtitle={subtitle}
  >
    <Input
      theme="float"
      placeholder={placeholder}
    />
  </SettingBlock>
);


SettingBlockInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  subtitle: PropTypes.string,
  error: PropTypes.bool,
};

export default SettingBlockInput;
