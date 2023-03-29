import React, { useState, useEffect } from "react";
import {fetchMovies } from '../Api/fetchMovies';
import MovieList from '../components/MovieList/MovieList';
import Search from "components/MovieList/Search/Search";

import PropTypes from 'prop-types';


const MovieSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(searchValue)
      .then(res => setMovies(res))
      .catch(err => console.log(err.message));
  }, [searchValue]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
    <Search handleSearchInputChange={handleSearchInputChange} />
    <MovieList movies={movies} />
  </div>
  );
};

export default MovieSearch;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
