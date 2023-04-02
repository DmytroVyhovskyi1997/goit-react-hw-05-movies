import { useState, useEffect } from "react";
import { getMovieDetails } from "../Api/fetchMovies";
import MovieInformation from '../components/MovieInformation/MovieInformation'
import BackButton from "../components/BackButton/BackButton";
import { useParams, useLocation, Outlet  } from "react-router-dom";
// import Home from '../pages/Home'
// const Cast = lazy(() => import('../components/Cast/Cast'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";


  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err.message));
  }, [movieId]);

  return(
    <>
       <BackButton to={backLinkHref}>Go back</BackButton>
       {movie && (
      <MovieInformation movie={movie}>
        <Outlet/>
      </MovieInformation>
       )}
    </>
  );
  
};

export default MovieDetails;



