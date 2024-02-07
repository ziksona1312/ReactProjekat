import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
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

export default MyCalendar;