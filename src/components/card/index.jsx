import React from "react";
import styled, { css } from "styled-components";

// Components
import Heading from "../heading";
import Price from "../price";

// Helpers
import { OuterLink, InnerLink } from "../../utils/nestedLinks";
import { iconFromString } from "../../utils/iconHelpers";
import { color, timing, typography, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";

const colorAlpha = (hexColor, opacity) => `rgba(${rgb(hexColor)}, ${opacity})`;
const formatBulletList = (description) => [].concat(description).join(String.fromCharCode("8226"));

const baseHoverStyles = (fullBleed) => {
  if (fullBleed) {
    return css`
      .CardImageContainer {
        transition: transform ${timing.default} ease;
        transform: translateY(-2px);
      }
      .Heading {
        color: ${color.blue} !important;
      }
    `;
  }

  return css`
    z-index: ${zIndex.top - 1};
    transform: perspective(1px) scale(1.03);
    box-shadow: 0px 28px 81px -7px ${colorAlpha(color.black, 0.44)};
    `;
};

const CardBase = styled(OuterLink)`
  cursor: pointer;
  max-width: 40.9rem;
  min-height: ${({ theme }) => theme.minHeight};
  box-shadow: ${({ theme }) => (theme.fullBleed ? "0" : `0 12px 34px 0 ${colorAlpha(color.black, 0.11)}`)};
  transition: transform ${timing.default} ease, box-shadow ${timing.default} ease;

  &:hover {
    ${({ theme }) => baseHoverStyles(theme.fullBleed)}
  }
`;

const CardImageContainer = styled.div`
  min-height: 22.4rem;
  position: relative;
  transition: transform ${timing.default} ease;
  background: url('${(props) => props.image}') center / cover no-repeat;
`;

const ImageBubbleText = styled.div`
  font-size: 14px;
  padding: 5px 15px;
  color: ${color.white};
  weight: ${typography.fontWeightMedium};
  background: ${colorAlpha(color.black, 0.24)};
  border-radius: 44px;
  position: absolute;
  right: 1.6rem;
  bottom: 8px;
`;


const BottomLeft = styled.div`
  position: absolute;
  left: 2.2rem;
  bottom: 8px;
`;

const ImageIconContainer = styled(BottomLeft)`
  color: ${color.white};
`;


const CardContent = styled.div`
  padding: ${({ theme }) => (theme.fullBleed ? "3.2rem 0 4.2rem" : "3.2rem 2.4rem 4.2rem")};
`;

const CardBullets = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  letter-spacing: 0.4px;
  color: ${color.subtitleGray};
  text-transform: uppercase;
`;

const DescriptionIconContainer = styled(InnerLink)`
  transition: transform ${timing.default} ease;

  &:hover {
    transform: scale(1.2);
    color: ${color.blue};
  }
`;

const SalePrice = styled.span`
  padding-left: 5px;
  color: ${color.subtitleGray};
  text-transform: uppercase;
  font-size: 11px;
  padding-bottom: 8px;
`;

const CrossThrough = styled.span`
  text-decoration: line-through;
`;

const Card = ({
  link,
  title,
  image,
  imageIcon,
  imageIconProps,
  imageBubbleText,
  description,
  descriptionIcon,
  descriptionIconProps,
  onDescriptionIconClick,
  price,
 }) => (
   <CardBase href={link}>
     <CardImageContainer
       image={image}
       className="CardImageContainer"
     >
       {imageIcon &&
       <ImageIconContainer>
         {iconFromString(imageIcon, imageIconProps)}
       </ImageIconContainer>
       }
       {imageBubbleText &&
       <ImageBubbleText>
         {imageBubbleText}
       </ImageBubbleText>
       }
     </CardImageContainer>
     <CardContent>
       <CardBullets>
         {formatBulletList(description)}
         {descriptionIcon &&
           <DescriptionIconContainer onClick={onDescriptionIconClick}>
             {iconFromString(descriptionIcon, descriptionIconProps)}
           </DescriptionIconContainer>
         }
       </CardBullets>
       <Heading
         level={2}
         weight="thin"
         override={{ lineHeight: 1.33 }}
       >
         {title}
       </Heading>

       <BottomLeft>
         {price && price.sale &&
           <SalePrice>was <CrossThrough>${price.regular}</CrossThrough></SalePrice>
         }
         {price &&
           <Price
             amount={price.sale || price.regular}
             emphasized
           />
         }
       </BottomLeft>
     </CardContent>
   </CardBase>
);

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  imageIcon: React.PropTypes.string,
  imageIconProps: React.PropTypes.objectOf(React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ])),
  imageBubbleText: React.PropTypes.string,
  description: React.PropTypes.arrayOf(React.PropTypes.string),
  descriptionIcon: React.PropTypes.string,
  descriptionIconProps: React.PropTypes.objectOf(React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ])),
  onDescriptionIconClick: React.PropTypes.func,
  price: React.PropTypes.shape({
    sale: React.PropTypes.number,
    regular: React.PropTypes.number,
  }),
};

Card.defaultProps = {
  theme: {
    fullBleed: false,
    minHeight: "auto",
  },
  imageIconProps: {
    width: 20,
    height: 20,
  },
  descriptionIconProps: {
    width: 24,
    height: 24,
  },
};

export default Card;
