import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<string>) => {
      state.theme =
        state.theme === action.payload ? state.theme : action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
