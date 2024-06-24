import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const EventList = () => {
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

  return (
    <Container>
      <h2>Events List</h2>
      <Row>
        {events.map(event => (
          <Col key={event.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.imageUrl} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  Date: {event.date}<br />
                  Time: {event.time}<br />
                  Location: {event.location}
                </Card.Text>
            
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventList;
