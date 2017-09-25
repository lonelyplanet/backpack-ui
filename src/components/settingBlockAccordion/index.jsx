import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  SettingBlockWrapper,
  SettingBlockDescription,
  SettingBlockButtonDescription,
  SettingBlockButtonWrapper,
  SettingBlockHeader,
} from "../settingBlock";
import color from "../../styles/colors";
import { timing } from "../../../settings.json";
import iconFromString from "../../utils/icon";

const styles = {
  flexContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  icon: {
    fill: color.textPrimary,
    height: "16px",
    width: "16px",
  },

  accordion: {
    maxHeight: 0,
    overflow: "hidden",
    transition: `max-height ${timing.slow} ease-in-out,
      padding-bottom ${timing.slow} ease-in-out`,
  },

  accordionOpen: {
    maxHeight: "500vh",
    paddingBottom: "16px",
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

           {description &&
             <SettingBlockDescription>
               {description}
             </SettingBlockDescription>
           }
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
