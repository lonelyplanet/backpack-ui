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
import MoreLink from "../moreLink/";

const SettingBlockAction = ({
  description,
  error,
  title,
  actionText,
  subtitle,
  onClick,
}) => (
  <SettingBlockButtonWrapper onClick={onClick}>
    <SettingBlockWrapper error={error} hasAction>
      <SettingBlockButtonDescription>
        <SettingBlockHeader subtitle={subtitle}>
          {title}
        </SettingBlockHeader>
        {description && <SettingBlockDescription>{description}</SettingBlockDescription>}
      </SettingBlockButtonDescription>
      <MoreLink
        caps
        hideIcon
        isNested
        size="small"
        style={{ textAlign: "right" }}
        onClick={(e) => e.preventDefault()}
      >
        {actionText}
      </MoreLink>
    </SettingBlockWrapper>
  </SettingBlockButtonWrapper>
);

SettingBlockAction.propTypes = {
  description: PropTypes.string,
  actionText: PropTypes.string,
  error: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default radium(SettingBlockAction);
