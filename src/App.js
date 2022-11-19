/* eslint-disable import/extensions */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Missions from './Components/missions/Missions';
import Profile from './Components/profile/Profile';
import Rockets from './Components/Rockets/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" exact element={<Rockets />} />
        <Route path="/missions" exact element={<Missions />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </>

  );
}

export default App;
