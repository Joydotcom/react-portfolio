import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects/index";
import Home from "./components/Home";
import Resume from "./components/pages/Resume/index";
import { Nav, Navbar } from "react-bootstrap";
import background from "./img/bluebrickback.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto navbar" >
            <Nav.Link href="react-gh-pages#">Home</Nav.Link>
            <Nav.Link href="react-gh-pages#/projects">Projects</Nav.Link>
            <Nav.Link href="react-gh-pages#/resume">Resume</Nav.Link>
          </Nav>
        </Navbar>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
