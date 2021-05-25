import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/pages/Projects/index";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("../public/images/bluebrickback.JPEG")` 
    }}>
      Hello World
    <Router basename={process.env.PUBLIC_URL}>
      
        <Header />
        <Switch>
          <Route exact path="/" component={Project} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      
    </Router >
    </div>
  );
}

export default App;
