import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import CVPage from "./pages/CVPage";
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
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/cv">
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
