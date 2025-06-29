import React, { useEffect, useState } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { trailerLinks } from '../utils/Constant';

const movieTitles = Object.keys(trailerLinks); // get all available movies

const MainContainer = () => {
  const [movie, setMovie] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const getRandomMovieTitle = () => {
    const randomIndex = Math.floor(Math.random() * movieTitles.length);
    return movieTitles[randomIndex];
  };

  const fetchMovie = async (title) => {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=11b62613`);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const randomTitle = getRandomMovieTitle();
    setSelectedTitle(randomTitle);
    fetchMovie(randomTitle);
  }, []);

  if (!movie) return null;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
     <VideoBackground movieTitle={selectedTitle} />

      <VideoTitle movie={movie} />
    </div>
  );
};

export default MainContainer;
