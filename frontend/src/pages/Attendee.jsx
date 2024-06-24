import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Attendees = () => {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updatingId, setUpdatingId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/attendees');
        setAttendees(response.data.attendees);
      } catch (error) {
        console.error('Error fetching attendees:', error);
        setError('Error fetching attendees. Please try again.');
      }
    };

    fetchAttendees();
  }, []);

  const handleAddAttendee = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/attendees', { name, email });
      setAttendees([...attendees, response.data.attendee]);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding attendee:', error);
      setError('Error adding attendee. Please try again.');
    }
  };

  const handleUpdateAttendee = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/attendees/${id}`, { name, email });
      const updatedAttendees = attendees.map((attendee) =>
        attendee.id === id ? response.data.attendee : attendee
      );
      setAttendees(updatedAttendees);
      setName('');
      setEmail('');
      setUpdatingId('');
    } catch (error) {
      console.error('Error updating attendee:', error);
      setError('Error updating attendee. Please try again.');
    }
  };

  const handleDeleteAttendee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/attendees/${id}`);
      const filteredAttendees = attendees.filter((attendee) => attendee.id !== id);
      setAttendees(filteredAttendees);
    } catch (error) {
      console.error('Error deleting attendee:', error);
      setError('Error deleting attendee. Please try again.');
    }
  };

  const handleEdit = (attendee) => {
    setName(attendee.name || '');
    setEmail(attendee.email || '');
    setUpdatingId(attendee.id || '');
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
      marginLeft: '500px',
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
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      fontSize: '16px',
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
      <h2 style={styles.heading}>Attendees List</h2>
      <ul style={styles.list}>
        {attendees && attendees.length > 0 ? (
          attendees.map((attendee) => (
            <li key={attendee.id} style={styles.listItem}>
              {attendee.name} - {attendee.email}
              <div>
                <button onClick={() => handleEdit(attendee)} style={styles.button}>Edit</button>
                <button onClick={() => handleDeleteAttendee(attendee.id)} style={styles.button}>Delete</button>
              </div>
            </li>
          ))
        ) : (
        <p>No attendees found.</p>
        )}
      </ul>
      <h2 style={styles.heading}>{updatingId ? 'Update Attendee' : 'Add Attendee'}</h2>
      <form onSubmit={updatingId ? () => handleUpdateAttendee(updatingId) : handleAddAttendee} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>{updatingId ? 'Update' : 'Add'}</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default Attendees;
