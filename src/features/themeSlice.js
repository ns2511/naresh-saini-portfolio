import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isVisible: false },
  reducers: {
    toggleTheme: (state) => {
      state.isVisible = !state.isVisible;
    },
    hideTheme: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleTheme, hideTheme } = themeSlice.actions;
export default themeSlice.reducer;
