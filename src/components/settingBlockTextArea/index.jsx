import React, { PropTypes } from "react";
import SettingBlock from "../settingBlock";
import TextArea from "../form/textarea";
import HeightExpander from "../form/heightExpander";


const SettingBlockTextArea = (props) => (
  <SettingBlock
    error={props.error}
    title={props.title}
    subtitle={props.subtitle}
  >
    <HeightExpander idToFind={props.id} baseHeight="0px">
      {(expandHeight, newHeight) => (
        <TextArea
          {...props}
          id={props.id}
          onChange={expandHeight}
          placeholder={props.placeholder}
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
