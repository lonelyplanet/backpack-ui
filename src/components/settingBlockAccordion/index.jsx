import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  SettingBlockWrapper,
  SettingBlockDescription,
  SettingBlockButtonDescription,
  SettingBlockButtonWrapper,
  SettingBlockHeader,
} from "../settingBlock/";
import color from "../../styles/colors";
import { timing } from "../../../settings.json";
import iconFromString from "../../utils/icon";

const styles = {
  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: "16px",
    height: "16px",
    fill: color.textPrimary,
  },
  accordion: {
    overflow: "hidden",
    maxHeight: 0,
    transition: `max-height ${timing.slow} ease-in-out, padding-bottom ${timing.slow} ease-in-out`,
  },
  accordionOpen: {
    paddingBottom: "16px",
    maxHeight: "500vh",
  },
};

const SettingBlockAccordion = ({
  children,
  description,
  expanded,
  error,
  title,
  subtitle,
  onClick,
 }) => (

   <SettingBlockWrapper error={error}>
     <SettingBlockButtonWrapper onClick={onClick}>
       <div style={styles.flexContainer}>
         <SettingBlockButtonDescription>
           <SettingBlockHeader subtitle={subtitle}>
             {title}
           </SettingBlockHeader>
           {description && <SettingBlockDescription>{description}</SettingBlockDescription>}
         </SettingBlockButtonDescription>
         {expanded ? iconFromString("ChevronUp", styles.icon) : iconFromString("ChevronDown", styles.icon)}
       </div>
     </SettingBlockButtonWrapper>
     <div
       className="AccordionContent"
       style={[styles.accordion, expanded && styles.accordionOpen]}
     >
       {children}
     </div>
   </SettingBlockWrapper>

);

SettingBlockAccordion.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  expanded: PropTypes.bool,
  error: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default radium(SettingBlockAccordion);
