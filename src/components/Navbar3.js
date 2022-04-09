import React from "react";
import styled from "styled-components";

const NavSection = styled.div`
background-color: #0D2661;
display: flex;
flex-direction: row;
height: 96px;
width: 100vw;
${({ fixed }) => fixed && `
  left: 0;
  position: fixed;
  top: 0;
  z-index: 2;
`}
`;

const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;

const SectionText = styled.div`
  font-size: 1.5rem;
  line-height: 1.85em;
  color: #ffffff;
  text-align: left;
  font-family: "brandon-grotesque";
  font-style: normal;
  font-weight: normal;
  padding-left: 0.5em;
  cursor: pointer;
}
`;

const Title = styled.div`
  font-family: Bangers;
  font-weight: 700;
  font-size: 2rem;
  line-height: 6rem;;
  text-transform: uppercase;
  @media (max-width: 767px) {
      font-size: 1rem;
  }
  padding-right:4rem;
}
`;

/*  @media ${device.mobile} {
    text-align:center;
  }
  */


const Navbar3 = ({ current, setSection }) => {
  const sections = {
    Currents: "Currents",
    Spotlights: "Spotlights",
    Historic: "Historic",
  };
  return (
    <NavSection>
        {Object.keys(sections).map((section) => (
          <SectionText>
            <Title><a href = {`#${sections[section]}`}>{section}</a></Title>
          </SectionText>
        ))}
    </NavSection >
  );

    /*const desktopMenu = (
        <React.Fragment>
          <MenuContainer>
            <MenuRow>
              {this.getMenuItems(isMobile, this.props.isScrolling)}
            </MenuRow>
          </MenuContainer>
        </React.Fragment>
      );
  );*/
};

export default Navbar3;