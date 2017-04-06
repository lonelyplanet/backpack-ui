import React, { PropTypes } from "react";
import radium from "radium";
import CategoryLabel from "../categoryLabel";
import { color, timing, typography } from "../../../settings.json";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";

const styles = {
  wrapper: {
    borderBottom: "1px solid",
    borderColor: `rgba(${rgb(color.lightBlue)}, 0.30)`,
  },
  linkWrapper: {
    cursor: "pointer",
    color: "initial",
  },
  title: {
    color: color.darkGray,
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
    fontWeight: 500,
    verticalAlign: "bottom",
  },
  subtitle: {
    color: color.subtitleGray,
    marginTop: "4px",
    fontSize: "11px",
    lineHeight: 1,
  },
  description: {
    fontSize: "16px",
    marginTop: "8px",
  },
  inputElement: {
    color: color.darkGray,
  },
  buttonDescription: {
    flexBasis: "80%",
    paddingBottom: "16px",
  },
  icon: {
    width: "24px",
    height: "24px",
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
  mockCheckbox: {
    minWidth: "24px",
    height: "24px",
    border: "1px solid",
    borderColor: `rgba(${rgb(color.lightBlue)}, 0.30)`,
    borderRadius: "50%",
  },
};

const SettingBlockHeader = ({ children, subtitle }) => (
  <div>
    <h6 style={styles.title}>{children}</h6>
    { subtitle && <p style={styles.subtitle}>{subtitle}</p>}
  </div>
);

let SettingBlockWrapper = ({ children, error }) => (
  <div style={[styles.wrapper, error && { borderColor: color.red }]}>
    {children}
  </div>
);

SettingBlockWrapper = radium(SettingBlockWrapper);

export const SettingSection = ({ children, heading }) => (
  <div style={styles.section}>
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
  <a style={styles.linkWrapper} onClick={onClick}>
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
        { checked ? iconFromString("ConfirmedCheckmark", { style: styles.icon }) : <div style={styles.mockCheckbox} /> }
      </div>
    </SettingBlockWrapper>
  </a>
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
  <a style={styles.linkWrapper} onClick={onClick}>
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
        {expanded ? iconFromString("ChevronUp") : iconFromString("ChevronDown")}
      </div>
      <div className="AccordionContent" style={expanded ? styles.accordionOpen : styles.accordionClosed}>
        {children}
      </div>
    </SettingBlockWrapper>
  </a>
);

SettingBlock.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default radium(SettingBlock);
