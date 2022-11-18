/* eslint-disable import/extensions */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/Rockets/rocketReducer';
import { getMissions } from './redux/Missions/missionsReducer';
import Navbar from './Components/navbar/Navbar';
import Missions from './Components/missions/Missions';
import Profile from './Components/profile/Profile';
import Rockets from './Components/Rockets/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  });
  useEffect(() => {
    dispatch(getMissions());
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/missions" exact element={<Missions />} />
        <Route path="/Rockets" element={<Rockets />} />
      </Routes>
    </>

  );
}

export default App;
