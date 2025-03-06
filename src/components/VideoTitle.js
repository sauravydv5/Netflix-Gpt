const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p>{overview}</p>
      <div>
        <button className=" bg-gray-500 text-white p-4 px-8 text-xl border-opacity-50 rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-8 text-xl border-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
