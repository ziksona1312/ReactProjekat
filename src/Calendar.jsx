import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="pocetna">
      <h2>Interactive Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <div>
        Selected Date: {date.toDateString()}
      </div>
    </div>
  );
}

export default CalendarPage;