import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: "Indiana Jones"
  },
  {
    id: 2,
    title: "Bill & Ted's Excellent Adventure"
  }
];


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {movies.map((movie) => (
          <div key={movie.id}>
            {movie.title}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
