import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleFormSubmit = async () => {
    await fetchTickets(); // Reload tickets after form submission
  };

  return (
    <div>
      <h2>Tickets List</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            Event ID: {ticket.event_id}, Type: {ticket.type}, Price: ${ticket.price}, Quantity: {ticket.quantity}, Sold: {ticket.sold}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TicketList;
