import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';

export default class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  filterMovies = (movies, filter) => {
    return movies.filter(film =>
      film.title.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { movies } = this.props;
    const { value } = this.state;

    const filteredMovies = this.filterMovies(movies, value);

    return (
      <div className={styles.container}>
        <SearchBar value={value} onChange={this.handleChange} />
        <MovieGrid movies={filteredMovies} />
      </div>
    );
  }
}
