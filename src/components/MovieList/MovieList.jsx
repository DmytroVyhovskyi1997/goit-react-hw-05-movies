import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { StyledUl } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledUl>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledUl>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
