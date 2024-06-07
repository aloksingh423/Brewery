// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import BreweryList from './BreweryList';

const Search = () => {
  const [query, setQuery] = useState('');
  const [breweries, setBreweries] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${query}`);
    setBreweries(response.data);
  };

  return (
    <div>
      <h2>Search Breweries</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter city, name, or type" value={query} onChange={(e) => setQuery(e.target.value)} required />
        <button type="submit">Search</button>
      </form>
      <BreweryList breweries={breweries} />
    </div>
  );
};

export default Search;