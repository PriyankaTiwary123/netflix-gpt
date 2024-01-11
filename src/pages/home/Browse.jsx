import {Header} from "../../components"
import useNowPlayingMovies from "../../hooks/usenowPlayingMovies"
import MovieListContainer from "./MovieListContainer";
import TopContainer from "./MainMovieContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      <TopContainer/>
      <MovieListContainer/>    
    </div>
  )
}

export default Browse