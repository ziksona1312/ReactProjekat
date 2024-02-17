import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Pocetna';
import CalendarPage from './Calendar';
import DataTable from './DataTable';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pocetna />} />
        <Route path='/kalendar' element={<CalendarPage />} />
        <Route path='/data-table' element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
