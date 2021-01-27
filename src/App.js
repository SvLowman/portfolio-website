import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

const Main = styled.main`
  display: grid;
  grid-template-columns: 20% auto;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Main>
          <Sidebar />
          <LandingPage />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
