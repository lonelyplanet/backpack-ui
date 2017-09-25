import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  SettingBlockDescription,
  SettingBlockButtonDescription,
  SettingBlockButtonWrapper,
  SettingBlockWrapper,
  SettingBlockHeader,
} from "../settingBlock";
import CheckboxComponent from "../checkbox/checkboxComponent";

const SettingBlockCheckbox = ({
  description,
  checked,
  error,
  title,
  hasBorder,
  subtitle,
  name,
  type,
  onClick,
}) => (
  <SettingBlockButtonWrapper onClick={onClick}>
    <SettingBlockWrapper
      error={error}
      hasAction
      hasBorder={hasBorder}
    >
      <SettingBlockButtonDescription>
        <SettingBlockHeader subtitle={subtitle}>
          {title}
        </SettingBlockHeader>

        {description &&
          <SettingBlockDescription>
            {description}
          </SettingBlockDescription>
        }
      </SettingBlockButtonDescription>

      <CheckboxComponent
        onClick={(e) => e.stopPropagation()}
        id={`setting_${title.toLowerCase()}`}
        name={name}
        checked={checked}
        size={24}
        type={type}
        rounded
      />
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
  name: PropTypes.string,
  type: PropTypes.oneOf(["checkbox", "radio"]),
  onClick: PropTypes.func,
};

SettingBlockCheckbox.defaultProps = {
  description: null,
  checked: false,
  error: false,
  title: null,
  hasBorder: false,
  subtitle: null,
  name: null,
  type: "checkbox",
  onClick: null,
};

export default radium(SettingBlockCheckbox);
