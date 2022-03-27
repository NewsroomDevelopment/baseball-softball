import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import GlobalData from "./utils/GlobalData";

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

function App() {
  let sections = {
    Homecoming: {
      // link: "https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/",
      // img: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"

      // articles: GlobalData.Homecoming
      // ad: "https://commencement2021.s3.amazonaws.com/TelAviv_ad.png"
    },
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
        <Articles
          sections={[
            {
              title: "Sports",
              articles: GlobalData.Sports,
            },
            {
              title: "Arts and Entertainment",
              articles: GlobalData["Arts and Entertainment"],
            },
            {
              title: "Opinion",
              articles: GlobalData.Opinion,
            },
            // {
            //   title: "Photo",
            //   articles: GlobalData.Photo,
            // },
          ]}
        />
        <Acknowledgements />
      </>
    </ThemeProvider>
  );

}

export default App;
