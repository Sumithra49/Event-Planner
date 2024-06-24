import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import your background image if you have one
// import backgroundImage from './path/to/background.jpg';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/events'); // Adjust URL based on your backend API endpoint
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const styles = {
    home: {
      textAlign: 'center',
      marginTop: '50px',
      // Apply background image inline style
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7EE3rrogs4Qt4uYCKzfeJfZ9HRpRMbRXMQ&s')`, // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure full viewport height coverage
      color: '#333', // Example text color on top of the background
    },
    title: {
      marginBottom: '20px',
    },
    eventContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    eventCard: {
      maxWidth: '400px',
      width: '100%',
      margin: '20px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
    },
    cardContent: {
      padding: '15px 20px',
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    linkButton: {
      height: '20px',
      padding: '10px 20px',
      margin: '0 10px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.home}>
      <div>
        <h1 style={styles.title}>Welcome to Event Planner</h1>

        <div style={styles.eventContainer}>
          {events.map((event) => (
            <div key={event.id} style={styles.eventCard}>
              <div style={styles.cardContent}>
                <h3 style={{ textAlign: 'center' }}>{event.name}</h3>
                <p style={{ textAlign: 'center' }}>Date: {event.date}</p>
                <p style={{ textAlign: 'center' }}>Time: {event.time}</p>
                <p style={{ textAlign: 'center' }}>Location: {event.location}</p>
                <div style={styles.linkContainer}>
                  <Link to="/ticketform" style={styles.linkButton}>
                    Tickets
                  </Link>
                  <Link to="/feedbackform" style={styles.linkButton}>
                    Feedback
                  </Link>
                  <Link to="/attendee" style={styles.linkButton}>
                    Attendees
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
