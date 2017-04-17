import React, { PropTypes } from "react";

import SettingBlockWrapper from "../settingBlock/settingBlockWrapper";
import SettingBlockHeader from "../settingBlock/settingBlockHeader";

const SettingBlock = ({
  children,
  error,
  title,
  subtitle,
}) => (
  <SettingBlockWrapper error={error}>
    <SettingBlockHeader subtitle={subtitle}>
      {title}
    </SettingBlockHeader>
    {children}
  </SettingBlockWrapper>
);

SettingBlock.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SettingBlock;
