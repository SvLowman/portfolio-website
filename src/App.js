import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <main>
          <h1>Hello World 😀!</h1>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
