import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlice';
import MoviReducer from './slices/MoviSlice';

export const store = configureStore({
  // reducer: {
  //   counter: counterReducer,
  // },


// export const store = configureStore({
  reducer: {
  favorite: MoviReducer,
  },

});
