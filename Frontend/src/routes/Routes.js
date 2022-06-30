import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../services/Login';
import Menu from '../services/Menu';
import Signup from '../services/Signup';


export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
