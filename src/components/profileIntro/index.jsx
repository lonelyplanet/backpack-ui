import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import MDReactComponent from "markdown-react-js";
import Measure from "react-measure";
import cn from "classnames";
import MoreLink from "../moreLink";
import colors from "../../styles/colors";
import { fontSizeBodySmall } from "../../styles/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

class ProfileHeaderIntro extends React.Component {
  static markup = (htmlContent) => ({ __html: htmlContent });

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      maxHeight: (props.lineHeight * props.maxLines),
      dimensions: {
        height: -1,
      },
    };

    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  toggleExpandedState() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const {
      children,
      maxLines,
      fontSize,
      lineHeight,
      style,
    } = this.props;

    const {
      expanded,
      maxHeight,
      dimensions,
    } = this.state;

    const dangerousStyles = `
      .ProfileHeaderIntro .ClampedText img,
      .ProfileHeaderIntro .ClampedText video,
      .ProfileHeaderIntro .ClampedText iframe {
        display: none !important;
      }

      .ProfileHeaderIntro .ClampedText:not(.expanded) {
        display: block;
        display: -webkit-box;
        height: calc(1em * ${(lineHeight / fontSize)} * ${maxLines});
        line-height: ${(lineHeight / fontSize)};
        overflow: hidden;
        padding: 0;
        position: relative;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${maxLines};
      }

      .ProfileHeaderIntro .ClampedText:not(.expanded)::after {
        background: linear-gradient(to right, ${rgba(colors.bgPrimary, 0)}, ${rgba(colors.bgPrimary, 1)} 75%);
        bottom: 0;
        content: "…";
        display: block;
        height: calc(1em * ${(lineHeight / fontSize)});
        position: absolute;
        right: 0;
        text-align: right;
        width: 10%;
      }

      @supports (-webkit-line-clamp: ${maxLines}) {
        .ProfileHeaderIntro .ClampedText:not(.expanded)::after {
          display: none !important;
        }
      }
    `;

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({
            dimensions: contentRect.bounds,
          });
        }}
      >
        {({ measureRef }) => (
          <div
            className="ProfileHeaderIntro"
            style={[
              {
                fontSize: `${fontSize}px`,
                lineHeight: (lineHeight / fontSize),
              },
              style,
            ]}
          >
            <style
              dangerouslySetInnerHTML={ProfileHeaderIntro.markup(dangerousStyles)}
            />

            <div
              className={cn("ClampedText", expanded && "expanded")}
              ref={node => { this.clampedText = node; }}
            >
              <article>
                <div
                  className="MarkdownContainer"
                  ref={measureRef}
                >
                  <MDReactComponent
                    className="MarkdownRender"
                    text={children}
                  />
                </div>
              </article>
            </div>

            {dimensions.height > maxHeight &&
              <MoreLink
                caps
                size="small"
                hideIcon
                onClick={this.toggleExpandedState}
              >
                {expanded ? "Read less" : "Read more"}
              </MoreLink>
            }
          </div>
        )}
      </Measure>
    );
  }
}

ProfileHeaderIntro.propTypes = {
  children: PropTypes.node.isRequired,
  maxLines: PropTypes.number,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  style: propTypes.style,
};

ProfileHeaderIntro.defaultProps = {
  maxLines: 3,
  fontSize: `${fontSizeBodySmall}px`,
  lineHeight: 24,
  style: null,
};

export default radium(ProfileHeaderIntro);
