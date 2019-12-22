import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Home from "./pages/Home"; 
import SavedVideos from "./pages/SavedVideos"; 
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={SavedVideos}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
