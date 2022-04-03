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
                    <p>Dear readers, </p>
                    <p>For almost two years, no basketball games were played in Levien Gymnasium, as the ongoing pandemic pushed athletics to the sidelines. The Ivy League’s athletes and fans were hit especially hard—while the Power Five conferences played throughout the pandemic, the Ancient Eight canceled its 2020-2021 season completely, leaving athletes stranded at home, watching their peers compete as they itched to get back on the court.
                    </p>
                    <p>While the pandemic continues to remain a threat, Columbia basketball is officially back. With this issue, we hope to give readers a snapshot of the state of both the men and women’s programs in their returning seasons.
                    </p>
                    <p>From the story of how a first-year guard on the women’s team was recruited from Australia to a look at what the year off was like for the men’s basketball sophomore class, our staff was thrilled to return to basketball coverage this year. As the women’s squad sets its sights on the Ivy League title while the men’s team hopes to rebound from a 1-13 season, these are the stories that define the state of Columbia basketball.
                    </p>
                    <p>Thank you very much for reading!</p>
                    <p>Miles Schachner, Sports Editor</p>
                </Body>
            </BoxDiv>
        </LetterWrap>
    );
};

export default LetterEditor;