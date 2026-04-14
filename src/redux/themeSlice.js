import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getInitialTheme(),
  },
  reducers: {
    toggleThemeReducer: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.value);
      
      if (state.value === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
    setThemeReducer: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('theme', state.value);
    }
  },
});

export const { toggleThemeReducer, setThemeReducer } = themeSlice.actions;
export default themeSlice.reducer;
