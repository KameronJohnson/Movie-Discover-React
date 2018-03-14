import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import MoviesList from './Components/MoviesList';

const Test = () => (
  <h2>Test</h2>
);

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;

