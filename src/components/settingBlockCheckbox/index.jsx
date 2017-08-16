import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  SettingBlockDescription,
  SettingBlockButtonDescription,
  SettingBlockButtonWrapper,
  SettingBlockWrapper,
  SettingBlockHeader,
} from "../settingBlock/";
import CheckboxComponent from "../checkbox/checkboxComponent";

const SettingBlockCheckbox = ({
  description,
  checked,
  error,
  title,
  hasBorder,
  subtitle,
  onClick,
}) => (
  <SettingBlockButtonWrapper onClick={onClick}>
    <SettingBlockWrapper error={error} hasAction hasBorder={hasBorder}>
      <SettingBlockButtonDescription>
        <SettingBlockHeader subtitle={subtitle}>
          {title}
        </SettingBlockHeader>
        {description && <SettingBlockDescription>{description}</SettingBlockDescription>}
      </SettingBlockButtonDescription>
      <CheckboxComponent onClick={(e) => e.stopPropagation()} id={`setting_${title}`} checked={checked} size={24} rounded />
    </SettingBlockWrapper>
  </SettingBlockButtonWrapper>
);

SettingBlockCheckbox.propTypes = {
  description: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  title: PropTypes.string,
  hasBorder: PropTypes.bool,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default radium(SettingBlockCheckbox);
