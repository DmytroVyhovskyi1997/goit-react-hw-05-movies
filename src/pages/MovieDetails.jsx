import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../Api/fetchMovies';
import MovieInformation from '../components/MovieInformation/MovieInformation';
import BackButton from '../components/BackButton/BackButton';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <BackButton to={backLinkHref}>Go back</BackButton>
      {movie && (
        <MovieInformation movie={movie}>
          <Outlet />
        </MovieInformation>
      )}
    </>
  );
};

export default MovieDetails;
