import React from 'react';
import { StyledForm } from './Search.styled';

const Search = ({ updateQueryString }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.title.value.trim();
    updateQueryString(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Search movies:</h2>
      <input type="text" name="title" />
      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default Search;
