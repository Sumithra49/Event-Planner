import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AttendeeList = () => {
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/attendees');
      setAttendees(response.data); // Assuming the response.data is an array of attendees
    } catch (error) {
      console.error('Error fetching attendees:', error);
      setError('Error fetching attendees. Please try again.');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Attendees List</h2>
      {error && <p style={styles.error}>{error}</p>}
      <ul style={styles.list}>
        {attendees.map((attendee) => (
          <li key={attendee.id} style={styles.listItem}>
            Name: {attendee.name}, Email: {attendee.email}, Checked-in: {attendee.checked_in ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendeeList;
