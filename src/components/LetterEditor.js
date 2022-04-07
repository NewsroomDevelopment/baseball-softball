import React from 'react';
import styled from 'styled-components';
import '../index.css';
const LetterWrap = styled.div`
    background-color: #BFD8E9;
    padding-bottom:5vh;
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
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
    font-family: Bangers;
    font-style: normal;
    font-weight: 900;
    font-size: 5em;
    letter-spacing: 0.05em;
    color: #072465;
    padding:6vh 0 2vh 0;
    word-wrap:break-word;
    @media (max-width: 768px) {
        font-size: 2em;
        -webkit-text-stroke: 1px #0C120C;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color: #072465;
    word-wrap:break-word;
    width:100%;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <BoxDiv>
                <Title>LETTER FROM THE EDITOR</Title>
                <Body>
                    <p></p>
                    <p>As a long, dark winter abates and we are greeted with spring, another season of sports begins. Like many of the Columbia traditions that were lost to the COVID-19 pandemic, the baseball and softball teams have been unable to don Columbia Blue for almost two years. This year, the Lions have a chance to put on their cleats and take the diamond again.
                    </p>
                    <p>Both the baseball and softball teams have embarked on their 2022 seasons on a hopeful note: Each team was selected to finish in the top two seeds of the Ivy League. While the baseball team carries an impressive pedigree as the best in the conference over the last decade, the softball team has risen to prominence over the past few seasons. 
                    </p>
                    <p>In this issue, our writers chronicle the stories that define the past and present of Columbia baseball and softball. Read about the experiences that have shaped the program-shifting leadership of softball head coach Jen Teague, the advanced statistics behind the baseball team’s performances, and the conference outlook for each team. On the historical side, we dive into Hall of Famer Lou Gehrig’s time at Columbia and the transition of the softball team from a club sport to a varsity stalwart. Lastly, read the case for baseball’s return to relevance among young people.
                    </p>
                    <p>Thank you for reading,</p>
                    <p>Miles Schachner, Sports Editor</p>
                </Body>
            </BoxDiv>
        </LetterWrap>
    );
};

export default LetterEditor;