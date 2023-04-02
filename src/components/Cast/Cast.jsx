import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../Api/fetchMovies";
import {Loader} from '../Loader/Loader'
import {  StyledCast } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
 
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
    .then(res => setCast(res))
    .catch(err => console.log(err));
  }, [movieId]);


  if (!cast) {
    return <p><Loader/></p>;
  }

  return (
    <>
    <StyledCast>
      {cast.length > 0 ? (
        
        cast.map(({ id, name, character, profile_path }) => (
          <div key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
            <h2>{name}</h2>
            <p><span>Character:</span> {character}</p>
          </div>
        ))
       
      ) : (<b>Sorry, we couldn't find any cast for this movie:</b>)}
      </StyledCast>
    </>
    
  );
  
};

export default Cast;

