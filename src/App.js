import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects/index";
import Home from "./components/pages/home/Home";
import Resume from "./components/pages/Resume/index";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./img/jsjlogo.PNG";
import background from "./img/minback2.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <div className="bar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand >
          <a className="navbar-brand" href="#home">
              <img src={logo} width="70" height="70" alt="" />
            </a> </Navbar.Brand>
          <Nav className="mr-auto navbar" >
            <Nav.Link href="/react-portfolio/#">Home</Nav.Link>
            <Nav.Link href="/react-portfolio#/projects">Projects</Nav.Link>
            <Nav.Link href="/react-portfolio#/resume">Resume</Nav.Link>
          </Nav>
        </Navbar>
        </div>
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
