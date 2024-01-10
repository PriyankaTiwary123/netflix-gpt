import { createSlice } from "@reduxjs/toolkit";
const MovieSlice =  createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies: null,
        mainMovieTrailer: null,
        trailerVideo: null
    },

    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieVideo: (state, action) =>{
            state.mainMovieTrailer = action.payload

        },
        addMovieTrailer: (state, action)=>{
         state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies, addMainMovieVideo, addMovieTrailer} = MovieSlice.actions

export default MovieSlice.reducer