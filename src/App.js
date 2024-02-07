import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Pocetna';
import CalendarPage from './Calendar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pocetna />} />
        <Route path='/kalendar' element={<CalendarPage />} /> {/* Define the route for CalendarPage component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
