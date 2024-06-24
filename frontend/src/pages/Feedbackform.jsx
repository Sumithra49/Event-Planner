// src/components/FeedbackForm.js
import axios from 'axios';
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [eventId, setEventId] = useState('');
  const [attendeeId, setAttendeeId] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/events/${eventId}/attendees/${attendeeId}/feedback`, {
        rating,
        comments
      });
      console.log('Feedback created:', response.data);
      alert('Feedback submitted successfully');
      // Optionally reset form fields or update UI
      setEventId('');
      setAttendeeId('');
      setRating('');
      setComments('');
    } catch (error) {
      console.error('Error creating feedback:', error);
      setError('Error creating feedback. Please try again.');
    }
  };

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginLeft:"500px"
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    input: {
      width: 'calc(100% - 20px)',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    textarea: {
      width: 'calc(100% - 20px)',
      height: '100px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="eventId" style={styles.label}>Event ID:</label>
          <input
            type="text"
            id="eventId"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="attendeeId" style={styles.label}>Attendee ID:</label>
          <input
            type="text"
            id="attendeeId"
            value={attendeeId}
            onChange={(e) => setAttendeeId(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="rating" style={styles.label}>Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="comments" style={styles.label}>Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
