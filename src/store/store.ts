'use client';

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { type } from 'os'
import authReducer from './features/auth/authSlice'
import goalReducer from './features/blog/blogSlice'
import profileReducer from './features/profile/profileSlice'

const store = ()=> configureStore({
  reducer: {
    auth: authReducer, 
    goals: goalReducer,
    profile: profileReducer
  },
  devTools:true
})

// ReturnType is a utility type which is quite similar to the Parameters Type. It let's you take the return output of a function, and construct a type based off it.
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(store)