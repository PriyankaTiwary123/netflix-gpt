import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
    const movies = useSelector((store:any)=> store.movies)
  return (
        <div>
        <MovieList title = 'Now Playing' movies ={movies.nowPlayingMovies}/>
        <MovieList title = 'Popular Movies' movies ={movies.popularMovies}/>
        <MovieList title = 'Trending' movies ={movies.trendingMovies}/>
        <MovieList title = 'Upcoming' movies ={movies.upComingMovies}/>
        </div>     
  )
}

export default MovieListContainer