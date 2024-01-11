import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMovieResults: null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResult: (state, action)=>{
        const { movieNames, movieResults } = action.payload;
        state.gptMovieNames = movieNames;
        state.gptMovieResults = movieResults; 
    }
  },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
