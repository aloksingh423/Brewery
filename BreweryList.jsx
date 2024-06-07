// src/components/BreweryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BreweryList = ({ breweries }) => {
  return (
    <div>
      {breweries.map(brewery => (
        <div key={brewery.id}>
          <h3>{brewery.name}</h3>
          <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
          <p>{brewery.phone}</p>
          <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
          <Link to={`/brewery/${brewery.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BreweryList;