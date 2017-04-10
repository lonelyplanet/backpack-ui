import React, { PropTypes } from "react";
import SettingBlock from "../settingBlock";
import TextArea from "../form/textarea";
import HeightExpander from "../form/heightExpander";


const SettingBlockTextArea = ({
  error,
  title,
  subtitle,
  id,
  placeholder,
}) => (
  <SettingBlock
    error={error}
    title={title}
    subtitle={subtitle}
  >
    <HeightExpander idToFind={id} baseHeight="0px">
      {(expandHeight, newHeight) => (
        <TextArea
          id={id}
          onChange={expandHeight}
          placeholder={placeholder}
          theme="float"
          customStyles={{
            minHeight: "56px",
            height: newHeight,
          }}
          rows={null}
        />
      )}
    </HeightExpander>
  </SettingBlock>
);

SettingBlockTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  subtitle: PropTypes.string,
  error: PropTypes.bool,
};

export default SettingBlockTextArea;
