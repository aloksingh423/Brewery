// src/components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ breweryId, addReview }) => {
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await axios.post(`http://localhost:5000/api/breweries/${breweryId}/reviews`, 
    { rating, description, userId:localStorage.getItem("userid") }, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    addReview(response.data);
    setRating('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <input type="number" min="1" max="5" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;