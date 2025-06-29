import React from 'react';
import { trailerLinks } from '../utils/Constant';
import Header from './Header';

const VideoBackground = ({ movieTitle }) => {
  const trailerUrl = trailerLinks[movieTitle];

  if (!trailerUrl) return null;

  return (
    <div className="relative w-screen h-screen">
      {/* Fullscreen Trailer */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={`${trailerUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerUrl.split('/').pop()}`}
        title="Trailer"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {/* Header above video */}
      <div className="absolute top-0 left-0 z-10 w-full">
        <Header />
      </div>
    </div>
  );
};

export default VideoBackground;
