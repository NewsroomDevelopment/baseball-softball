import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url("https://use.typekit.net/oun7bhh.css");
    @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,500;1,100;1,300;1,400;1,700&display=swap');
    h1 {
        font-family: Bangers;
        font-weight: 700;
        fontStyle: bold;
        font-size: 4rem;
        line-height: 1rem;
        text-transform: uppercase;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    p {
          font-family: Bangers;
    }
    h2 {
        font-family: Bangers;
        font-weight: 700;
        fontStyle: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: white;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    h3 {
        font-family: Bangers;
        font-weight: 700;
        fontStyle: bold;
        font-size: .7rem;
        margin: 0;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    h4 {
        font-family: Bangers;
        font-weight: 400;
        font-style: normal;
        font-size: 0.75rem;
        color: rgba(255,255,255, 0.6);
        margin: 0;
        text-transform: uppercase;
    }

    a {
        color: white;
        text-decoration: inherit;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const Theme = {
    black: "#000000",
    white: "#FFFFFF",
    darkgray: "#707070",
    lightgray: "#B4B4B4",
    blue: "#072465",
    babyBlue: "#B5E0F7",
}