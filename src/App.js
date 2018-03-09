import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Components/Movie';

const movies = [
  {
    id: 1,
    title: "Indiana Jones",
    desc: "Harrison Ford tears up"
  },
  {
    id: 2,
    title: "Bill & Ted's Excellent Adventure",
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
          <Movie key={movie.id} movie={movie} desc={movie.desc}/>
        ))}
      </div>
    );
  }
}

export default App;
