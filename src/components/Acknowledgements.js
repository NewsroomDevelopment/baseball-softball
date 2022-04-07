import React from "react";
import styled from "styled-components";
import Credits from "../utils/Credits";
import { MobileAndTablet, Desktop } from "react-responsive-simple";

const Wrapper = styled.div`
  background: ${(props) => props.theme.babyBlue};
  font-family: Bangers;
  padding: 4rem 2rem;
  height: auto;
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
`;

const BoxDiv = styled.div`
  margin: 5%;
  padding: 2%;
  padding-left: 4%;
  padding-right: 4%;
  border: 1px solid #072465;
  box-sizing: border-box;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.6em;
  color: #072465;
  font-weight: 900;
  margin-bottom: 2rem;
  @media only screen and (min-width: 1200px) {
    font-size: 2.8em;
  }
`;

const Panel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
`;

const PanelContainer = styled.div`
  display: flex;
  width: 90%;
  padding-left: 2rem;
  justify-content: space-between;
`;

const Section = styled.div`
  font-size: 1.13rem;
  color: #072465;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-size: 0.9rem;
  color: #072465;
  font-weight: bold;
  font-style: italic;
  white-space: pre;
  font-family: Bangers;
  ::after {
    content: ", ";
    font-style: normal;
  }
`;

const Position = styled.div`
  font-size: 0.8rem;
  color: #072465;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionContainer = styled.div`
  margin-bottom: 1em;
`;

const DevWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  padding-left: 2rem;
`;

const Dev = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10rem;
`;

const Division = ({ section }) => {
  var creditsList = [];
  var section = section;
  if (section != undefined) {
    creditsList = Credits[section].map((el, i) => (
      <Person>
        <Name>{el.name}</Name>
        <Position>{el.title}</Position>
      </Person>
    ));
    return (
      <SectionContainer>
        <Section>{section}</Section>
        {creditsList}
      </SectionContainer>
    );
  } else {
    return null;
  }
};

const dev_creds = [
  {
    name: "Hong Sen Du",
    title: "Head of Newsroom Development",
  },
  {
    name: "Cindy Espinosa",
    title: "Head of Product",
  },
  {
    name: "Sagarika Sharma",
    title: "Deputy Product Designer",
  },
  {
    name: "Raymond Banke",
    title: "Deputy Product Designer",
  },
  {
    name: "Victoria Geh",
    title: "Deputy Newsroom Developer",
  },
  {
    name: "Evan Li",
    title: "Deputy Newsroom Developer",
  },
  {
    name: "Patrick Puma",
    title: "Deputy Newsroom Developer",
  },
  {
    name: "Elaine Lee",
    title: "Newsroom Developer",
  },
  {
    name: "Gulshan Meem",
    title: "Newsroom Developer",
  },
  {
    name: "Kevin Wang",
    title: "Newsroom Developer",
  },
  {
    name: "Noah Bergam",
    title: "Newsroom Development Trainee",
  },
  {
    name: "Joonsoo Lee",
    title: "Newsroom Development Trainee",
  },
  {
    name: "James Yiu",
    title: "Newsroom Development Trainee",
  },
];

const Acknowledgments = () => {
  var panel1 = ["Sports", "Photo", "Illustrations"];
  var panel2 = ["Copy", "Newsroom Development"];
  var panel3 = ["Product"];

  return (
    <Wrapper id="Acknowledgments">
      <BoxDiv>
        <Title>Thanks</Title>
        <Desktop>
          <PanelContainer>
            {/* <Panel>
              {panel1.map((element, i) => (
                <Division key={i} section={element} />
              ))}
            </Panel> */}
            <Panel>
              {panel2.map((element, i) => (
                <Division key={i + 100} section={element} />
              ))}
            </Panel>
            <Panel>
              {panel3.map((element, i) => (
                <Division key={i + 200} section={element} />
              ))}
            </Panel>
            {/* <Panel>
              {panel4.map((element, i) => (
                <Division key={i + 300} section={element} />
              ))}
            </Panel> */}
          </PanelContainer>
        </Desktop>
        <MobileAndTablet>
          <PanelContainer>
            <Panel>
              {panel1
                .concat(panel2)
                .concat(panel3)
                // .concat(panel4)
                .map((element, x) => (
                  <Division section={element} />
                ))}
            </Panel>
          </PanelContainer>
        </MobileAndTablet>
        <Title>Design and Development</Title>
        <DevWrap>
          <div>
            {dev_creds.slice(0, 4).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
          <div>
            {dev_creds.slice(4, 8).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
          <div>
            {dev_creds.slice(8, 12).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
        </DevWrap>
      </BoxDiv>
    </Wrapper>
  );
};

export default Acknowledgments;
