// src/pages/Dashboard.js
import React from 'react';
import AttendeeList from '../components/AttendeeList';
import EventList from '../components/EventList';
import FeedbackForm from '../components/FeedbackForm';
import TicketList from '../components/TicketList';
import UserList from '../components/UserList';

const Dashboard = () => {
  return (
    <div>
      <h1>Event Management Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <EventList />
        </div>
        <div className="dashboard-item">
          <AttendeeList />
        </div>
        <div className="dashboard-item">
          <FeedbackForm />
        </div>
        <div className="dashboard-item">
          <TicketList />
        </div>
        <div className="dashboard-item">
          <UserList />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
