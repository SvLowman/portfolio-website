import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechStackPage from "./pages/TechStackPage";
import CVPage from "./pages/CVPage";
import Footer from "./components/Footer";

const Main = styled.main`
  display: grid;
  grid-template-columns: 20% auto;
  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Main>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/techstack">
              <TechStackPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/cv">
              <CVPage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
