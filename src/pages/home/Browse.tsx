import {Header} from "../../components"
import useNowPlayingMovies from "../../hooks/usenowPlayingMovies"
import MovieListContainer from "./MovieListContainer";
import TopContainer from "./TopContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <TopContainer/>
      <MovieListContainer/>    
    </div>
  )
}

export default Browse