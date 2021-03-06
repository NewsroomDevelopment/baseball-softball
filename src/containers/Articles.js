import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    background-color: #69B3E799;
    padding: 1.5rem 1.5rem;
    margin: 0;
    color: #707070;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 3.5em;
  font-weight: bold;
  padding-bottom: 0.5em;
  color: white;
  font-family: brandon-grotesque;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;


const Section = styled.div`
    margin: 2rem 0;
`;


const Articles = ({ sections }) => {
    return (
        <Wrap>
            {
                sections.map(section => (
                    <Section id={section.title}>
                        <Title>{section.title}</Title>
                    </Section>
                ))
            }
        </Wrap>
    )
}
export default Articles;