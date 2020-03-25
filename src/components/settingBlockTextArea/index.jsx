import React from "react";
import PropTypes from "prop-types";
import SettingBlock from "../settingBlock";
import TextArea from "../form/textarea";
import HeightExpander from "../form/heightExpander";

const SettingBlockTextArea = (props) => {
  const { onChange, onFocus } = props;

  return (
    <SettingBlock
      error={props.error}
      title={props.title}
      subtitle={props.subtitle}
      htmlFor={props.id}
    >
      <HeightExpander idToFind={props.id} baseHeight="0px">
        {(expandHeight, newHeight) => (
          <TextArea
            {...props}
            onFocus={onFocus}
            id={props.id}
            onChange={(e) => {
              expandHeight(e);
              if (typeof onChange === "function") {
                onChange(e);
              }
            }}
            name={props.name}
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
};

SettingBlockTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  subtitle: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default SettingBlockTextArea;
