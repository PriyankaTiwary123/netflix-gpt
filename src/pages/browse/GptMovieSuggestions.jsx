import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector(
    (store) => store.gptSearch
  );

  if(!gptMovieResults) return null

  return (
    <div className="p-4 m-4 bg-black text-white opacity-80">
      <div>
        {gptMovieNames?.map((gptMovieName, index) => {
          return (
            <MovieList
              key={gptMovieName}
              title={gptMovieName}
              movies={gptMovieResults[index]}
            />
          )
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
