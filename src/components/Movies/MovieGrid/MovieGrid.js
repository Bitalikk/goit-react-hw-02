import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ movies }) => (
  <div className={styles.movieGrid}>
    {(movies.length === 0 && (
      <div className={styles.errorMessage}>
        <p>No matching results!</p>
      </div>
    )) ||
      movies.map(film => {
        return <MovieGridItem key={film.id} movie={film} />;
      })}
  </div>
);

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
