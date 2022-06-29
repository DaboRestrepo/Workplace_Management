import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Menu from '../components/Menu';

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
