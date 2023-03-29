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