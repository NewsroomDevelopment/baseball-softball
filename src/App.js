import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import GlobalData from "./utils/GlobalData";
import styled from "styled-components";

import Title from "./containers/Title";
import Section from "./containers/Section";
import Acknowledgements from "./components/Acknowledgements";
import Articles from "./containers/Articles";

const sectionNames = [
  "Homecoming",
  "Sports",
  "A&E",
  "Opinion",
  "Acknowledgments",
];

// const Triangle = styled.div`
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 1000px 0 0 500px;
//   border-color: transparent transparent transparent #007bff;
// `;

// const ArticleBlock = styled.div`
//   display:inline;
// `;

function App() {
  let sections = {
    Homecoming: {
      // link: "https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/",
      // img: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"

      // articles: GlobalData.Homecoming
      // ad: "https://commencement2021.s3.amazonaws.com/TelAviv_ad.png"
    },
    Sports: {},
    Opinion: {}
  };


  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Title sections={sectionNames} />
        {/* <Navbar active={state.navActive} sections={Object.keys(sections)} navigateTo={navigateTo}/> */}
        {Object.keys(sections).map((section) => (
          <Section
            name={section}
            blurb={sections[section].description}
            // ad={sections[section].ad}
            data={GlobalData[section]}
            _ref={sections[section].ref}
            miniTitle={sections[section].miniTitle}
          // link = "https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/"
          // img = "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"
          />
        ))}
        {/* <ArticleBlock> */}
        {/* <Triangle /> */}
        <Acknowledgements />
      </>
    </ThemeProvider>
  );

}

export default App;
