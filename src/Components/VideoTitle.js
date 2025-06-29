import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ movie }) => {
  if (!movie) return null; // Prevent rendering if movie is undefined

  return (
    <div className="absolute bottom-20 left-10 z-10  p-6 rounded-lg max-w-xl text-white w-screen aspect-video">
      <h1 className="text-4xl font-bold">{movie.Title}</h1>
      <p className="text-base mt-2 py-2">{movie.Plot}</p>

      <div className="flex">
        <button className="bg-white text-black py-3 px-6 flex items-center rounded-lg hover:bg-gray-300 transition">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="mx-2 bg-gray-700 text-white py-3 px-6 flex items-center rounded-lg hover:bg-gray-600 transition bg-opacity-20">
          <FaInfoCircle className="mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
