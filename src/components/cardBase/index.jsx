import React from "react";
import styled from "styled-components";

import { color, timing, typography, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";

import Heading from "../heading";
import Price from "../price";
import { Play, Clock } from "../icon";

const colorAlpha = (opacity) => `rgba(${rgb(color.black)}, ${opacity})`;
const formatBulletList = (description) => [].concat(description).join(String.fromCharCode("8226"));


const CardBase = styled.a`
  display: block;
  max-width: 40.9rem;
  box-shadow: ${({ theme }) => (theme.fullBleed ? "0" : `0 12px 34px 0 ${colorAlpha(0.11)}`)};
  transition: transform ${timing.default} ease, box-shadow ${timing.default} ease;

  ${({ theme }) => !theme.fullBleed && `
    &:hover {
      z-index: ${zIndex.top - 1};
      transform: perspective(1px) scale(1.03);
      box-shadow: 0px 28px 81px -7px ${colorAlpha(0.44)};
    }`}
`;

const CardImageContainer = styled.div`
  min-height: 22.4rem;
  position: relative;
  background: url(${(props) => props.image}) center / cover no-repeat;
`;

const ImageBubbleText = styled.div`
  position: absolute;
  font-size: 14px;
  padding: 5px 15px;
  right: 1.6rem;
  bottom: 8px;
  color: ${color.white};
  weight: ${typography.fontWeightMedium};
  background: ${colorAlpha(0.24)};
  border-radius: 44px;
`;


const Icon = styled.div`
  color: ${color.white};
`;

const CenteredIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const CenterIconWithCircle = styled(CenteredIcon)`
  border-radius: 50%;
  padding: 15px;
  border: 1px solid ${color.white};
`;

const BottomLeftIcon = styled(Icon)`
  position: absolute;
  left: 2.2rem;
  bottom: 8px;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => (theme.fullBleed ? "2.2rem 0" : "2.2rem")};
`;

const CardBullets = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.8rem;
  letter-spacing: 0.4px;
  color: ${color.subtitleGray};
  text-transform: uppercase;
`;

const Card = ({
  link,
  image,
  imageIcon,
  imageBubbleText,
  title,
  description,
  descriptionIcon,
  price,
 }) => (
   <CardBase href={link}>
     <CardImageContainer image={image}>
       {imageIcon &&
       <BottomLeftIcon>
         <Play
           width="20px"
           height="20px"
         />
       </BottomLeftIcon>
       }
       {imageBubbleText &&
       <ImageBubbleText>
         {imageBubbleText}
       </ImageBubbleText>
       }
     </CardImageContainer>
     <CardContent>
       <CardBullets>
         <span>{formatBulletList(description)}</span>
         {descriptionIcon &&
           <span>
             <Clock
               width="25px"
               height="25px"
             />
           </span>
         }
       </CardBullets>
       <Heading
         level={2}
         weight="thin"
         override={{ lineHeight: 1.33 }}
       >
         {title}
       </Heading>
       {price &&
         <div>
           <Price
             amount={price.regular}
             emphasized
           />
         </div>
       }
     </CardContent>
   </CardBase>
);

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  description: React.PropTypes.arrayOf(React.PropTypes.string),
  descriptionIcon: React.PropTypes.bool,
  imageIcon: React.PropTypes.bool,
  imageBubbleText: React.PropTypes.string,
  price: React.PropTypes.shape({
    sale: React.PropTypes.number,
    regular: React.PropTypes.number,
  }),
};

Card.defaultProps = {
  descriptionIcon: false,
  imageIcon: false,
  theme: {
    fullBleed: false,
  },
};

export default Card;
