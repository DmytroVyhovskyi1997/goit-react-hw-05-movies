import { NavLink, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  AdditionalInfo,
  MainInfo,
  StyledImg,
  StyledItem,
} from './MovieInformation.styled';

const MovieInformation = ({ movie, children }) => {
  const location = useLocation();
  const prevLocation = location.state?.from;
  const { title, vote_average, release_date, genres, overview } = movie;

  return (
    <main>
      <MainInfo>
        <StyledImg
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <StyledItem>
          <h1>
            {title}({release_date})
          </h1>
          <p>
            <span>User score:</span> {vote_average * 10}%
          </p>
          <p>
            <span>Overview:</span> {overview}
          </p>
          <p>
            <span>Rating:</span> {vote_average}
          </p>
          <p>
            <span>Genres:</span> {genres.map(genre => genre.name).join(', ')}
          </p>
        </StyledItem>
      </MainInfo>
      <AdditionalInfo>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: prevLocation }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: prevLocation }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </AdditionalInfo>
    </main>
  );
};

export default MovieInformation;
