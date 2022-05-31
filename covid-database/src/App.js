import React from "react";
import GlobalState from "./global/globalState";
import GlobalStyle from "./global/globalStyle";
import RouterComponent from "./Routes/Router";

function App() {
  return (
  
    <GlobalState>

      <GlobalStyle/>

      <RouterComponent/>

    </GlobalState>

  );
}

export default App;
