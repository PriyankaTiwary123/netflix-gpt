import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from './slices/movieSlice'
import gptReducer from './slices/gptSlice'
import configReducer from './slices/appConfigSlice'

export const rootReducer = combineReducers({
        user: userReducer,
        movies: movieReducer,
        gptSearch: gptReducer,
        appConfig: configReducer 
})