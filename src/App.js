import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=30230369ecdfba1b41e74d8ac1cac866&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      this.setState({
        //results array in json
        movies: movies.results
      })
    } catch(error) {
      console.log(error)
    }
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.movies.map((movie) => (
          <Movie key={movie.id} movie={movie}/>
        ))}
      </div>
    );
  }
}

export default App;





























