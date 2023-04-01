import Layout from 'components/Layout/Layout';
import { lazy, Suspense } from 'react';
import {  Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { Container } from "./App.styled";

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

export const App = () => {
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Container>
 
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        </Route>
       
      </Routes>
    
    </Container>
    </Suspense>
  );
};
