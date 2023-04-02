import { useState, useEffect } from 'react';
import { fetchTrending } from '../Api/fetchMovies';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
