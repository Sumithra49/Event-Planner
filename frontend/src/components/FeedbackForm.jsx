// src/components/FeedbackList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/feedbacks'); // Adjust URL based on your backend API endpoint
      setFeedbacks(response.data.feedbacks);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  return (
    <div>
      <h2>Feedbacks List</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            Event ID: {feedback.eventId}, Attendee ID: {feedback.attendeeId}, Rating: {feedback.rating}, Comments: {feedback.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
