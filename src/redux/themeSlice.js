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
  },
});

export const { toggleThemeReducer} = themeSlice.actions;
export default themeSlice.reducer;
