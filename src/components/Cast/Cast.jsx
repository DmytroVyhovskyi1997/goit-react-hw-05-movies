import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../Api/fetchMovies";

const Cast = () => {
  const [cast, setCast] = useState(null);
 
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
    .then(res => setCast(res))
    .catch(err => console.log(err));
  }, [movieId]);


  if (!cast) {
    return <p>Loading cast...</p>;
  }

  return (
    <>
      {cast.length > 0 ? (
        cast.map(({ id, name, character, profile_path }) => (
          <div key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </div>
        ))
      ) : (<b>Sorry, we couldn't find any cast for this movie:</b>)}
    </>
  );
  
};

export default Cast;

