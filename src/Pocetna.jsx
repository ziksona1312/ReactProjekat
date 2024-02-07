import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
//import MyCalendar from './MyCalendar'; 

const Pocetna = () => {
    return (
      <div className="pocetna">
        <h1>Dobrodosli u interaktivni Kalendar!</h1>
        <Link to="/kalendar" className="pocetna-dugme">
            OTVORI KALENDAR
        </Link>
      </div>
    );
  };
  
  export default Pocetna;