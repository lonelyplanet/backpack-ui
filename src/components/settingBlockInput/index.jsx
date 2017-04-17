import React, { PropTypes } from "react";
import SettingBlock from "../settingBlock/";
import Input from "../form/input";


const SettingBlockInput = (props) => (
  <SettingBlock
    error={props.error}
    title={props.title}
    subtitle={props.subtitle}
  >
    <Input
      {...props}
      theme="float"
      placeholder={props.placeholder}
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
