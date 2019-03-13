import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import {
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeBodySmall,
  fontSizeBodyArticle,
  fontWeightMedium,
  lineHeightBodyArticle,
  lineHeightHeading6,
  lineHeightHeading7,
} from "../../styles/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import CategoryLabel from "../categoryLabel";
import PriceRangeLabel from "../priceRangeLabel";
import { Heading, TextAccent } from "../text";
import createQAHook from "../../utils/createQAHook";

const styles = {
  container: {
    default: {
      paddingBottom: "16px",
      paddingTop: "16px",
    },

    large: {
      [`@media (min-width: ${mq.min[720]})`]: {
        paddingBottom: "24px",
        paddingTop: "24px",
      },
    },
  },

  name: {
    default: {
      fontSize: `${fontSizeHeading7}px`,
      lineHeight: lineHeightHeading7,
    },

    large: {
      [`@media (min-width: ${mq.min[720]})`]: {
        fontSize: `${fontSizeHeading6}px`,
        lineHeight: lineHeightHeading6,
      },
    },
  },

  category: {
    default: {
      color: rgba(colors.textPrimary, 0.5),
      display: "block",
      fontWeight: fontWeightMedium,
      marginTop: "4px",
    },

    large: {
      [`@media (min-width: ${mq.min[720]})`]: {
        fontSize: `${fontSizeBodySmall}px`,
        marginTop: "8px",
      },
    },
  },

  topChoiceLabel: {
    default: {
      color: colors.accentRed,
      fontStyle: "normal",
      paddingLeft: "8px",
    },
  },

  note: {
    default: {
      letterSpacing: ".4px",
      marginTop: "16px",
    },

    large: {
      [`@media (min-width: ${mq.min[720]})`]: {
        fontSize: `${fontSizeBodyArticle}px`,
        lineHeight: lineHeightBodyArticle,
      },
    },
  },

  noteLink: {
    color: colors.linkPrimary,
    backgroundColor: "transparent",
    transition: `color ${timing.default} ease`,
    ":hover": {
      color: colors.linkPrimaryHover,
    },
  },

  priceRange: {
    default: {
      float: "right",
    },
  },
};

const ListItemBookmarkEntry = ({
  name,
  category,
  priceRange,
  city,
  topChoice,
  note,
  large,
  handleNoteAction,
  showNoteAction,
  style,
  qaHook,
}) => (
  <article
    className="ListItemBookmarkEntry"
    style={[
      styles.container.default,
      large && styles.container.large,
      style,
    ]}
  >
    {priceRange &&
      <PriceRangeLabel
        value={priceRange}
        style={styles.priceRange.default}
      />
    }

    <Heading
      level={2}
      size={5}
      weight="medium"
      style={[
        styles.name.default,
        large && styles.name.large,
      ]}
    >
      {name}
    </Heading>

    {category &&
      <CategoryLabel
        style={[
          styles.category.default,
          large && styles.category.large,
        ]}
      >
        {category}{city && ` in ${city}`} {topChoice &&
          <em style={styles.topChoiceLabel.default}>
            Top choice
          </em>
        }
      </CategoryLabel>
    }

    {note &&
      <TextAccent
        style={[
          styles.note.default,
          large && styles.note.large,
        ]}
      >
        {note}
      </TextAccent>
    }
    {showNoteAction && handleNoteAction &&
      <TextAccent>
        <button
          data-qa={qaHook ? createQAHook("add or edit note", "note", "btn") : null}
          onClick={handleNoteAction}
          style={[
            styles.note.default,
            large && styles.note.large,
            styles.noteLink,
          ]}
        >
          {note ? "Edit note" : "Add note..."}
        </button>
      </TextAccent>
    }
  </article>
);

ListItemBookmarkEntry.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  priceRange: PropTypes.oneOf(["$", "$$", "$$$", "", null]),
  city: PropTypes.string,
  topChoice: PropTypes.bool,
  note: PropTypes.string,
  large: PropTypes.bool,
  showNoteAction: PropTypes.bool,
  handleNoteAction: PropTypes.func,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};


ListItemBookmarkEntry.defaultProps = {
  category: null,
  priceRange: null,
  city: null,
  topChoice: false,
  note: null,
  large: false,
  style: null,
  qaHook: false,
};
export default radium(ListItemBookmarkEntry);
