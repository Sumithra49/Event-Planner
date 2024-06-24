import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/register', { email, password, role });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
     marginLeft: '500px'
    },
    container: {
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      marginBottom: '15px',
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
      marginBottom: '10px',
    },
    message: {
      color: 'green',
      textAlign: 'center',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <div>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="role" style={styles.label}>Role:</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <div style={styles.error}>{error}</div>}
          {message && <div style={styles.message}>{message}</div>}
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
