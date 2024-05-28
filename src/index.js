import React from 'react';
import ReactDOM from 'react-dom';
import NAV from "./components/navbar/App";
import LOADER from './components/Loading/loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register/Register'; // Import the Register component

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <NAV /> 
      </Route>
      <Route path="/apply">
        <Register /> 
      </Route>
    </Switch>
  </Router>,
  rootElement
);

ReactDOM.render(
  <React.Fragment>
    <LOADER />
  </React.Fragment>,
  footer
);
