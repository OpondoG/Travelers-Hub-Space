import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/Missions/missionsReducer';
import Navbar from './Components/navbar/Navbar';
import Missions from './Components/missions/Missions';
import Profile from './Components/profile/Profile';
import Rockets from './components/Rockets/Rockets';

function App() {
  const dispatch = useDispatch();
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
