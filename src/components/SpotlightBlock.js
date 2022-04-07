import React from "react";
import styled from "styled-components";

const ArticleBoxWrapper = styled.div`
  margin-left: 50px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
height:50vh;
  padding-bottom: 50px;
  color: ${(props) => props.theme.darkgraygit};
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    text-align: left;
    color: ${(props) => props.theme.darkgray};
  }
  & div:first-of-type {
    position: relative;
    left: 0;
    transition: left 0.3s;
  }
  & div:last-of-type {
    position: relative;
    right: 0;
    transition: right 0.3s;
  }
  &:hover div:first-of-type {
    left: 3px;
  }
  &:hover div:last-of-type {
    right: 7px;
  }
`;
const YellowBox = styled.div`
  background-color: #ffed37;
  border-radius: 2vw;
  width: 40vh;
`;

const ArticleImage = styled.div`
  & a {
    width: 0; //hide this: we only want the img to be clickable
  }
  width: 20vw;
  height: 20vw;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const ArticleInfo = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    & h2 {
        font-size: 2rem;
        color: #072465
        text-align: center;
        transform: rotate(-4.08deg);
    }
`;
const Author = styled.div`
  text-align: center;
  margin-top: 1vw;
  font-family: Bangers;
  color: white;
  opacity: 0.6;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const T = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpotlightBlock = ({ id, data }) => {
  return (
    <ArticleBoxWrapper id={id}>
      <Column>
        <YellowBox>
          <ArticleInfo>
            <a href={data.link}>
              <h2>{data.title}</h2>
            </a>
          </ArticleInfo>
          <T>
            <a href={data.link}>
              <ArticleImage img={data.img}>
                {/* <img src={data.img} alt={data.title} /> */}
              </ArticleImage>
            </a>
          </T>
        </YellowBox>
        <Author>{data.author}</Author>
      </Column>
    </ArticleBoxWrapper>
  );
};

export default SpotlightBlock;
