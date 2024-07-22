import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from '@/features/user/userSlice';
import { counterReducer } from '@/features/counterSlice';

// Configure the Redux store
const store = configureStore({
  // Add the reducers to the store
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Reducer for the api slice
    counter: counterReducer, // Reducer for the counter feature
    user: userReducer, // Reducer for the user feature
  },
  // Add middleware to the store
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware), // Adding apiSlice middleware to the default middleware
});

// Type for the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch function
export type AppDispatch = typeof store.dispatch;

// Typed version of useDispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;

// Typed version of useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export the configured store as default export
export default store;
