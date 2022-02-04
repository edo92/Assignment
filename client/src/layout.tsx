import React from "react";
import { ThemeProvider } from "styled-components";
import { styles, GlobalStyle } from "./theme";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyle />
      <>{children}</>
    </ThemeProvider>
  );
};

export default Layout;
