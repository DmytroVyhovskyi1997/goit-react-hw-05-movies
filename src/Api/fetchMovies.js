import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=9a450fbd652c62e887bc78d79e7a75f2';

export const fetchTrending = () => {
    return axios(`/trending/movie/day${API_KEY}`)
    .then(res => res.data.results)
  };



  export const fetchMovies = searchValue => {
    return axios(`/search/movie${API_KEY}&query=${searchValue}`)
    .then(res => res.data.results)
  }

  export const getMovieDetails = movieId => {
    return axios(`/movie/${movieId}${API_KEY}&page=1&language=en-US`)
      .then(res => {
        const { poster_path, backdrop_path } = res.data;
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        const imgUrl = poster_path ? `${baseUrl}${poster_path}` : `${baseUrl}${backdrop_path}`;
        return { ...res.data, imgUrl };
      });
  };
  

  
  