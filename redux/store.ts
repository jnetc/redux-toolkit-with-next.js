import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSwitcherSlice';
import noticeReducer from './features/notificationSlice';

export const store = configureStore({
  reducer: { themeReducer, noticeReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
