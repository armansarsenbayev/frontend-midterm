import { createSlice } from '@reduxjs/toolkit';

// Читаем сохранённые goals из localStorage при старте
const loadGoalsFromStorage = () => {
  try {
    const saved = localStorage.getItem('userGoals');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const defaultGoals = {
  calories: 2000,
  protein: 150,
  fat: 65,
  carbs: 200,
  water: 2000,
};

const goalsSlice = createSlice({
  name: 'goals',
  initialState: loadGoalsFromStorage() || defaultGoals,
  reducers: {
    setGoals: (state, action) => {
      // Сохраняем в localStorage при каждом изменении
      const newGoals = { ...state, ...action.payload };
      localStorage.setItem('userGoals', JSON.stringify(newGoals));
      return newGoals;
    },
  },
});

export const { setGoals } = goalsSlice.actions;
export default goalsSlice.reducer;
