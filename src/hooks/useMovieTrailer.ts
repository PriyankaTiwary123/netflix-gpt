import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../slices/movieSlice";

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const videoData = json.results;

    const filterData = videoData?.filter(
      (video: any) => video?.type === "Trailer"
    );
    const trailer = filterData?.length
      ? filterData[0]
      : videoData && videoData[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
