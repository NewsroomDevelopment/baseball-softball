import React from 'react';
import styled from 'styled-components'
import ImgSrc_mobile from '../images/background.png';
import ImgSrc_desktop from '../images/background1.png';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import LetterSec from '../components/LetterEditor';
import Navbar3 from '../components/Navbar3';

const TitleWrapper = styled.div`
    // overflow: hidden;
    // width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`;

const TitleButton = styled.a`
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    &>h2{
        margin: 0;
        font-size: 2rem;
    }
    &>div{
        border-bottom: 4px solid ${props => props.theme.white};
        width: 0;
        transition: width 0.2s;
        
    }
    &:hover>div{
        width: 100%;
    }
    @media only screen and (max-width: 992px){
        &>div{
            display: none;
        }
    }

    :hover {
        text-decoration: none;
    }
`

const SectionContainer = styled.div`
    box-sizing: border-box;
    border-top: 5px solid white;
    height: 100%;
    left: 0;
    padding: 0 3rem;
    margin-top: 10rem;
    /*padding-top: 10rem;*/
    width: 100%;
    
    @media only screen and (max-width: 500px){
        position: absolute;
        height: 30rem;
        width: 100%;
        top: 7%;
        left: 0;
    }
`;

const CommencementHeader = styled.div`
    color:white;
    text-transform: uppercase;
    display: flex;
    justify-content:center;
    align-items:center;
    width:100%;
    top: 8px;
    line-height:1em;
    right: 16px;
    font-family: brandon-grotesque;
    &>h1 {
        font-size: 4rem;
    }
    @media only screen and (max-width: 1024px){
        word-wrap: break-word;
        color:white;

        &>h1 {
            font-size: 2.5rem;
        }
    }

    @media only screen and (max-width: 500px){
        margin: 3rem 3rem;
        text-align: center;
    }
`

const Logo = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25rem;

    @media only screen and (max-width: 500px){
        margin: 1rem;
        width:99%;
        margin-left:auto;
        margin-right:auto;
        top: inherit;
        right: inherit;
    }
`

export default class Title extends React.Component {

    render() {
        //onClick={()=>{this.props.navigateTo(i)}} 
        const SectionButtons = this.props.sections.map((el, i) => (
            <TitleButton href={`/#${el === "A&E" ? "Arts and Entertainment" : el}`} key={i}><h2>{el}</h2><div /></TitleButton>
        ))
        return (
            <div>
                <Desktop>
                    <Navbar3></Navbar3>
                    <TitleWrapper img="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UXHLEWEU4VHURBW3CKHHOR5UDY.gif">
                        <CommencementHeader><h1>Baseball & Softball</h1></CommencementHeader>

                        <a href="https://www.columbiaspectator.com/">
                            <Logo src="https://s3.amazonaws.com/year-in-review-assets/whitemasthead.png" />
                        </a>
                        {/* <Logo href="https://www.columbiaspectator.com/"/> */}

                    </TitleWrapper>
                </Desktop>
                <MobileAndTablet>
                    <Navbar3></Navbar3>
                    <TitleWrapper img="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UXHLEWEU4VHURBW3CKHHOR5UDY.gif">
                        <CommencementHeader><h1 style={{ 'line-height': '1.5em' }}>Baseball & Softball</h1></CommencementHeader>

                        <a href="https://www.columbiaspectator.com/">
                            <Logo src="https://s3.amazonaws.com/year-in-review-assets/whitemasthead.png" />
                        </a>
                        {/* <Logo href="https://www.columbiaspectator.com/"/> */}

                    </TitleWrapper>
                </MobileAndTablet>
            </div>
        )
    }
}
