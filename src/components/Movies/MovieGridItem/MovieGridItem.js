import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ movie }) => (
  <div className={styles.movieCard}>
    <img src={movie.posterUrl} alt={movie.title} />
    <div className={styles.content}>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieGridItem;
