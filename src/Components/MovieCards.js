import React from "react";

const MovieCards = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" || !movie.Poster
      ? "https://via.placeholder.com/150x225?text=No+Image"
      : movie.Poster;

  return (
    <div className="w-40 flex-shrink-0 m-2 transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-60 object-cover rounded-lg"
        src={poster}
        alt={movie.Title}
      />
      <p
        className="text-white mt-1 text-sm truncate text-center"
        title={movie.Title}
      >
       
      </p>
    </div>
  );
};

export default MovieCards;
