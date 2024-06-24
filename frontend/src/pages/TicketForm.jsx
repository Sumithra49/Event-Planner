import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TicketForm = ({ ticketId, onSubmit }) => {
  const [event_id, setEventId] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (ticketId) {
      // Fetch ticket details if editing an existing ticket
      axios.get(`http://localhost:8080/tickets/${ticketId}`)
        .then(response => {
          const { event_id, type, price, quantity } = response.data;
          setEventId(event_id);
          setType(type);
          setPrice(price);
          setQuantity(quantity);
        })
        .catch(error => {
          console.error('Error fetching ticket details:', error);
        });
    }
  }, [ticketId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ticketData = { event_id, type, price, quantity };

    try {
      if (ticketId) {
        // Update existing ticket
        await axios.put(`http://localhost:8080/tickets/${ticketId}`, ticketData);
      } else {
        // Create new ticket
        await axios.post('http://localhost:8080/tickets', ticketData);
      }
      onSubmit(); // Notify parent component (e.g., reload tickets list)
      clearForm(); // Clear form fields after submission
    } catch (error) {
      console.error('Error saving ticket:', error);
    }
  };

  const clearForm = () => {
    setEventId('');
    setType('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto',marginLeft:"500px" }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Event ID:
        <input
          type="text"
          value={event_id}
          onChange={(e) => setEventId(e.target.value)}
          required
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Type:
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Quantity:
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Save Ticket</button>
    </form>
  );
};

export default TicketForm;
