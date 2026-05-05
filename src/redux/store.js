import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import mealsReducer from './mealsSlice';
import waterReducer from './waterSlice';
import goalsReducer from './goalsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    meals: mealsReducer,
    water: waterReducer,
    goals: goalsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
