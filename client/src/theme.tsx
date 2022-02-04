import { createGlobalStyle } from "styled-components";

export const styles = Object.assign({}, {});

/**
 *
 * Global Style
 */
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica, Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif;
  }
  body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .fade {
    transition: all 1s ease-out;
  }
`;
