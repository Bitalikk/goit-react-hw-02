import React from 'react';
import publications from '../path/publications.json';
import Reader from './ReaderApp/Reader/Reader';
import movies from '../path/movies.json';
import MoviePage from './Movies/MoviePage/MoviePage';
import Dashboard from './Bank/Dashboard/Dashboard';

const App = () => (
  <div>
    <Dashboard />
    <Reader items={publications} />
    <MoviePage movies={movies} />
  </div>
);

export default App;
