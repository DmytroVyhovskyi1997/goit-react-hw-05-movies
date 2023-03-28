import PropTypes from 'prop-types';

export function MovieList({ movies }) {
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
