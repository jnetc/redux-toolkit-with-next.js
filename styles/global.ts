import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.colors.bg};
    transition: all .5s ease-in-out;
  }

  html, body, #__next {
    height: max(800px, 100%);
  }

  #__next {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2 {
    font-family: 'Merriweather', serif;
    font-weight: bold;
  }
  p {
    font-family: 'Poppins', sans-serif;
  }

  .hidden-input {
    position: absolute;
    z-index: -1;
    visibility: hidden;
  }

`;
