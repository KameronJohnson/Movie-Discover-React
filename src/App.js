import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Components/Movie';

// https://api.themoviedb.org/3/movie/550?api_key=30230369ecdfba1b41e74d8ac1cac866


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

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=30230369ecdfba1b41e74d8ac1cac866&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      console.log(movies);
      this.setState({
        //results array in json
        movies: movies.results
      })
    } catch(error) {
      console.log(error)
    }
  }
  
  render() {
    console.log(this.state.movies);

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





























