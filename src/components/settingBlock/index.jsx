import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import CategoryLabel from "../categoryLabel";
import CheckboxComponent from "../checkbox/checkboxComponent";
import color from "../../styles/colors";
import { timing, typography } from "../../../settings.json";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";

const styles = {
  wrapper: {
    borderBottom: "1px solid",
    borderBottomColor: "#e4e4e4",
  },
  wrapperError: {
    borderBottomColor: color.accentRed,
  },
  inputPlaceholderRules: {
    "::-webkit-input-placeholder": {
      color: `rgba(${rgb(color.textPrimary, 0.3)})`,
    },
    "::-moz-placeholder": {
      color: `rgba(${rgb(color.textPrimary, 0.3)})`,
    },
    ":-ms-input-placeholder": {
      color: `rgba(${rgb(color.textPrimary, 0.3)})`,
    },
  },
  linkWrapper: {
    cursor: "pointer",
    color: "initial",
  },
  title: {
    color: color.textPrimary,
    fontSize: "16px",
    paddingTop: "16px",
    fontWeight: typography.fontWeightBold,
    lineHeight: 1,
  },
  section: {
    marginBottom: "40px",
  },
  sectionHeading: {
    paddingBottom: "16px",
    fontWeight: typography.fontWeightBold,
    color: color.textSecondary,
    verticalAlign: "bottom",
  },
  subtitle: {
    color: color.textSecondary,
    fontWeight: typography.fontWeightLight,
    marginTop: "4px",
    fontSize: "11px",
    lineHeight: 1,
  },
  description: {
    fontSize: "16px",
    fontWeight: typography.fontWeightLight,
    marginTop: "8px",
  },
  inputElement: {
    color: color.textPrimary,
  },
  buttonDescription: {
    flexBasis: "80%",
    paddingBottom: "16px",
  },
  icon: {
    width: "16px",
    height: "16px",
    fill: color.textPrimary,
  },
  accordionClosed: {
    padding: 0,
    height: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: `max-height ${timing.slow} ease-in-out`,
  },
  accordionOpen: {
    paddingBottom: "16px",
    height: "auto",
    maxHeight: "500vh",
    overflow: "auto",
    transition: `max-height ${timing.slow} ease-in-out`,
  },
};

const SettingBlockHeader = ({ children, subtitle }) => (
  <div>
    <h6 style={styles.title}>{children}</h6>
    { subtitle && <p style={styles.subtitle}>{subtitle}</p>}
  </div>
);

let SettingBlockWrapper = ({ children, error }) => (
  <div
    className="SettingBlockWrapper"
    style={[styles.wrapper, error && styles.wrapperError]}
  >
    {children}
  </div>
);

SettingBlockWrapper = radium(SettingBlockWrapper);

export const SettingSection = ({ children, heading }) => (
  <div
    className="SettingSection"
    style={styles.section}
  >
    <Style
      scopeSelector=".SettingSection"
      rules={styles.inputPlaceholderRules}
    />
    <CategoryLabel light style={styles.sectionHeading}>{heading}</CategoryLabel>
    {children}
  </div>
);


const SettingBlock = ({ children, error, title, subtitle }) => (
  <SettingBlockWrapper error={error}>
    <SettingBlockHeader subtitle={subtitle}>
      {title}
    </SettingBlockHeader>
    {children}
  </SettingBlockWrapper>
);


export const SettingBlockButton = ({
  description,
  checked,
  error,
  title,
  subtitle,
  onClick,
}) => (
  <div style={styles.linkWrapper} onClick={onClick}>
    <SettingBlockWrapper error={error}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={styles.buttonDescription}>
          <SettingBlockHeader subtitle={subtitle}>
            {title}
          </SettingBlockHeader>
          {description && <p style={styles.description}>{description}</p>}
        </div>
        <CheckboxComponent onClick={(e) => e.stopPropagation()} id={`setting_${title}`} checked={checked} size={24} rounded />
      </div>
    </SettingBlockWrapper>
  </div>
);


export class ToggleController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active || false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return this.props.children(this.state.active, this.toggle);
  }
}


export const SettingBlockAccordion = ({ children, description, expanded, error, title, subtitle, onClick }) => (
  <div style={styles.linkWrapper}>
    <SettingBlockWrapper error={error}>
      <div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={styles.buttonDescription}>
          <SettingBlockHeader subtitle={subtitle}>
            {title}
          </SettingBlockHeader>
          {description && <p style={styles.description}>{description}</p>}
        </div>
        {expanded ? iconFromString("ChevronUp", styles.icon) : iconFromString("ChevronDown", styles.icon)}
      </div>
      <div className="AccordionContent" style={expanded ? styles.accordionOpen : styles.accordionClosed}>
        {children}
      </div>
    </SettingBlockWrapper>
  </div>
);

SettingBlock.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default radium(SettingBlock);
