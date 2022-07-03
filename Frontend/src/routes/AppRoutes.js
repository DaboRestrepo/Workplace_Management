import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/pages/Login';
import Menu from '../components/pages/Menu';
import ReservationForm from '../components/pages/ReservationForm';
import Signup from '../components/pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/reservationform' element={<ReservationForm />} />
      </Routes>
    </BrowserRouter>
  );
}
