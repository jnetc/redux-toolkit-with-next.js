import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const noticeSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { updateStatus } = noticeSlice.actions;
export default noticeSlice.reducer;
