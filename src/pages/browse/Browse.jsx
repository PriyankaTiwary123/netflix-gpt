import { useSelector } from "react-redux";
import { Header } from "../../components";
import useNowPlayingMovies from "../../hooks/usenowPlayingMovies";
import MovieListContainer from "./MovieListContainer";
import MainMovieContainer from "./MainMovieContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import Search from "../../components/Search";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <Search />
      ) : (
        <>
          <MainMovieContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
