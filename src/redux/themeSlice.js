import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  
  return savedTheme;
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
