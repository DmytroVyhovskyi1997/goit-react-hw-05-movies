import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import{StyledUl} from './MovieList.styled'

const  MovieList = ({ movies }) => {

  
  return (
    <ul>
      <StyledUl>
      {movies.map(movie => {
        
        return (
          
          <li key={movie.id}>
 
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        
        </li>
        
        );
        
      })}</StyledUl>
      
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
