import React from "react";
import styled from "styled-components";
import TitleCard from "./TitleCard.js";
import { MobileAndTablet, Desktop } from "react-responsive-simple";
import ArticleBox from "../components/ArticleBox.js";
import SpotlightBlock from "../components/SpotlightBlock";

const SectionWrapper = styled.div`
  justify-content: space-between;
  background: ${(props) => props.theme.blue};
`;

const HeaderWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 992px) {
    display: inline-flex;
    align-self: flex-start;
    top: 0;
    align-items: center;
    color: ${(props) => props.theme.white};
  }
`;

const ArticlesWrapper = styled.div`
  width: 100vw;
  @media only screen and (min-width: 992px) {
    width: 65vw;
    margin-left: 30%;
    padding: 4rem 0;
    margin-top: -15vw;
  }
  padding: 0rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Section = ({ name, _ref, ad, miniTitle, blurb, data }) => {
  var list = [];

  const Articles = data.map((el, i) => {
    var newID = el.title;
    var id = newID.replace(/ /g, "-");
    list[i] = {
      name: el.title,
      description: el.author,
    };
    if (name != "Spotlights") return <ArticleBox key={i} data={el} id={id} />;
    else {
      if (i % 2 != 1 && i != 5)
      return (
        <Row>
          <SpotlightBlock key={i} data={el} id={id} />
          <SpotlightBlock key={i + 1} data={data[i + 1]} id={id} />
        </Row>
      );
    }

    //return <ArticleBox key={i} data={el} id={id} />;
  });
  console.log(Articles);

  const info = [
    {
      title: name,
      titleDesc: blurb,
      list: list,
      ad: ad,
      miniTitle: miniTitle,
    },
  ];

  const TitleCards = info.map((info) => <TitleCard info={info} />);
  return (
    <SectionWrapper id={name} ref={_ref}>
      <HeaderWrapper>{TitleCards}</HeaderWrapper>
      <ArticlesWrapper>{Articles}</ArticlesWrapper>
    </SectionWrapper>
  );
};

export default Section;
