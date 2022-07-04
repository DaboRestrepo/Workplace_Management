import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import HomePage from '../components/pages/HomePage';
import ReservationForm from '../components/pages/ReservationForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/newreservationpage' element={<ReservationForm />} />
      </Routes>
    </BrowserRouter>
  );
}
