import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=9a450fbd652c62e887bc78d79e7a75f2';

export const fetchTrending = async () => {
    const response = await axios.get(`/trending/movie/day${API_KEY}?`)
    
    return response.data.results.map(({id, title}) => {
        return {
            id,
            title,
        }
    })
    
}