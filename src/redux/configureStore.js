import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './Missions/missionsReducer';

const rootReducer = combineReducers({
  missions: missionReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getMissions//fulfilled'],
    },
  }).concat(logger),
});

export default store;
