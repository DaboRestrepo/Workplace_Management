import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< Login />} />
                <Route exact path='/menu' element={< Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
