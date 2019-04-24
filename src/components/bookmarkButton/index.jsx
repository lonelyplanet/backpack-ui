import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import { BookmarkActive, Bookmark } from "../icon";
import colors from "../../styles/colors";
import propTypes from "../../utils/propTypes";
import IconRevealButton from "../iconRevealButton";

const BookmarkButton = ({
  onClick,
  marked,
  id,
  className,
  button,
  style,
  qahook,
}) => (
  <div>
    {!button &&
      <IconRevealButton
        id={id}
        className={cn("BookmarkButton", className)}
        onClick={onClick}
        icon={marked ? <BookmarkActive /> : <Bookmark />}
        style={[
          marked && { color: colors.linkPrimary },
          style,
        ]}
        label="Save"
        qahook={qahook}
      />
    }

    {button &&
      React.cloneElement(button, {
        onClick: () => {
          onClick();
        },
      })
    }
  </div>
);

BookmarkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  marked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  button: PropTypes.element,
  style: propTypes.style,
  qahook: PropTypes.bool,
};

BookmarkButton.defaultProps = {
  onClick: null,
  marked: false,
  id: null,
  className: null,
  button: null,
  style: null,
  qahook: false,
};

export default radium(BookmarkButton);
