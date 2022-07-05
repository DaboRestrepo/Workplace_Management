import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "../components/pages/Login";
import Signup from '../components/pages/Signup';
import HomePage from "../components/pages/HomePage";
import NewReservationPage from "../components/pages/newReservation/";
import Myreservations from "../components/pages/my-reservations";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/newreservationpage' element={<NewReservationPage />} />
        <Route exact path='/myreservations' element={<Myreservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;