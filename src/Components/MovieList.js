import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ heading, movieTitles }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(
        movieTitles.map((title) =>
          fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=11b62613`
          ).then((res) => res.json())
        )
      );
      setMovies(responses.filter((movie) => movie?.Poster !== "N/A"));
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [movieTitles]);

  return (
    <div className="mb-6">
      <h3 className="text-xl text-white font-semibold mb-2">{heading}</h3>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies.map((movie, index) => (
          <MovieCards key={movie.imdbID || index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
