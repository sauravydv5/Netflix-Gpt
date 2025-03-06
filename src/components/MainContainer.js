import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  // if (!movies) return;

  console.log(movies);

  const mainMovie = movies?.[0];
  console.log(mainMovie);

  return (
    <div>
      <VideoTitle
        title={mainMovie?.original_title || ""}
        overview={mainMovie?.overview}
      />
      <VideoBackground />
      {/* ?\movieId={id} */}
    </div>
  );
};

export default MainContainer;
