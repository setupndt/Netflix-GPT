import React from "react";
import MovieList from "./MovieList";
import { trendingMovies,topRatedMovies,actionMovies,horrorMovies,peopleWatchMost,romanticMovies } from "../utils/MovieSection";

const SecondaryContainer = () => {
  return (
    <div className="px-6 py-8 bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList heading="Trending Now" movieTitles={trendingMovies} />
<MovieList heading="Top Rated" movieTitles={topRatedMovies} />
<MovieList heading="Action Movies" movieTitles={actionMovies} />
<MovieList heading="Horror Movies" movieTitles={horrorMovies} />
<MovieList heading="People Watch Most" movieTitles={peopleWatchMost} />
<MovieList heading="Romantic" movieTitles={romanticMovies} />

      </div>
      {/* You can add more with different headings */}
    </div>
  );
};

export default SecondaryContainer;
