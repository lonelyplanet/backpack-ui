import React from "react";
import PropTypes from "prop-types";
import SettingBlock from "../settingBlock";
import Input from "../form/input";
import { validReactAttributes } from "../../utils/validReactAttributes";


const SettingBlockInput = (props) => (
  <SettingBlock
    error={props.error}
    title={props.title}
    subtitle={props.subtitle}
    htmlFor={props.id}
  >
    <Input
      {...validReactAttributes(props)}
      theme="float"
      name={props.name}
      placeholder={props.placeholder}
    />
  </SettingBlock>
);


SettingBlockInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  subtitle: PropTypes.string,
  error: PropTypes.bool,
};

export default SettingBlockInput;
