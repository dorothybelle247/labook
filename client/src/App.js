import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Model2View from './components/model2view';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={
          props => (
            <div className="App">
              
            </div>
          )
        } />
        <Route exact path="/b" render={
          props => (
            <Model2View></Model2View>
          )
        } />
      </Router>
    );
  }
}

export default App;