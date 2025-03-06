import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    if (!movieId) {
      console.error("Invalid movieId:", movieId);
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await response.json();
    console.log(json);

    if (!json.results || !Array.isArray(json.results)) {
      console.error(json);
      return;
    }

    // Filter trailers
    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];

    if (!trailer) {
      console.warn("No trailer found.");
      return;
    }

    console.log("Selected Trailer:", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, [movieId]);
};

export default useMovieTrailer;
