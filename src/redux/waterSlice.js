import { createSlice } from '@reduxjs/toolkit';

const loadWaterFromStorage = () => {
  try {
    const saved = localStorage.getItem('waterAmount');
    return saved ? JSON.parse(saved) : 0;
  } catch {
    return 0;
  }
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    amount: loadWaterFromStorage(),
  },
  reducers: {
    addWater: (state, action) => {
      state.amount += action.payload;
      localStorage.setItem('waterAmount', JSON.stringify(state.amount));
    },
    resetWater: (state) => {
      state.amount = 0;
      localStorage.removeItem('waterAmount');
    },
  },
});

export const { addWater, resetWater } = waterSlice.actions;
export default waterSlice.reducer;
