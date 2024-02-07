import React from 'react';
import { Link } from 'react-router-dom';

const Pocetna = () => {
  return (
    <div className="pocetna">
      <h1>Dobrodosli u interaktivni Kalendar!</h1>
      <Link to="/kviz/1" className="pocetna-dugme">
        OTVORI KALENDAR
      </Link>
    </div>
  );
};

export default Pocetna;