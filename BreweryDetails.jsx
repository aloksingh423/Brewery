// src/components/BreweryDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBrewery = async () => {
      const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
      setBrewery(response.data);
    };

    const fetchReviews = async () => {
      const response = await axios.get(`http://localhost:5000/api/breweries/${id}/reviews`);
      setReviews(response.data);
    };

    fetchBrewery();
    fetchReviews();
  }, [id]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      {brewery && (
        <>
          <h2>{brewery.name}</h2>
          <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
          <p>{brewery.phone}</p>
          <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
        </>
      )}
      <h4>Reviews</h4>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>{review.description}</p>
        </div>
      ))}
      <ReviewForm breweryId={id} addReview={addReview} />
    </div>
  );
};

export default BreweryDetails;