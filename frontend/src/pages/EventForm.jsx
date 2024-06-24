import axios from 'axios';
import React, { useState } from 'react';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/events', eventData); // Adjust URL based on your backend API endpoint
      alert('Event created successfully!');
      // Optionally, reset the form after successful submission
      setEventData({
        name: '',
        date: '',
        time: '',
        location: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event. Please try again.');
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    
    },
    form: {
      width: '50%',
      margin: '0 auto',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      marginLeft: '500px',
    },
    label: {
      marginBottom: '8px',
      display: 'block',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      fontSize: '16px',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{textAlign:"center"}}>Create New Event</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Location:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            style={{ ...styles.input, ...styles.textarea }}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
