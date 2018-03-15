import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
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
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
        <MovieInfo>
          <div>
            <Overdrive id={movie.id}>
              <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            </Overdrive>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
      margin-left: 20px;
    }
    img {
      position: relative;
      top: -5rem;
    }
`;
