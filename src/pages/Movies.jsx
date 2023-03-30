import React, { useState, useEffect} from "react";
import {fetchMovies } from '../Api/fetchMovies';
import MovieList from '../components/MovieList/MovieList';
import Search from "components/Search/Search";
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';


const MovieSearch = () => {
 
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchValue = searchParams.get('query');

  useEffect(() => {
    if (!searchValue ) {
      return;
    }
    fetchMovies(searchValue)
      .then(res => setMovies(res))
      .catch(err => console.log(err.message));
  }, [searchValue]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <Search updateQueryString={updateQueryString}/>
      {movies &&
        (movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <b>No movies found</b>
        ))}
    </div>
  );
};



MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieSearch;

