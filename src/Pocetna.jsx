import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
//import MyCalendar from './MyCalendar'; 

const Pocetna = () => {
    return (
      <div className="pocetna">
        <h1>Welcome to our interactive Calendar!</h1>
        <Link to="/kalendar" className="pocetna-dugme">
            Open Calendar
        </Link>
      </div>
    );
  };
  
  export default Pocetna;