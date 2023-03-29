import PropTypes from 'prop-types';

const  MovieList = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies found.</p>;
  }
  
  return (
    <ul>
      {movies.map(el => {
        return (
          <li key={el.id}>
            <p>{el.title}</p>
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
