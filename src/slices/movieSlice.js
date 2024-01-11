import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    upComingMovies: null,
    mainMovieTrailer: null,
    trailerVideo: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMainMovieVideo: (state, action) => {
      state.mainMovieTrailer = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },

  },
});

export const {
  addNowPlayingMovies,
  addMainMovieVideo,
  addMovieTrailer,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
