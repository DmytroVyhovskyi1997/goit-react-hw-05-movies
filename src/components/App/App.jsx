import { NavLink, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Home  from '../../pages/Home'
import Movies from '../../pages/Movies'
import { Container, Header } from "./App.styled";
export const App = () => {
  
  const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
  return (
    <Container>
      <Header>
    {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    > */}
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    {/* </div> */}
    
    </Container>
  );
};
