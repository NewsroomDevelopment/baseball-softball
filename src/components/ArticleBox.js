import React from 'react';
import styled from 'styled-components'

const ArticleBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    color: ${props => props.theme.darkgraygit};
    @media only screen and (min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
        align-items: unset;
        text-align: left;
        color: ${props => props.theme.darkgray};
        /* color: ${props => props.theme.cream}; */
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

const ArticleImage = styled.div`
    & a {
        width: 0; //hide this: we only want the img to be clickable
    }
    & img {
        width: 250px;
        height: 250px;
        overflow: hidden;
        border-radius: 50%;
    }
`

const ArticleInfo = styled.div`
    width: 60%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`

const ArticleBox = ({ id, data }) => {
    return (<ArticleBoxWrapper id={id}>
        <ArticleImage>
            <a href={data.link}>
                <img src={data.img} alt={data.title} />
            </a>
        </ArticleImage>
        <ArticleInfo>
            <a href={data.link}>
                <h2>{data.title}</h2>
            </a>
            <h4>By {data.author}</h4>
            {data.photographer && <h4>Photograph by {data.title}</h4>}
        </ArticleInfo>
    </ArticleBoxWrapper>)
}

export default ArticleBox;