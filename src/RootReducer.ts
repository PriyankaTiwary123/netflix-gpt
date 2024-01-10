import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from './slices/movieSlice'

export const rootReducer = combineReducers({
        user: userReducer,
        movies: movieReducer
    
})