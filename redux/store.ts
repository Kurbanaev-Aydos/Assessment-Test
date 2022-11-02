import { configureStore } from '@reduxjs/toolkit'
import createReducer from './creator';

const store = configureStore({
   reducer: {
      creator: createReducer,
   }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch