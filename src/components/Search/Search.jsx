
import React from 'react';

const Search = ({ updateQueryString }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.title.value.trim();
    updateQueryString(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
