
import { NavLink, useLocation,  } from "react-router-dom";
import { Suspense,  } from "react";





const MovieInformation = ({movie, children}) =>{
    const location = useLocation();
    const prevLocation = location.state?.from;
 
    return(
        <main>
      
     
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average * 10}%</p>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
   
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
    </main>
    )
}

export default MovieInformation ;