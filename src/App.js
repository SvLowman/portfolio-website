import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <main>
          <h1>Hello World 😀!</h1>
        </main>
      </Router>
    </div>
  );
}

export default App;
