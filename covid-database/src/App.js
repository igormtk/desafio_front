import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import GlobalState from "./global/globalState";
import GlobalStyle from "./global/globalStyle";
import RouterComponent from "./Routes/Router";

function App() {
  return (
  
    <ThemeProvider theme={theme}>

      <GlobalState>

        <GlobalStyle/>

        <RouterComponent/>

      </GlobalState>

    </ThemeProvider>
  );
}

export default App;
