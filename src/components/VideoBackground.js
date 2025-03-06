import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  // trailer fetch

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/950396/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);

  return <div>VideoBackground</div>;
};

export default VideoBackground;
