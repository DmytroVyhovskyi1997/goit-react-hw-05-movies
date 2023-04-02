import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledUl, StyledLi } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <StyledUl>
      <StyledLi>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </StyledLi>
    </StyledUl>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
