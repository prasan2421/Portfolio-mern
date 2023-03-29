'use client';

import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper"
import { AppState } from "../../store";

// Type for our state
export interface ProfileState {
    countHappy: number;
    countNeutral: number;
    countSad: number;
  }
  
// Initial state
const initialState: ProfileState = {
    countHappy:0,
    countNeutral:0,
    countSad:0
  };


export const ProfileSlice = createSlice({
name:'profile',

initialState,

reducers:{

    // Action to set the profile name 
    setProfileCountHappyState:(state,action)=>{
        state.countHappy = action.payload;
       
    },
    setProfileCountNeutralState:(state,action)=>{
        state.countNeutral = action.payload;
    },
    setProfileCountSadState:(state,action)=>{
        state.countSad = action.payload;
    }
},

extraReducers:{
    [HYDRATE]:(state,action)=>{

        // Handle client state override

        if(!action.payload.profile.countHappy){
            return state;
        }

state.countHappy = action.payload.profile.countHappy;
state.countNeutral = action.payload.profile.countNeutral;
state.countSad = action.payload.profile.countSad;
    }
}

})

export const {setProfileCountHappyState,setProfileCountNeutralState,setProfileCountSadState} = ProfileSlice.actions;
export const selectProfileState = (state: AppState) => state.profile;
export default ProfileSlice.reducer;