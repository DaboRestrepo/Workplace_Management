import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Menu from '../components/Menu';
import SignupLayout from '../components/SignupLayout';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/signup' element={<SignupLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
