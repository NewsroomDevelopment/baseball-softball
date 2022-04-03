import React from 'react';
import styled from 'styled-components'

const ArticleBoxWrapper = styled.div`
    margin-left: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 50px;
    color: ${props => props.theme.darkgraygit};
    @media only screen and (min-width: 992px){
        flex-direction: row;
        text-align: left;
        color: ${props => props.theme.darkgray};
    }
    & div:first-of-type{
        position: relative;
        left: 0;
        transition: left 0.3s;
    }
    & div:last-of-type{
        position: relative;
        right: 0;
        transition: right 0.3s;
    }
    &:hover div:first-of-type{
        left: 3px;
    }
    &:hover div:last-of-type{
        right: 7px;
    }
`
const YellowBox = styled.div`
    background-color: #FFED37;
    border-radius: 2vw;
    width: 40vh;
`

const FlexChild = styled.div`
    margin: 1%;
`

const ArticleImage = styled.div`
    & a {
        width: 0; //hide this: we only want the img to be clickable
    }
    & img {
        overflow: hidden;
        border-radius: 50%;
        display: block;
        width: 100%;
        max-width: 50vh; /*actual image width*/
        height: auto; /* maintain aspect ratio*/
        margin: auto; /*optional centering of image*/
    }
`

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
`
const Author = styled.div`
    text-align: center;
    margin-top: 1vw;
    font-family: Bangers;
    color: white;
    opacity: 0.6;
`

const SpotlightBlock = ({ id, data }) => {
    return (
        <ArticleBoxWrapper id={id}>
            <FlexChild>
                <YellowBox>
                    <ArticleInfo>
                        <a href={data.link}>
                            <h2>{data.title}</h2>
                        </a>
                    </ArticleInfo>
                    <ArticleImage>
                        <a href={data.link}>
                            <img src={data.img} alt={data.title} />
                        </a>
                    </ArticleImage>
                </YellowBox>
                <Author>{data.author}</Author>
            </FlexChild>
        </ArticleBoxWrapper>
    )
}

export default SpotlightBlock;