import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import HomePage from './WebPages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
