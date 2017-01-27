import React, { PropTypes } from "react";
import styled from "styled-components";
import { color, timing, zIndex } from "../../../settings.json";
import font from "../../utils/font";
import { rgb } from "../../utils/color";
import CategoryLabel from "../categoryLabel";
import Heading from "../heading";
import { ArrowAltLeft, ArrowAltRight } from "../icon";

const LinkedContainer = styled.a`
  align-items: center;
  background-color: #1f1f1f;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 420px;
  overflow: hidden;
  padding: 30px ${(60 / 1290) * 100}%;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    img {
      opacity: .2;
      transform: scale(1.05);
    }
  }

  &:focus {
    outline: 1px lightgray dotted;
    outline-offset: 2px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: ${zIndex.default + 1};
`;

const FauxButton = styled.div`
  border: 1px solid rgba(${rgb(color.white)}, .3);
  border-radius: 32px;
  display: inline-block;
  font-family: ${font("benton")};
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  margin-top: 23px;
  padding: 10px 16px 9px;
  text-transform: uppercase;
`;

const Image = styled.img`
  display: block;
  height: 100%;
  left: 0;
  opacity: .4;
  position: absolute;
  top: 0;
  transition: opacity ${timing.slow} ease-in-out,
    transform ${timing.slow} ease-in-out;
  width: 100%;
  z-index: ${zIndex.default};
`;

const ArticlePaginationItem = ({ ...props }) => (
  <LinkedContainer {...props}>
    <Container>
      {props.category &&
        <CategoryLabel style={{ color: color.white }}>
          {props.category}
        </CategoryLabel>
      }

      <Heading
        level={3}
        tracking="tight"
        weight="thick"
        override={{
          color: color.white,
          fontSize: "40px",
          lineHeight: (46 / 40),
          marginTop: "7px",
        }}
      >
        {props.headline}
      </Heading>

      {props.page === "previous" &&
        <FauxButton>
          <ArrowAltLeft
            style={{
              fontSize: "16px",
              marginBottom: "-2px",
              marginRight: "7px",
              marginTop: "-4px",
            }}
          />
          Previous
        </FauxButton>
      }

      {props.page === "next" &&
        <FauxButton>
          Next
          <ArrowAltRight
            style={{
              fontSize: "16px",
              marginBottom: "-2px",
              marginLeft: "7px",
              marginTop: "-4px",
            }}
          />
        </FauxButton>
      }
    </Container>

    <Image
      src={props.image}
      alt={props.imageAlt}
    />
  </LinkedContainer>
);

ArticlePaginationItem.propTypes = {
  headline: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.oneOf(["previous", "next"]),
};

ArticlePaginationItem.defaultProps = {
  className: "ArticlePaginationItem",
};

export default ArticlePaginationItem;
