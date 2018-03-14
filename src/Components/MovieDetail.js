import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }
  // match is where the params are stored within react router
  async componentDidMount() {
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=30230369ecdfba1b41e74d8ac1cac866&language=en-US`);
      const movie = await result.json();
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
