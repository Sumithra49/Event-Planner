import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup moment.js localizer for react-big-calendar
const localizer = momentLocalizer(moment);

// Sample events data
const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2024, 5, 25, 10, 0), // year, month (0-indexed), day, hour, minute
    end: new Date(2024, 5, 25, 12, 0),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2024, 5, 26, 14, 0),
    end: new Date(2024, 5, 26, 16, 0),
  },
  // Add more events as needed
];

// MyCalendar component
const MyCalendar = () => {
  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
