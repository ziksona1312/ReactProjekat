import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Schedule = ({ date }) => {
  const [scheduleText, setScheduleText] = useState('');

  useEffect(() => {
    const savedSchedule = localStorage.getItem(getLocalStorageKey(date));
    if (savedSchedule) {
      setScheduleText(savedSchedule);
    } else {
      setScheduleText('');
    }
  }, [date]);

  const handleInputChange = (event) => {
    setScheduleText(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem(getLocalStorageKey(date), scheduleText);
    alert(`Schedule for ${date.toDateString()} saved!`);
  };

  const getLocalStorageKey = (date) => {
    return `schedule_${date.toDateString()}`;
  };

  return (
    <div className="schedule">
      <h3>Schedule for {date.toDateString()}</h3>
      <textarea
        value={scheduleText}
        onChange={handleInputChange}
        placeholder="Enter your schedule here..."
      />
      <Link to="/kalendar" className="pocetna-dugme" onClick={handleSave}>
        Save Schedule
      </Link>

    </div>
  );
};

export default Schedule;