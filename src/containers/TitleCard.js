import React from "react";
import styled from "styled-components";
import List from "./List.js";

const BigPapa = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  margin-left: 2rem;
  margin-top: 2%;
  white-space: pre-wrap;
`;
const Title = styled.div`
  text-transform: capitalize;
  font-family: brandon-grotesque;
  & h1 {
    font-size: 7rem;
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

const Desc = styled.div`
  font-size: 1.3em;
  width: 50vw;
`;

const Ad = styled.img`
  width: 100%;
  /* background-color: blue; */
`;

const TitleCard = ({ info }) => {
  return (
    <BigPapa>
      <Title>
        <h1 style={{ color: "white "}}>
          {info.title}
        </h1>
      </Title>
      <br />
      <Desc>
        <h3 style={{ fontSize: "17px" }}>{info.titleDesc}</h3>
      </Desc>
      <br />
      <br />

      {/* <a href="https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/">
                    <img width = "500" alt="essay" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"></img>
                </a> */}
      {/* <Title style={{'text-align': 'center', marginTop: '1%'}}>To Come</Title> */}

      <Ad src={info.ad}></Ad>
    </BigPapa>
  );

}

export default TitleCard;
