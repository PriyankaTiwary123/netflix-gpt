import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="mt-0 md:mt-52 text-lg font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
