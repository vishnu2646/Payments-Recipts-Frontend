import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Income, Register } from './Pages';
import { Sidenav, TopNav } from './Components';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <TopNav />
                <Sidenav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/income' element={<Income />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
