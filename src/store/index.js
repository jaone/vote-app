import { configureStore } from '@reduxjs/toolkit';
import voteReducer from './slices/voteSlice';
console.log({ voteReducer });
export const store = configureStore({
  reducer: {
    vote: voteReducer,
  },
});
