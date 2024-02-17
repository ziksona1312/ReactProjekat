import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Schedule from './Schedule';
import './App.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="pocetna">
      <div className="schedule-container">
      <h2>Interactive Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <div>
        Selected Date: {date.toDateString()}
      </div>
      <Schedule date={date} />
      </div>
    </div>
  );
}

export default CalendarPage;