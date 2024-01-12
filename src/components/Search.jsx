import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { addGPTMovieResult } from "../slices/gptSlice";

const Search = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.appConfig.selectedLang);
  const searchText = useRef();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Harry Porter and Prisnor of Askaban, Avatar, TopGuns";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (gptResults.choices[0].message.content) {
      //error handling
    }
    const gptMovies = gptResults.choices[0].message.content.split(",");
    const promiseMoviesArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseMoviesArray);
    console.log(tmdbResults);
    dispatch(addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[35%] md:pt-[5%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 mt-[10%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-2 py-2 m-2 md:py-2 md:px-4 md:m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default Search;
