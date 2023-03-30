import { useState, useEffect } from "react";
import { getMovieDetails } from "../Api/fetchMovies";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err.message));
  }, [movieId]);

  return(
    <main>
      {movie ? (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average * 10}%</p>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
  
};

export default MovieDetails;


