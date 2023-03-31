import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import Layout from '../../components/Layout/Layout';
import { Container } from '../../components/App/App.styled';

const App = () => {
  return (
    <Container>
      <Routes>
      <Route>
         <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/movies" element={<Layout><Movies /></Layout>} />
        <Route path="/movies/:movieId" element={<Layout><MovieDetails /></Layout>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
       
      </Routes>
    </Container>
  );
};

export default App;
