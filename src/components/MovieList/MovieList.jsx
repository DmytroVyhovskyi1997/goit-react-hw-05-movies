import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const  MovieList = ({ movies }) => {

  
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
        );
      })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
