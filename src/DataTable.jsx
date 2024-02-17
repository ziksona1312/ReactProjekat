import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const scheduleKeys = Object.keys(localStorage).filter(key => key.startsWith('schedule_'));
    const data = scheduleKeys.map(key => ({
      date: key.substring('schedule_'.length),
      schedule: localStorage.getItem(key)
    }));
    setScheduleData(data);
  }, []);

  return (
    <div>
      <h2>Schedule Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/kalendar" className="pocetna-dugme" >Back to Calendar</Link>
    </div>
  );
};

export default DataTable;