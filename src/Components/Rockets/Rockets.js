/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from './redux/Rockets';

const Mission = () => {
  const store = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((json) => {
        if (store.length === 0) {
          dispatch(getAPI(json));
        }
      });
  }, []);
  return (
    <ul className="rocket-container">
      {store.map((rocket) => (
        <li key={rocket.id}>
          <ul>
            <li>{rocket.rocket_name}</li>
            <li>
              <img src={rocket.flickr_images[0]} alt="" />
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default Mission;
