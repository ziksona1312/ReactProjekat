import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
//import MyCalendar from './MyCalendar'; 

const Pocetna = () => {
    const [showCalendar, setShowCalendar] = useState(false);
  
    const handleOpenCalendar = () => {
      setShowCalendar(true);
    };
  
    return (
      <div className="pocetna">
        <h1>Dobrodosli u interaktivni Kalendar!</h1>
        {showCalendar ? (
          <Calendar /> // Render the Calendar component if showCalendar is true
        ) : (
          <button onClick={handleOpenCalendar} className="pocetna-dugme">
            OTVORI KALENDAR
          </button>
        )}
      </div>
    );
  };

export default Pocetna;