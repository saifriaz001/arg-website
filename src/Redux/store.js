// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice';
import newsReducer from './slices/newsSlice';
import marketReducer from './slices/marketSlice';
import serviceReducer from './slices/serviceSlice';
import projectArraySliceReducer from './slices/projectArraySlice';
const store = configureStore({
  reducer: {
    projects: projectReducer,
    news: newsReducer,
    markets: marketReducer,
    services: serviceReducer,
    projectArray: projectArraySliceReducer
  },
});

export default store;
