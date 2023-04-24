import React from 'react';
import Box from '@mui/material/Box';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import  Footer from './components/Footer';


import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} marglin="auto">
        <Navbar/>
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/exercise/:id" element={<ExerciseDetail/>} />

        </Routes>

      <Footer/>
    </Box>
  )
}

export default App