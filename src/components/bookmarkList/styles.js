import colors from "../../styles/colors";
import timing from "../../styles/timing";
import mq from "../../styles/mq";
import zIndex from "../../styles/zIndex";
import {
  fontSizeBodyArticleSmall,
  fontSizeHeading5,
  fontSizeHeading7,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightMedium,
  lineHeightHeading7,
  lineHeightReset,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import { outline } from "../../utils/mixins";
import { textAccent } from "../../utils/typography";
import { span } from "../../utils/grid";

const gutters = [16, 32, 64];
const m24 = 24;

const listItemAnchorHover = {
  inline: {
    backgroundColor: colors.bgPrimary,
    transition: `background-color ${timing.fast} ease-in-out`,

    ":hover": {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
    },

    ":active": {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
    },

    ":focus": {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
      outline: "none",
    },
  },

  scoped: {
    default: {
      backgroundColor: colors.bgPrimary,
      transition: `background-color ${timing.fast} ease-in-out`,
    },

    hover: {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
    },

    active: {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
    },

    focus: {
      backgroundColor: rgba(colors.bgOverlay, 0.02),
      outline: "none",
    },
  },
};

const styles = {
  listItemAnchor: {
    color: "inherit",
    display: "block",
    WebkitTapHighlightColor: rgba(colors.bgOverlay, 0.02),
    width: "100%",
  },

  listItemAnchorHover: listItemAnchorHover.inline,

  listItem: {
    backgroundColor: "transparent",
    borderTop: `1px solid ${colors.borderPrimary}`,

    [`@media (max-width: ${mq.max["560"]})`]: {
      paddingLeft: `${gutters[0]}px`,
      paddingRight: `${gutters[0]}px`,
    },
  },

  listItemFirst: {
    [`@media (min-width: ${mq.min["768"]})`]: {
      borderTop: 0,
    },
  },

  listItemEdit: {
    display: "flex",
    width: "100%",
  },

  listItemEditNotFirst: {
    marginTop: `${gutters[0]}px`,
  },

  listItemEditEntry: {
    backgroundColor: colors.bgPrimary,
    borderTop: 0,
    flex: "0 1 auto",
    width: "100%",

    [`@media (min-width: ${mq.min["720"]})`]: {
      paddingLeft: `${gutters[0]}px`,
    },
  },

  listItemEditDeleteButton: {
    backgroundColor: colors.bgPrimary,
    display: "block",
    fontSize: `${fontSizeHeading5}px`,
    lineHeight: lineHeightReset,
    padding: `${gutters[0]}px`,
    transition: `color ${timing.default}`,

    ":hover": {
      color: colors.accentRed,
    },

    ":active": {
      color: colors.accentRed,
    },

    ":focus": {
      color: colors.accentRed,
    },
  },

  bookmarkEntriesHeader: {
    [`@media (max-width: ${mq.max["560"]})`]: {
      paddingLeft: `${gutters[0]}px`,
      paddingRight: `${gutters[0]}px`,
    },
  },

  fieldset: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      marginTop: "24px",
      paddingLeft: `${gutters[0]}px`,
      paddingRight: `${gutters[0]}px`,
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      position: "relative",
    },
  },

  field: {
    marginTop: "16px",

    [`@media (min-width: ${mq.min["768"]})`]: {
      marginTop: "32px",
    },
  },

  label: {
    color: rgba(colors.textPrimary, 0.5),
    display: "inline-block",
    fontSize: fontSizeUppercase,
    fontWeight: fontWeightMedium,
    lineHeight: (16 / fontSizeUppercase),
    textTransform: "uppercase",
  },

  switch: {
    alignItems: "center",
    display: "flex",
    fontSize: `${fontSizeHeading7}px`,
    height: "56px",
    justifyContent: "space-between",
    lineHeight: lineHeightHeading7,
    padding: 0,
    transition: `border-bottom-color ${timing.fast}`,

    ":focus": {
      borderBottomColor: colors.linkPrimary,
      outline: "none",
    },
  },

  desktopSaveButton: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      display: "none",
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      display: "block",
      left: "auto",
      marginLeft: `${gutters[0]}px`,
      marginRight: `${gutters[0]}px`,
      position: "static",
      right: "auto",
      width: "128px",
    },
  },

  desktopModalFooter: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      display: "none",
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      backgroundColor: colors.bgPrimary,
      bottom: 0,
      display: "flex",
      left: 0,
      justifyContent: "center",
      padding: `${gutters[1]}px`,
      position: "fixed",
      width: "100%",
      zIndex: (zIndex.default + 1),
    },
  },

  mobileSaveButton: {
    color: colors.linkPrimary,
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightHeading7,
  },

  deleteButton: {
    backgroundColor: colors.bgPrimary,
    color: colors.accentRed,
    display: "block",
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightMedium,
    height: "56px",
    lineHeight: lineHeightHeading7,
    padding: 0,
    textAlign: "left",
    transition: `color ${timing.default}`,
    width: "100%",

    [`@media (max-width: ${mq.max["768"]})`]: {
      borderBottom: `1px solid ${colors.borderPrimary}`,
    },

    ":hover": {
      color: rgba(colors.accentRed, 0.7),
    },

    ":active": {
      color: rgba(colors.accentRed, 0.7),
    },

    ":focus": Object.assign({}, {
      color: rgba(colors.accentRed, 0.7),
    }, outline()),
  },

  multiStepContainer: {
    height: "100%",
  },

  editListItemsContainer: {
    backgroundColor: rgba(colors.borderPrimary, 0.3),
    marginTop: `${m24}px`,
    padding: `${gutters[0]}px`,

    [`@media (min-width: ${mq.min["720"]})`]: {
      marginLeft: `-${gutters[1]}px`,
      overflow: "hidden",
      padding: `${gutters[1]}px`,
      width: `calc(100% + ${gutters[2]}px)`,
    },
  },

  desktopModalHeading: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      display: "none",
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      marginBottom: "16px",
      textAlign: "center",
    },
  },

  editNote: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      paddingLeft: `${gutters[0]}px`,
      paddingRight: `${gutters[0]}px`,
    },
  },

  editNoteTextArea: Object.assign({}, {
    borderBottomColor: "transparent",
    color: colors.textPrimary,
    fontWeight: fontWeightLight,
    letterSpacing: "0.4px",
    paddingTop: 0,
  }, textAccent()),

  bookmarkListStyle: {
    ".BookmarkListModal .Modal-content": {
      padding: "0 !important",
    },

    ".AddBookmarkModal .Modal-content": {
      overflow: "auto",
    },

    ".BookmarkNoteModal .Modal-content": {
      paddingLeft: `${gutters[0]}px`,
      paddingRight: `${gutters[0]}px`,
    },

    ".BookmarkListRouterLink": listItemAnchorHover.scoped.default,
    ".BookmarkListRouterLink:hover": listItemAnchorHover.scoped.hover,
    ".BookmarkListRouterLink:active": listItemAnchorHover.scoped.active,
    ".BookmarkListRouterLink:focus": listItemAnchorHover.scoped.focus,

    ".DeleteListModal": {
      height: "auto !important",
      maxWidth: `${span(4, "static")} !important`,
      padding: "48px 24px !important",
      top: "50% !important",
      transform: "translateY(-50%) !important",
      width: `${(343 / 375) * 100}vw !important`,
    },

    ".DeleteListModal .Modal-header": {
      display: "none !important",
    },

    mediaQueries: {
      [`(min-width: ${mq.min["720"]})`]: {
        ".ListButton": {
          boxShadow: "none !important",
          fontSize: `${fontSizeBodyArticleSmall}px !important`,
          transition: `color ${timing.default} ease-in-out !important`,
        },

        ".ListButton:hover, .ListButton:active, .ListButton:focus": {
          color: `${rgba(colors.textPrimary, 0.5)} !important`,
        },

        ".ListButton:focus": {
          outline: "none !important",
        },
      },

      [`(min-width: ${mq.min["768"]})`]: {
        ".BookmarkListModal": {
          height: "auto !important",
          overflow: "hidden !important",
          width: "410px !important",
        },

        ".BookmarkListModal:not(.DeleteListModal)": {
          minHeight: "480px",
        },

        ".BookmarkListModal.EditListModal": {
          height: "712px !important",
        },

        ".BookmarkListModal.DeleteListModal": {
          height: "auto !important",
          maxWidth: `${span(4, "static")} !important`,
          width: `${(343 / 375) * 100}vw !important`,
        },

        ".BookmarkListModal .Modal-content": {
          height: "462px",
          paddingLeft: `${gutters[1]}px !important`,
          paddingRight: `${gutters[1]}px !important`,
          paddingTop: "64px !important",
        },

        ".EditListModal .Modal-content": {
          height: "calc(100% - 107px)",
          overflow: "auto",
        },

        ".DeleteListModal .Modal-content": {
          height: "auto",
          overflow: "hidden",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          paddingTop: "0 !important",
        },

        ".AddBookmarkModal .Modal-content": {
          height: "calc(100% - 56px) !important",
          marginTop: "56px",
          paddingTop: "0 !important",
        },

        // Hide header on desktop
        ".BookmarkListModal .Modal-header": {
          display: "none !important",
        },
      },
    },
  },
};

export default styles;
