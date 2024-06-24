import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import './App.css';
import CalendarPage from './components/CalenderPage';
import Navbar from './components/Navbar';
import Attendees from './pages/Attendee';
import Dashboard from './pages/Dashboard';
import EventForm from './pages/EventForm';
import FeedbackForm from './pages/Feedbackform';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TicketForm from './pages/TicketForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage/>} />
            <Route path="/register" element={<Register/>} />
             <Route path="/ticketform" element={<TicketForm />} /> 
             <Route path="/feedbackform" element={<FeedbackForm/>} />
             <Route path="/attendee" element={<Attendees/>} />
             <Route path="/eventform" element={<EventForm/>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
